var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    argv = require('yargs').argv,
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    exec = require('child_process').exec,
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    runSequence = require('run-sequence'),
    util = require('gulp-util');

var paths = {
    src: {
        html: "./src/**/*.html",
        sass: "./src/styles/**/*.scss",
        app: {
            module: "./src/app/*.module.js",
            config: "./src/app/*.config.js",
            all: "./src/app/**/*.js"
        },
        css: "./src/styles/*.css",
        tests: "./src/ "
    }
}


/* Custom Task Configurations */
var config = {
    styles: {
        build: function () {
            return gulp.src(paths.src.sass)
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(autoprefixer('last 2 versions'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('./src/styles/'))
        }
    },
    scripts: {
        build: function () {
            return gulp.src([paths.src.app.module, paths.src.app.config, paths.src.app.all])
                .pipe(sourcemaps.init())
                .pipe(concat('main.js'))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('./src/app/'))
        },
        clean: function () {
            return gulp.src('./src/app/main.js', { read: false })
                .pipe(clean());
        }
    },
    templates: {
        build: function () {
            return gulp.src(['index.html', './src/app/**/*.html'])
                .pipe(browserSync.stream())
                .pipe(gulpif('*.js', uglify()))
                .pipe(gulpif('*.css', cleanCSS()))
        }
    },
    server: function (cb) {
        exec('npm run dev', function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        })
    },
    watch: function () {
        gulp.watch(paths.src.app.all, ['build-scripts']).on('change', reportChange);
        gulp.watch(paths.src.html, ['build-templates']).on('change', reportChange);
        gulp.watch(paths.src.sass, ['build-styles']).on('change', reportChange);

        function reportChange(event) {
            console.log('Event type: ' + event.type); // added, changed, or deleted
            console.log('Event path: ' + event.path); // The path of the modified file
        }

    }

}

var tasks = {
    development: ['build-scripts', 'build-styles', 'build-templates', 'serve', 'watch']
}


gulp.task('clean-scripts', config.scripts.clean);
gulp.task('build-scripts', ['clean-scripts'], config.scripts.build);
gulp.task('build-styles', config.styles.build);
gulp.task('build-templates', config.templates.build);
gulp.task('serve', ['build-templates'], config.server);
gulp.task('watch', config.watch)

gulp.task('default', tasks.development)