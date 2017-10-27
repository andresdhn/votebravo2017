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
	sass: inputRoot + '/**/*.scss'
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
// Watch
// --------------------------------------------------------------

gulp.task('watch', function () {
	gulp.watch(input.sass , ['sass']); 
	gulp.watch([inputRoot + '/html/{layouts,partials,helpers,data}/**/*'] , [panini.refresh]); 
}); 

// --------------------------------------------------------------
// Default
// --------------------------------------------------------------

gulp.task('default', function(){
	console.log('working'); 
})