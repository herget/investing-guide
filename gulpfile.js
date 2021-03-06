const gulp = require('gulp')
const replace = require('gulp-replace');
const staticI18nHtml = require('gulp-static-i18n-html')
const gls = require('gulp-live-server')

const img = () => 
    gulp.src(['img/*.*'])
        .pipe(gulp.dest('./dist/img'))

const en = () => 
    gulp.src(['*.html'])
        .pipe(replace(/data-attr-t-?(\w*)/g,"")) // Remove all translation tags starting with 'data-attr-t'.
        .pipe(replace(/(\w*:)?(\w*)-t="(.*?)"/g,"")) // Remove translation param tags ending with '-t=""'. Examples: 'src-t="image.png"', href-t="../de"
        .pipe(gulp.dest('./dist'))

const i18n = () => 
    gulp.src(['*.html'])
        .pipe(staticI18nHtml({
            locale: 'en',
            locales: ['de']
        }))
        .pipe(gulp.dest('./dist'))
       
const serve = () => {
    const server = gls.static('dist')
    server.start()

    gulp.watch(['*.html', 'locales/*.json'], build);
    gulp
        .watch(['dist/**/*'])
        .on('change', path => server.notify.call(server, { path }))
}

const build = gulp.parallel(img, en, i18n)
exports.default = build
exports.serve = serve