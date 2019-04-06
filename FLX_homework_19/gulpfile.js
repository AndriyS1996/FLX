
const less = require('gulp-less');
const path = require('path');
const gulp = require('gulp');
const { watch, series} = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
 
gulp.task('img-minify', () =>
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('html_minify', () => {
  return gulp.src('index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
});

 gulp.task('less', function () {
      return gulp.src('./src/less/**/*.less')
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/css'));
    });
 
gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
        }))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js'));
});


let serverTask = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
};

gulp.task('reload', function(done){
    browserSync.reload();
    done();
})


gulp.task('default', gulp.series('less', 'js', 'html_minify', 'img-minify'));

exports.serve = () => {
    serverTask();
    watch('src/js/*.js', series('js', 'reload'))
    watch('src/less/*.less', series('less', 'reload'))
    watch('index.html', series('html_minify','reload'))
}

 