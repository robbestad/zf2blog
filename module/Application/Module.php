<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
use Application\View\Helper\AbsoluteUrl;
use Application\View\Helper\DetectMobile;
use Application\View\Helper\GetPath;
use Application\View\Helper\GetRole;


class Module
{
    public function onBootstrap(MvcEvent $e)
    {
        $e->getApplication()->getServiceManager()->get('translator');
        $e->getApplication()->getServiceManager()->get('viewhelpermanager')->setFactory('controllerName', function($sm) use ($e) {
            
            $viewHelper = new View\Helper\ControllerName($e->getRouteMatch());
            return $viewHelper;
        });
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);
    }

    
    public function getConfig()
    {
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }
    
    public function getViewHelperConfig()
    {
        return array(
            'factories' => array(
                // the array key here is the name you will call the view helper by in your view scripts
                'absoluteUrl' => function($sm) {
                    $locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager
                    return new AbsoluteUrl($locator->get('Request'));
                },
                'detectMobile' => function($sm) {
                    $locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager
                    return new DetectMobile();
                },
                'getPath' => function($sm) {
                	$locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager
                    return new GetPath();
                },
                'getRole' => function($sm){
                	$locator = $sm->getServiceLocator(); // $sm is the view helper manager, so we need to fetch the main service manager
                    return new GetRole();
                    
                }
                

            ),
        );
    }
  
}
