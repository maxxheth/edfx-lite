<?php

require dirname(__DIR__, 1) . '/vendor/autoload.php';

use ScssPhp\ScssPhp\Compiler;

function generateSass($webpackDist) {

    $webpackDistFiles = scandir($webpackDist);

    // Grab any files that contain the scss extension.

    $scssFiles = array_filter($webpackDistFiles, function($filename) {

        return strpos($filename, 'scss') > -1;

    });

    // Map the file dates to an array.

    $scssFileDates = array_map(function($filename) use ($webpackDist) {

        if (file_exists($webpackDist . $filename)) {

            return filemtime($webpackDist . $filename);

        }
        
    }, $scssFiles);

    // Grab the most recent date.

    $latestFileDate = max($scssFileDates);

    // Use the most recent date to filter out all the files with earlier timestamps.

    $latestScssFile = array_filter($scssFiles, function($filename) use ($latestFileDate, $webpackDist) {

        return $latestFileDate === filemtime($webpackDist . $filename);

    });

    // Grab the filename string.

    $scssFilename = implode($latestScssFile);

    // Grab the SCSS content from from the file.

    $scssContent = file_get_contents($webpackDist . $scssFilename);

    // Compile it into raw CSS

    $scssCompiler = new Compiler();

    return $scssCompiler->compile($scssContent);

}