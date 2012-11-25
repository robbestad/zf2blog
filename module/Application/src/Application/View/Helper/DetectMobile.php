<?php
// ./module/Application/src/Application/View/Helper/DetectMobile.php
namespace Application\View\Helper;
 
use Zend\View\Helper\AbstractHelper;
use Mobile_Detect;
 
class DetectMobile extends AbstractHelper
{
    protected $request;
 
    public function __construct()
    {
        $this->detect=new Mobile_Detect;       
    }
 
    public function __invoke()
    {
        return ($this->detect->isMobile() ? ($this->detect->isTablet() ? 'tablet' : 'phone') : 'computer');
    }
}
