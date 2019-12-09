<?php

function encodeInBase64($relativeImagePath, $dirnameLevel = 0, $doEcho = false) {

        preg_match('/\.\w+/', $relativeImagePath, $matches);
    
        if (count($matches) > 0 && ($matches[0] == '.jpg' || $matches[0] == '.png')) {

            $extensionWithDot = implode($matches);

            $extension = preg_replace('/\./', '', $extensionWithDot);

        }

        $imagePathContents = file_get_contents( ( $dirnameLevel > 0 ? dirname(__DIR__, 1) : __DIR__ ) . $relativeImagePath);

        $base64Str = base64_encode($imagePathContents);

        if ($extension == 'jpg' || $extension == 'jpeg' || $extension == 'png') {

            $dataPath = 'data:image/' . $extension . ';base64,' . $base64Str;

            if (!$doEcho) {

                return $dataPath;

            } else {

                echo $dataPath;

            }

        } 

}