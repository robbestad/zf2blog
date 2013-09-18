<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Wiper\Controller\WiperController' => 'Wiper\Controller\WiperController',
        ),
    ),
     'di' => array(
            'instance' => array(
                'ZfTwig\TwigEnvironment' => array(
                    'parameters' => array(
                        'options' => array(
                            'cache' => 'data/cache/twig',
                            'auto_reload' => false,
                            'debug' => true,
                            'cache' => 'compilation_cache'
                        )
                    )
                )
            )
        ),
    'router' => array(
        'routes' => array(
            'wiper' => array(
                'type'    => 'literal',
                'options' => array(
                    'route'    => '/wiper',
                    'defaults' => array(
                        'controller' => 'Wiper\Controller\WiperController',
                        'action'     => 'wiper',
                    ),
                ),

            ),
             'crystalis' => array(
                'type'    => 'literal',
                'options' => array(
                    'route'    => '/wiper',
                    'defaults' => array(
                        'controller' => 'Wiper\Controller\WiperController',
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
