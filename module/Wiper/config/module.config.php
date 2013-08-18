<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Wiper\Controller\Wiper' => 'Wiper\Controller\WiperController',
        ),
    ),
    
    'router' => array(
        'routes' => array(
            'wiper' => array(
                'type'    => 'literal',
                'options' => array(
                    'route'    => '/wiper',
                    'defaults' => array(
                        'controller' => 'Wiper\Controller\Wiper',
                        'action'     => 'wiper',
                    ),
                ),

            ),
             'crystalis' => array(
                'type'    => 'literal',
                'options' => array(
                    'route'    => '/wiper',
                    'defaults' => array(
                        'controller' => 'Wiper\Controller\Wiper',
                        'action'     => 'wiper',
                    ),
                ),

            ),
        ),
    ),



    'view_manager' => array(
	'template_map' => array(
            'layout/layout'    	   => __DIR__ . '/../view/layout/layout.twig',
            'index/main'        => __DIR__ . '/../view/wiper/index/main.twig',
            'index/mobile'        => __DIR__ . '/../view/wiper/index/mobile.twig',
	),

    ),
);
