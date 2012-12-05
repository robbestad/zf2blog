<?php
return array(
    'controllers' => array(
        'invokables' => array(
            'Games\Controller\Games' => 'Games\Controller\GamesController',
        ),
    ),
    
    'router' => array(
        'routes' => array(
            'games' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/games[/:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'Games\Controller\Games',
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
            'games' => __DIR__ . '/../view',
        ),
    ),
);
