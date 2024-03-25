const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
    'resources/js/app.js',
    // 'node_modules/tabler/core/dist/js/tabler.js',
    // 'node_modules/tabler/core/dist/js/demo.js',
    ], 'public/js')
    .sass('resources/sass/app.scss', 'public/css')    
    // .styles([
    //     'resources/css/app.css',
    //     'node_modules/tabler/core/dist/css/tabler.css',
    //     'node_modules/tabler/core/dist/css/tabler-flags.css',
    //     'node_modules/tabler/core/dist/css/tabler-payments.css',
    //     'node_modules/tabler/core/dist/css/tabler-vendors.css',
    //     'node_modules/tabler/core/dist/css/demo.css'
    // ],  'public/css/app.css')
    .sourceMaps();