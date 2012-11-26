<?php
namespace Mobile_Detect;

class Module {

 	public function getAutoloaderConfig()
    {
    #echo __DIR__ . '/src/' . __NAMESPACE__;
        return array(
            'Zend\Loader\ClassMapAutoloader' => array(
             array(
				    __NAMESPACE__ =>__DIR__ . '/src/'.__NAMESPACE__ .'.php'
				)
            ),
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/'.__NAMESPACE__ ,
                ),
            ),
        );
    }


    public function getConfig()
    {
        return array();    
    }
    
}