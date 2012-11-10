<?php
// Application/View/Helper/ControllerName.php

namespace Application\View\Helper;

use Zend\View\Helper\AbstractHelper;

class ControllerName extends AbstractHelper
{

protected $route;

    public function __construct($route)
    {
        $this->route = $route;
    }

    public function __invoke()
    {
        $controller = $this->route->getParam('controller', 'index');
        return $controller;
    }
}
