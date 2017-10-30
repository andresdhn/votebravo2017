'use strict'; 

// --------------------------------------------------------------
// DEPENDENCIES
// --------------------------------------------------------------

var gulp 			= require('gulp'), 
	gulpif 			= require('gulp-if'), 
	sass			= require('gulp-sass'), 
	sourceMaps		= require('gulp-sourcemaps'),
    autoPrefixer 	= require('gulp-autoprefixer');

var panini 			= require('panini'),
	args    		= require('yargs').argv,
	webpack 		= require('webpack-stream');

// --------------------------------------------------------------
// Config
// --------------------------------------------------------------

var inputRoot = './src'; 

var input = {
	html: inputRoot + '/html/pages/*.html',
	sass: inputRoot + '/**/*.scss', 
	copy: inputRoot + '/**/*.{png,jpg,gif}', 
	vend: './vendor/**/*.*'
}

var output = {
	build: './build'
}

var sassOptions = { 'outputStyle':  'compressed' }; 
var isProduction = args.env == 'prod'; 

// --------------------------------------------------------------
// Html
// --------------------------------------------------------------

gulp.task('html', function() {
	return gulp
		.src(input.html)
		.pipe( 
			panini({
	    		root: inputRoot + '/html/pages',
		    	layouts: inputRoot + '/html/layouts',
		    	partials: inputRoot + '/html/partials'
		    }) 
		)
		.pipe( 
			gulp.dest(output.build)
		);
}); 

// --------------------------------------------------------------
// Sass
// --------------------------------------------------------------

gulp.task('sass', function() {
	return gulp
		.src(input.sass)
		.pipe (
			gulpif(!isProduction, sourceMaps.init())
		)
		.pipe (
			gulpif(!isProduction, sourceMaps.write())
		)
		.pipe( 
			sass(
				gulpif( isProduction, sassOptions ) 
			).on('error', sass.logError)
		)
		.pipe(autoPrefixer())
		.pipe( 
			gulp.dest( output.build ) 
		); 
}); 

// --------------------------------------------------------------
// Copy
// --------------------------------------------------------------

gulp.task('copy', function() {

	return gulp
		.src(input.copy)
		.pipe(gulp.dest(output.build)); 
}); 

// --------------------------------------------------------------
// Vendor
// --------------------------------------------------------------

gulp.task('vendor', function() {

	return gulp
		.src(input.vend)
		.pipe(gulp.dest(output.build)); 
}); 

// --------------------------------------------------------------
// Default
// --------------------------------------------------------------

gulp.task('default', ['sass', 'html', 'copy', 'vendor']); 

// --------------------------------------------------------------
// Watch
// --------------------------------------------------------------

gulp.task('watch', function () {
	gulp.watch(input.sass , ['sass']); 
	gulp.watch(input.copy , ['copy']); 
	gulp.watch([inputRoot + '/html/{layouts,partials,pages}/**/*'] , [panini.refresh]); 
}); 