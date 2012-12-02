<?php
// ./module/Application/src/Application/View/Helper/GetRole.php
namespace Application\View\Helper;
 
use Zend\View\Helper\AbstractHelper;
 
class GetRole extends AbstractHelper
{
    protected $request;
 
    public function __construct()
    {
        #$this->detect=new Mobile_Detect;       
    }
 
    public function __invoke()
    {
    }
    
}
