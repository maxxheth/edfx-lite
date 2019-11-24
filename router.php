<?php 

error_reporting(-1);
ini_set('display_errors', 1);

$request = $_SERVER['REQUEST_URI'];

require __DIR__ . '/markdown-blog-router.php';

switch ($request) {
    case '/' :
        require __DIR__ . '/views/home.php';
        break;
    case '' :
        require __DIR__ . '/views/home.php';
        break;
    case '/about' :
        require __DIR__ . '/views/about.php';
        break;
    case '/services':
        require __DIR__ . '/views/services.php';
        break;
    case '/portfolio':
        require __DIR__ . '/views/portfolio.php';
        break;
    case '/blog':
        require __DIR__ . '/views/blog.php';
        break;
    case '/contact':
        require __DIR__ . '/views/contact.php';
        break;
    case '/blog/hello-world': 
        renderMarkdownPost('hello-world');
        break;
    default:
        require __DIR__ . '/views/404.php';
        break;
}

