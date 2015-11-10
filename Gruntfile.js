
module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
        server: {
            options: {
                base: ['.'],
                keepalive: true,
                middleware: function(connect, options, middlewares) {
                    middlewares.unshift(function myMiddleware(req, res, next) {
                        var url = require('url').parse(req.url, true);
                        if (url.pathname === "/add") {
                            res.end("" + (Number(url.query.arg1) + Number(url.query.arg2)));
                        } else if (url.pathname === "/sub") {
                            res.end("" + (Number(url.query.arg1) - Number(url.query.arg2)));
                        } else if (url.pathname === "/mult") {
                            res.end("" + (Number(url.query.arg1) * Number(url.query.arg2)));
                        } else if (url.pathname === "/div") {
                            res.end("" + (Number(url.query.arg1) / Number(url.query.arg2)));
                        } else {
                            return next();
                        }
                    });

                    return middlewares;
                },
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);

};
