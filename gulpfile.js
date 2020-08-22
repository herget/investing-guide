const gulp = require('gulp')
const staticI18nHtml = require('gulp-static-i18n-html')

const img = () => 
    gulp.src(['img/*.*'])
        .pipe(gulp.dest('./dist/img'))

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

const build = gulp.parallel(img, en, i18n)
exports.default = build
exports.watch = () => gulp.watch(['*.html', 'locales/*.json'], build);