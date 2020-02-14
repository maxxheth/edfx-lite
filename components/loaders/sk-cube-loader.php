<?php

namespace EDFX;

class LoaderComponent
{

    public $loaderInstance = '';

    public function __construct($loaderName) {

        $this->loaderInstance = $this->getLoaderComponent($loaderName);

    }

    public function getLoaderComponent($loaderName)
    {

        $html = '';

            switch ($loaderName) {

            case 'skCubeLoader':

                $html = '<div class="sk-cube-grid" style="opacity: 0">' .
                    '<div class="sk-cube sk-cube1"></div>;' .
                    '<div class="sk-cube sk-cube2"></div>;' .
                    '<div class="sk-cube sk-cube3"></div>;' .
                    '<div class="sk-cube sk-cube4"></div>;' .
                    '<div class="sk-cube sk-cube5"></div>;' .
                    '<div class="sk-cube sk-cube6"></div>;' .
                    '<div class="sk-cube sk-cube7"></div>;' .
                    '<div class="sk-cube sk-cube8"></div>;' .
                    '<div class="sk-cube sk-cube9"></div>;' .
                '</div>';

            return $html;

        }   
    }
}
