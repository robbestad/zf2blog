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
        '//js/html5.js',
        '//js/loader.js',
        '//js/XRegExp.js', 
        '//js/shCore.js',
        '//js/shBrushPhp.js',
        '//js/analytics.js',
        '//js/jquery.ticker.js',
        '//js/jquery.nivo.slider.js',
        '//js/spin.min.js',
        '//js/jquery.spin.js',
        '//js/html5slider.js',
        '//js/parallax.js',
       
    
    ),
    
    
	
    'jsarcade' => array(
    	'//js/arcade.js',
    	'//js/reflow.js',
    	),


    
    'css' => array('//css/bootstrap.min.css', 
    	'//css/bootstrap-responsive.min.css',
    	'//css/prettify.css',
    	'//css/code.css',
    	'//css/sh/shCore.css',
    	'//css/sh/shCoreEclipse.css',
    	'//css/prism.css',

    	),


      'prettycode' => array(
    	'//css/prettify.css',
    	'//css/code.css',
    	'//css/sh/shCore.css',
    	'//css/sh/shCoreEclipse.css',
    	'//css/prism.css',

    	),

    'web' => array(
    	'//css/style.css',
    	
    	),

    'mobile' => array(
        '//css/mobile.css',
        
        ),


    	 
    'arcade' => array(
    	'//css/ticker-style.css',
    	'//css/arcade.css',
		'//css/sliderthemes/bar/bar.css',
	    '//css/nivo-slider.css',
    	),
);
