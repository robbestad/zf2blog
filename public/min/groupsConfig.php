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
    	//		'//js/jquery.js',
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
    			
    			),
    
    'css' => array('//css/bootstrap.min.css', 
    	'//css/bootstrap-responsive.min.css',
    	'//css/prettify.css',
    	'//css/code.css',
    	'//css/sh/shCore.css',
    	'//css/sh/shCoreEclipse.css',
    	'//css/style.css',
    	'//css/prism.css',
    	),
);
