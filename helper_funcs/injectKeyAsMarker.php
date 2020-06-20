<?php

function injectKeyAsMarker($routingDataBlock, $key)
{
    $newRoutingDataBlock = [];
    foreach ($routingDataBlock as $dataset) {
        $dataset['marker'] = $key;

        $newRoutingDataBlock[] = $dataset;
    }

    return $newRoutingDataBlock;
}
