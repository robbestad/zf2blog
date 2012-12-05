ZF2Blog
=======================

Introduction
------------
This is a simple blog application using the ZF2 MVC layer and module
systems. It is developed by Sven Anders Robbestad and in use on www.robbestad.com.

Installation
------------

Clone the repository by issuing the following command:
    
    cd my/project/dir
    git clone https://github.com/svenanders/zf2blog.git

Then update the project:

    cd zf2blog 
    php composer.phar self-update
    php composer.phar install

(The `self-update` directive is to ensure you have an up-to-date `composer.phar` available.)

Configuration
--------------------

Steps:

1. Rename the database.local.php.dist in /config/autoload/ to database.local.php

2. Insert the necessary variables: database, username, password and host

3. Create a folder named cache in /data and make it writable (for Twig templating)

4. You must allow htaccess to be readable

Virtual Host
------------
Afterwards, set up a virtual host to point to the public/ directory of the
project and you should be ready to go!
