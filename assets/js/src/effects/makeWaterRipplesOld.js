const makeWaterRipples =
	(canvas) =>
	(backgroundImgUrl) =>
	({ width, height } = {}) => {
		const trueWidth = Number(width.match(/\d+/)[0]);

		const trueHeight = Number(height.match(/\d+/)[0]);

		debugger;
		console.log({ width, height });
		// var canvas = document.getElementById('c'),
		/** @type {CanvasRenderingContext2D} */
		var ctx = canvas.getContext("2d"),
			// width = 400,
			// height = 400,
			half_width = trueWidth >> 1,
			half_height = trueHeight >> 1,
			size = trueWidth * (trueHeight + 2) * 2,
			delay = 30,
			oldind = trueWidth,
			newind = trueWidth * (trueHeight + 3),
			riprad = 3,
			mapind,
			ripplemap = [],
			last_map = [],
			ripple,
			texture,
			line_width = 20,
			step = line_width * 2,
			count = trueHeight / line_width;

		// canvas.width = width;
		// canvas.height = height;

		canvas.setAttribute("width", trueWidth);

		canvas.setAttribute("height", trueHeight);

		/*
		 * Water ripple demo can work with any bitmap image
		 * (see example here: http://media.chikuyonok.ru/ripple/)
		 * But I need to draw simple artwork to bypass 1k limitation
		 */
		// with (ctx) {
		// 	fillStyle = '#a2ddf8';
		// 	fillRect(0, 0, width, height);

		// 	fillStyle = '#07b';
		// 	save();
		// 	rotate(-0.785);
		// 	for (var i = 0; i < count; i++) {
		// 		fillRect(-width, i * step, width * 3, line_width);
		// 	}

		// 	restore();
		// }

		//const image = new Image();

		const image = document.createElement("img");

		console.log(backgroundImgUrl);

		const httpRegex =
			/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/;

		const httpBgUrl = backgroundImgUrl.match(httpRegex)[0];

		image.src = httpBgUrl;

		// const imageWidth = image.naturalWidth;

		// const imageHeight = image.naturalHeight;

		// console.log({Image: image});

		console.log({ trueWidth, trueHeight });

		ctx.drawImage(
			image,
			0,
			0,
			trueWidth,
			trueHeight,
			0,
			0,
			trueWidth,
			trueHeight,
		);

		ctx.fill;

		ctx.save();

		ctx.restore();

		texture = ctx.getImageData(0, 0, trueWidth, trueHeight);
		ripple = ctx.getImageData(0, 0, trueWidth, trueHeight);

		console.log({ ripple: ripple });

		for (var i = 0; i < size; i++) {
			last_map[i] = ripplemap[i] = 0;
		}

		/**
		 * Main loop
		 */
		function run() {
			newframe();
			ctx.putImageData(ripple, 0, 0);
		}

		/**
		 * Disturb water at specified point
		 */
		function disturb(dx, dy) {
			dx <<= 0;
			dy <<= 0;

			for (var j = dy - riprad; j < dy + riprad; j++) {
				for (var k = dx - riprad; k < dx + riprad; k++) {
					ripplemap[oldind + j * trueWidth + k] += 512;
				}
			}
		}

		/**
		 * Generates new ripples
		 */
		function newframe() {
			var i, a, b, data, cur_pixel, new_pixel, old_data;

			i = oldind;
			oldind = newind;
			newind = i;

			i = 0;
			mapind = oldind;

			// create local copies of variables to decrease
			// scope lookup time in Firefox
			var _width = trueWidth,
				_height = trueHeight,
				_ripplemap = ripplemap,
				_mapind = mapind,
				_newind = newind,
				_last_map = last_map,
				_rd = ripple.data,
				_td = texture.data,
				_half_width = half_width,
				_half_height = half_height;

			for (var y = 0; y < _height; y++) {
				for (var x = 0; x < _width; x++) {
					data =
						(_ripplemap[_mapind - _width] +
							_ripplemap[_mapind + _width] +
							_ripplemap[_mapind - 1] +
							_ripplemap[_mapind + 1]) >>
						1;

					data -= _ripplemap[_newind + i];
					data -= data >> 5;

					_ripplemap[_newind + i] = data;

					//where data=0 then still, where data>0 then wave
					data = 1024 - data;

					old_data = _last_map[i];
					_last_map[i] = data;

					if (old_data != data) {
						//offsets
						a = ((((x - _half_width) * data) / 1024) << 0) + _half_width;
						b = ((((y - _half_height) * data) / 1024) << 0) + _half_height;

						//bounds check
						if (a >= _width) a = _width - 1;
						if (a < 0) a = 0;
						if (b >= _height) b = _height - 1;
						if (b < 0) b = 0;

						new_pixel = (a + b * _width) * 4;
						cur_pixel = i * 4;

						_rd[cur_pixel] = _td[new_pixel];
						_rd[cur_pixel + 1] = _td[new_pixel + 1];
						_rd[cur_pixel + 2] = _td[new_pixel + 2];
					}

					++_mapind;
					++i;
				}
			}

			mapind = _mapind;
		}

		// canvas.onmousemove = function(/* Event */ evt) {
		// 	disturb(evt.offsetX || evt.layerX, evt.offsetY || evt.layerY);
		// };

		canvas.addEventListener("mousemove", (event) => {
			console.log("Mouse is moving...");

			console.log({ MouseMoveEvent: event });

			disturb(event.offsetX || event.layerX, event.offsetY || event.layerY);
		});

		setInterval(run, delay);

		// generate random ripples
		// var rnd = Math.random();
		setInterval(function () {
			disturb(Math.random() * trueWidth, Math.random() * trueHeight);
		}, 700);
	};

export default makeWaterRipples;
