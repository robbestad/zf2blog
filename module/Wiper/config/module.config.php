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
                        'action'     => 'index',
                    ),
                ),

            ),
        ),
    ),

    'view_manager' => array(
	#'template_map' => array(
        #    'layout/layout'    	   => __DIR__ . '/../view/layout/layout.twig',
	#),
	'template_path_stack' => array(
            'wiper' => __DIR__ . '/../view',
              
        ),
    ),
);
