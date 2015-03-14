// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
    config.set({
        basePath: '',

        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // libraries
            '../libs/jquery/jquery-2.1.1.js',
            '../libs/angular/angular.js',
            '../libs/angular/angular-mocks.js',

            // our app
            'js/*.js',

            // tests
            'test/*.js',

            // templates
            'tpl/*.html'
        ],

        // generate js files from html templates
        preprocessors: {
            'tpl/*.html': 'ng-html2js'
        },

        autoWatch: true,
        browsers: ['Chrome']
    });
};