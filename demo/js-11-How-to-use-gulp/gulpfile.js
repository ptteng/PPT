'use strict';
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');
	var jshint = require('gulp-jshint');
	var concat = require('gulp-concat');
	var uglify = require('gulp-uglify');
	var rename = require('gulp-rename');
	var clean = require('gulp-clean');
	var minify_css = require('gulp-minify-css');
 
//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    gulp.src('src/less/task11.less') //该任务针对的文件
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css
});
 
//gulp.task('default',['testLess']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径

//创建任务
gulp.task('hint',function(){
  return gulp.src(['clean/a.js', 'clean/b.js', 'clean/c.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('script', function () {
  return gulp.src(['clean/a.js', 'clean/b.js', 'clean/c.js'])
    .pipe(concat('ABC.js'))
    .pipe(gulp.dest('clean/application'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('clean/application'));
});

gulp.task('css1', function () {
  return gulp.src('clean/css/d.css')
    .pipe(minify_css())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('clean/application'));
});

gulp.task('css2', function () {
  return gulp.src(['clean/css/e.css', 'clean/css/f.css'])
    .pipe(concat('EF.css'))
    .pipe(gulp.dest('clean/application'))
    .pipe(minify_css())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('clean/application'));
});

gulp.task('watch', function () {
  gulp.watch(['a.js', 'b.js', 'c.js'], ['script']);
  gulp.watch('clean/css/d.css', ['css1']);
  gulp.watch(['clean/css/e.css', 'clean/css/f.css'], ['css2']);
});

gulp.task('clean', function () {
  return gulp.src('clean/application', {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function () {
  gulp.run('hint','script', 'css1', 'css2', 'watch');
});

