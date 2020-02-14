/* global require */
/* eslint-disable */
const browsersync = require('browser-sync').create();

const reload = browsersync.reload;

const onChangePaths = [

    {
        fileDir: '*.php',
        event: 'change'
    },
    {
        fileDir: './helper_funcs/*.php',
        event: 'change'
    },
    {
        fileDir: './views/*.php',
        event: 'change'
    },
    {
        fileDir: './views/templates/*.php',
        event: 'change'
    },
    {
        fileDir: './views/services/*.php',
        event: 'change'
    },
    {
        fileDir: './assets/js/dist/*.js',
        event: 'change'
    },
    {
        fileDir: '*.php',
        event: 'change'
    },
    {
        fileDir: './assets/css/dist/*.css',
        event: 'change'
    },
    {
        fileDir: '*.json',
        event: 'change'
    },
    {
        fileDir: './svg/*.svg',
        event: 'change'
    },

    {
        fileDir: './components/**/*.php',
        event: 'change'
    }


];

onChangePaths.forEach(pathObj => {

    const {
        fileDir,
        event
    } = pathObj;

    browsersync.watch(fileDir).on(event, reload);

});

browsersync.init({

    // namespace: function (namespace) {

    //     return 'localhost:3000' + namespace;

    // }

    proxy: {
        target: 'http://edfx.test'
    },

    injectChanges: true


});