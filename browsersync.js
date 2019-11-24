/* global require, setInterval */

const browsersync = require('browser-sync').create();

const reload = browsersync.reload;

browsersync.watch('*.php').on('change', reload);

browsersync.watch('./views/*.php').on('change', reload);

browsersync.watch('./views/templates/*.php').on('change', reload);

browsersync.watch('./assets/js/dist/*.js').on('change', reload);

browsersync.watch('./assets/css/dist/*.css').on('change', reload);

browsersync.init({

    namespace: function (namespace) {

        return 'localhost:3000' + namespace;
    
    }

});

/* setInterval(() => {

    console.clear();

    reload();

}, 60 * 30000); */
