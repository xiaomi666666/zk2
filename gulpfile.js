var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task("server", function() {
    gulp.src("src")
        .pipe(webserver({
            port: 9090,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                next();
            }
        }));

});