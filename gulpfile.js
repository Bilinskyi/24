'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
rename = require('gulp-rename'),
sftp = require('gulp-sftp'),
concat       = require('gulp-concat'),
jsmin = require('gulp-jsmin'),
browserSync = require('browser-sync').create(),
imageop = require('gulp-image-optimization'),
del         = require('del'), 
autoprefixer = require('gulp-autoprefixer'),
spritesmith  = require('gulp.spritesmith'),
tiny = require('gulp-tinypng-nokey'),
cleanCSS = require('gulp-clean-css');



gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


// more compressed
gulp.task('tiny', function(cb) {
    gulp.src('app/imgNOT/*')
        .pipe(tiny())
        .pipe(gulp.dest('image'));
});




// gulp.task('browserSync', function() {
//     browserSync.init({
//         proxy: "localhost:8888/appWP/"
//     });
// });


gulp.task('images', function(cb) {
	gulp.src(['app/img/**/*.png','app/img/**/*.jpg','app/img/**/*.gif','app/img/**/*.jpeg']).pipe(imageop({
		optimizationLevel: 10,
		progressive: true,
		interlaced: true
	})).pipe(gulp.dest('img_optimized')).on('end', cb).on('error', cb);
});


gulp.task('sass', function () {
	return gulp.src('app/sass/**/*.scss')
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
	.pipe(autoprefixer(['last 15 versions'], { cascade: true }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(gulp.dest('app/css/'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

// gulp.task('styles', function () {
//   return gulp.src('app/css/*.css')
//   .pipe(concatCss("style.css"))
//   .pipe(cleanCSS({compatibility: 'ie8'}))
//   .pipe(gulp.dest('dist/css'));
// });

gulp.task('scripts', function() {
	return gulp.src([ 
		'app/js/**/*.js',
		'!app/js/**/main.js' 
		])
	.pipe(concat('libs.min.js')) 
	.pipe(jsmin()) 
	.pipe(gulp.dest('app/js')); 
});


gulp.task('clean', function() {
	return del.sync('dist'); 
});

gulp.task('build', ['clean', 'images', 'sass', 'scripts' ], function() {

	var buildCss = gulp.src([ 
		'app/css/*.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') 
	.pipe(gulp.dest('dist/fonts'))

	// var buildBxslider = gulp.src('app/bx-slider/**/*') 
	// .pipe(gulp.dest('dist/bx-slider'))

	var buildFancybox = gulp.src('app/fancybox/**/*') 
	.pipe(gulp.dest('dist/fancybox'))

	// var buildOWL = gulp.src('app/owl-carousel/**/*') 
	// .pipe(gulp.dest('dist/owl-carousel'))

	// var buildSendmail = gulp.src('app/sendmail.php') 
	// .pipe(gulp.dest('dist'))

	var buildJs = gulp.src([
		'app/js/main.js'
		]) 
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') 
	.pipe(gulp.dest('dist'));

});


gulp.task('sprite', function() {
	var spriteData = 
  gulp.src('app/spr/*.*') 
  .pipe(spritesmith({
   imgName: 'sprite.png',
   imgPath: '../img/sprite.png',
   padding: 5,
   cssName: 'sprite.css',


   cssOpts: {
    cssSelector: function (item) {
     if (item.name.indexOf('-hover') !== -1) {
      return '.ico.' + item.name.replace('-hover', ':hover');
    }
    else {
      return '.ico.' + item.name;
    }
  }
}

}));

  spriteData.img.pipe(gulp.dest('app/img/')); 
  spriteData.css.pipe(gulp.dest('app/css/')); 
});




gulp.task('watch', ['sass', 'browserSync'], function () {
	gulp.watch('app/sass/**/*.scss', ['sass']);
gulp.watch('app/*.html', browserSync.reload); 
gulp.watch('app/*.css', browserSync.reload); 
gulp.watch('app/*.php', browserSync.reload); 
gulp.watch('app/js/**/*.js', browserSync.reload);
});
