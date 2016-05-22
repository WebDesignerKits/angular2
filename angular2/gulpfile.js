var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task("copy", function(){
	gulp.src(['src/**/*']).pipe(gulp.dest('live'));
});

// exec("cd live; npm start",function(err,stdout,stderr){

// });


gulp.task('watch', function() {
       gulp.watch('src/**/*', ['copy']);
});
gulp.task('default',["copy","watch"]);
