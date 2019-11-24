/* global require, setInterval */

const gaze = require('gaze');

const exec = require('child_process').exec;

const setGaze = route => command => {

    return gaze(route, (err, watcher) => {

        if (err) console.log(err);
    
        watcher.on('changed', async filename => { 
            
            await exec(command); 
        
            console.log(`${filename} was changed`);
    
        });
    
    });

};

const pagesSrcRoute = './assets/js/src/pages/';
const cssSrcRoute = './assets/css/src/';

setGaze(pagesSrcRoute + 'home.js')('npm run bundleJSHome');
setGaze(pagesSrcRoute + 'about.js')('npm run bundleJSAbout');
setGaze(cssSrcRoute + '*.scss')('npm run bundleCSS');
setGaze(cssSrcRoute + '**/*.scss')('npm run bundleCSS');

// gaze('./assets/js/src/pages/home.js', (err, watcher) => {

//     if (err) console.log(err);

//     watcher.on('changed', async filename => { 
        
//         await exec('npm run bundleJSHome'); 
    
//         console.log(`${filename} was changed`);

//     });

// });

// gaze('./assets/js/src/**/*.js', (err, watcher) => {

//     if (err) console.log(err);

//     watcher.on('changed', async filename => { 
        
//         await exec('npm run bundleJS'); 
    
//         console.log(`${filename} was changed`);

//     });

// });

gaze('./assets/js/dist/*.js', (err, watcher) => {

    if (err) console.log(err);

    watcher.on('changed', filename => { 
        
        console.log(`${filename} was updated!`);
    
    });

});

// gaze('./assets/css/src/*.scss', (err, watcher) => {

//     if (err) console.log(err);

//     watcher.on('changed', filename => {

//         exec('npm run bundleCSS');

//         console.log(`${filename} was updated!`);

//     });

// });

// gaze('./assets/css/src/**/*.scss', (err, watcher) => {

//     if (err) console.log(err);

//     watcher.on('changed', filename => {

//         exec('npm run bundleCSS');

//         console.log(`${filename} was updated!`);

//     });

// });

gaze('./assets/css/dist/*.css', (err, watcher) => {

    if (err) console.log(err);

    watcher.on('changed', filename => {

        console.log(`${filename} was updated!`);

    });

});

setInterval(() => {

    console.clear();

}, 60 * 15000);