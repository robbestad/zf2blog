<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 *
 * See http://code.google.com/p/minify/wiki/CustomSource for other ideas
 **/


return array(
	'js' => array(
		'//js/jquery-1.9.0.min.js',
		'//js/bootstrap.min.js',
		'//js/html5.js',
		'//js/loader.js',
		'//js/XRegExp.js', 
		'//js/shCore.js',
		'//js/shBrushPhp.js',
		'//js/analytics.js',
		'//js/prefixfree.js',
		'//js/prism.js',
		'//js/incrementable.js',
		'//js/jquery.ticker.js',
		'//js/jquery.nivo.slider.js',
	),

    
    'css' => array('//css/bootstrap.min.css', 
    	'//css/bootstrap-responsive.min.css',
    	'//css/prettify.css',
    	'//css/code.css',
    	'//css/sh/shCore.css',
    	'//css/sh/shCoreEclipse.css',
    	'//css/prism.css',

    	),

    'regular' => array(
    	'//css/style.css',
    	),
    	 
    'arcade' => array(
    	'//css/arcade.css',
    	'//css/ticker-style.css',
		'//css/sliderthemes/default/default.css',
		'//css/sliderthemes/bar/bar.css',
	    '//css/nivo-slider.css',
    	),
);
