const gulp = require('gulp')
const staticI18nHtml = require('gulp-static-i18n-html')

const css = () => 
    gulp.src(['css/*.css'])
        .pipe(gulp.dest('./dist/css'))

const en = () => 
    gulp.src(['*.html'])
        .pipe(gulp.dest('./dist'))

const i18n = () => 
    gulp.src(['*.html'])
        .pipe(staticI18nHtml({
            locale: 'en',
            locales: ['de']
        }))
        .pipe(gulp.dest('./dist'))

exports.default = gulp.parallel(en, i18n, css)