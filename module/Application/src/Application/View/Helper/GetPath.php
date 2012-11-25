<?php
// ./module/Application/src/Application/View/Helper/GetPath.php
namespace Application\View\Helper;
 
use Zend\View\Helper\AbstractHelper;
 
class GetPath extends AbstractHelper
{
    protected $request;
 
    public function __construct()
    {
        #$this->detect=new Mobile_Detect;       
    }
 
    public function __invoke()
    {
        $array=parse_url($_SERVER["REQUEST_URI"]);
        return $array["path"];
    }
}
