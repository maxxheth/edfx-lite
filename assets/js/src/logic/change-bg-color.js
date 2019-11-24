export const changeBgColor = elem => (...colors) => interval => {

	let count = 0;

    setInterval(() => {

        if (count < colors.length - 1) {

            count++;
			
            elem.style.background = colors[count];

        } else {

			if (count > -1) {

                count--;

                elem.style.background = colors[count];

            }

        }

    }, interval);

};