<?php

#phpinfo();

error_reporting(-1);
ini_set('display_errors', 1);

// phpinfo();

// GLOBALS

// require_once __DIR__ . '/tntapi/leankit.php';

$request = $_SERVER['REQUEST_URI'];

preg_match('/(emrg)/', $request, $matches);

preg_match('/(webhook)/', $request, $webhookMatches);

preg_match('/(wp\-fast)/', $request, $shopMatches);

if (count($matches) > 0) {
    require __DIR__ . '/emrg/index.php';
} elseif (count($webhookMatches) > 0) {
	require __DIR__ . '/webhook.php';
} elseif (count($shopMatches) > 0) {
	require __DIR__ . '/wp-fast/index.php';
} else {
    require __DIR__ . '/router.php';
}
