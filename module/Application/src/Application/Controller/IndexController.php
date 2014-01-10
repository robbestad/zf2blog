<?php
/**
 * Zend Framework (http://framework.zend.com/)
 *
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2012 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */


namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\Http\Client;
use Mobile_Detect;

class IndexController extends AbstractActionController
{
public function indexAction()
    {

    $detect = new Mobile_Detect();
        return new ViewModel(array(
            'userAgent' => $_SERVER['HTTP_USER_AGENT'],
            'mobileDevice' => $detect->isMobile(),
            
       ));
    }
    
    public function aboutAction()
    {
         return new ViewModel(array(
            'userAgent' => $_SERVER['HTTP_USER_AGENT'],
            
       ));
    }


    public function blogAction()
    {
        //

        $google_key=array();
        // by ip (allowed: 37.139.9.36, 82.146.75.41)
        $google_key['server']='AIzaSyC9GRAx6jeCHOAfSJkewQztJpgHB2rtbuU';
        // by domain (allowed: robbestad.com & svenardo.com/org)
        $google_key['browser']='AIzaSyCFEB9AVhg1QrjaS372KWt5sDW0qwu9ybI';

        $http = new Client();

        $config = array(
            'adapter'      => 'Zend\Http\Client\Adapter\Socket',
            'sslverifypeer' => false,
            'sslverifyhost' => false,
        );
        $http->setUri('https://www.googleapis.com/blogger/v3/blogs/3058415513828304615&key='.$google_key["domain"], $config);
        $http->setUri('https://www.googleapis.com/blogger/v3/blogs/3058415513828304615?maxPosts=1&key='.$google_key['ip'], $config);
        $http->setMethod('GET');

        $http->setOptions(array('sslcapath' => '/etc/ssl/certs', 'key' => 'AIzaSyC9GRAx6jeCHOAfSJkewQztJpgHB2rtbuU'));

        $response = $http->send();

        return new ViewModel(array(
            'userAgent' => $_SERVER['HTTP_USER_AGENT'],
            'data' => $response,
            'request' => $http->getUri(),

        ));


        /*
                $config = array(
                    'adapter'      => 'Zend\Http\Client\Adapter\Socket',
                    'sslverifypeer' => false,
                    'sslverifyhost' => false,
                );

                $httpClient = new Client();
                // $httpClient->setAdapter('Zend\Http\Client\Adapter\Socket');
                $httpClient->getAdapter()->setOptions(array(
                    'sslverifypeer' => false,
                    'sslverifyhost' => false,
                ));
                $httpClient->setOptions(array('sslcapath' => '/etc/ssl/certs'));


                $httpClient->setUri('https://www.googleapis.com/blogger/v3/blogs/3058415513828304615&key='.$google_key["ip"]);
                $httpClient->setMethod('GET');

                $response = $httpClient->send();

         */

    }


    public function donateAction()
    {
         return new ViewModel(array(
            'userAgent' => $_SERVER['HTTP_USER_AGENT'],
            
       ));
    }
    
}
