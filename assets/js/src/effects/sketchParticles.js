// import createParticle from './particles';

// import Sketch from './sketch';

// const Particle = createParticle();

// export const dupeSketchParticlesInstance = SketchParticlesInstance => container => {

//     console.log(SketchParticlesInstance);

//     let newSketchInstance = Sketch.create({
//         container: container,
//         retina: 'auto',
//         particles: [],
//         pool: [],
//     });

//     newSketchInstance = Object.assign(newSketchInstance, Object.create(SketchParticlesInstance));

//     console.log({
//         newSketchInstance: newSketchInstance
//     });

//     return newSketchInstance;

// };

// export const createSketchParticlesInstance = container => (...colors) => (maxParticles = 0) => {

//     return Sketch.create({
//         container: container,
//         retina: 'auto',

//         particles: [],
//         pool: [],

//         setup() {

//             console.log(this);

//             // Set off some initial this.particles.
//             var i, x, y;

//             for (i = 0; i < 20; i++) {

//                 x = (this.width * 0.5) + random(-100, 100);
//                 y = (this.height * 0.5) + random(-100, 100);
//                 this.spawn(x, y);

//             }

//         },

//         spawn(x, y) {

//             var particle, theta, force;

//             if (this.particles.length >= maxParticles)
//                 this.pool.push(this.particles.shift());

//             particle = this.pool.length ? this.pool.pop() : Object.create(Particle);
//             particle.init(x, y, random(5, 40));

//             particle.wander = random(0.5, 2.0);
//             particle.color = random(colors);
//             particle.drag = random(0.9, 0.99);

//             theta = random(TWO_PI);
//             force = random(2, 8);

//             particle.vx = sin(theta) * force;
//             particle.vy = cos(theta) * force;

//             this.particles.push(particle);

//         },

//         update() {

//             var i, particle;

//             for (i = this.particles.length - 1; i >= 0; i--) {

//                 particle = this.particles[i];

//                 if (particle.alive) particle.move();
//                 else this.pool.push(this.particles.splice(i, 1)[0]);

//             }

//         },

//         draw() {

//             this.globalCompositeOperation = 'lighter';

//             for (var i = this.particles.length - 1; i >= 0; i--) {

//                 this.particles[i].draw(this);

//             }

//         },

//         mousemove() {

//             var particle, theta, force, touch, max, i, j, n;

//             for (i = 0, n = this.touches.length; i < n; i++) {

//                 touch = this.touches[i], max = random(1, 4);
//                 for (j = 0; j < max; j++) {

//                     this.spawn(touch.x, touch.y);

//                 }

//             }

//         }

//     });

// };
