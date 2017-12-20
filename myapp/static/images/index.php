<?php
die("sds");
/**
  Four steps:
  1: Setup environment
  2: Set the path
  3: Zend_Controller_Front is a Singleton
  4: Throw exceptions. Don’t do this in production!
 * */
#1: Setup environment
error_reporting(E_ALL | E_STRICT);
ini_set('display_errors', true);

date_default_timezone_set('Europe/London');

// Define path to application directory
defined('APPLICATION_PATH') || define('APPLICATION_PATH', realpath(dirname(__FILE__) . '/../application'));

// Define path to application directory
defined('PUBLIC_PATH') || define('PUBLIC_PATH', realpath(dirname(__FILE__) ));


    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }

if(($ip == '127.0.0.1') || ($ip == '::1') ){
    $env = 'development';
     $basepath = 'http://emoera-dev.com/';
}else{
    $env = 'production';
    $basepath = 'http://www.gurjeetbagga.com/';
}

// Define application environment
defined('APPLICATION_ENV') || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : $env));

defined('BASE_PATH') || define('BASE_PATH',$basepath );
define('FACEBOOK', '/../library/Facebook/src/Facebook/');
require __DIR__ . '/../library/Facebook/autoload.php';	

define('TWITTER', '/../library/Twitter/src/');
require __DIR__ . '/../library/Twitter/autoload.php';

define('MANDRILL', '/../library/Vendor/Email/Src/');
require __DIR__ . '/../library/Vendor/Email/Src/Mandrill.php';
//require __DIR__ . '/../library/Vendor/Email/Src/Mandrill/';
#2: Set the path if you use multiple versions of the framework on one server, is to set the include path within the bootstrap
set_include_path(implode(PATH_SEPARATOR, array(
    realpath(dirname(__FILE__) . '/../library/'),
    realpath(APPLICATION_PATH . '/models'),
    realpath(APPLICATION_PATH . '/forms'),
    
    get_include_path(),
)));

//
require_once 'Zend/Loader.php';
//require_once 'vendor/autoload.php';
require_once 'Zend/Config/Ini.php';

require_once 'Zend/Application.php';
$application = new Zend_Application(
        APPLICATION_ENV, APPLICATION_PATH . '/configs/application.ini'
);

/** Routing Info * */
$FrontController = Zend_Controller_Front::getInstance();
//$FrontController->setDefaultModule('default');
//$FrontController->registerPlugin(new App_Controller_Plugin_Acl());
$Router = $FrontController->getRouter();

$config = new Zend_Config_Ini(APPLICATION_PATH . '/configs/routes.ini', APPLICATION_ENV);

$Router->addConfig($config, 'routes');

//echo "<pre>".print_r($router,1);exit;
$application->bootstrap()
        ->run();

//#3: Zend_Controller_Front is a Singleton
