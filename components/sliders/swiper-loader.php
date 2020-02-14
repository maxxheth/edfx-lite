<?php

namespace EDFX;

class SwiperComponent
{
    
    public $swiperInstance = '';

    public function __construct($config = [


        'slideContentShards' => [],
        'options' => [
            'hasButtons' => true,
            'hasPagination' => true,
            'hasScrollBar' => false
        ],
        'slideClasses' => [ 
            
        'containerClass' => 'swiper-container',
        'wrapperClass' => 'swiper-wrapper',
        'slideClass' => 'swiper-slide',
        'paginationClass' => 'swiper-pagination',
        'buttonClasses' => ['prev' => 'swiper-button-prev', 'next' => 'swiper-button-next'],
        'slideClass' => 'swiper-slide',
        'scrollbarClass' => 'swiper-scrollbar'
        
        ]
        

    ]) {
        
        $this->createSlider($config['options'], $config['slideClasses']);

    }

    public function createSlider($options = [], $slideClasses = [])
    {


        $html = '';
    
        $html .= '<div class="' . $slideClasses['containerClass'] . '">' .

        '<div class="' . $slideClasses['wrapperClass'] . '"></div>';

        if ($options['hasPagination']) {

            $html .= '<div class="' . $slideClasses['paginationClass'] . '"></div>';

        }

     

        if ($options['hasButtons']) {

            $html .= '<button class="' . $slideClasses['buttonClasses']['prev'] . '"></button>' . '<button class="' . $slideClasses['buttonClasses']['next'] . '"></button>';

        }

        if ($options['hasScrollBar']) {

            $html .= '<div class="' . $slideClasses['scrollbarClass'] . '"></div>';

        }        

        $endDiv = '</div>';

        $this->swiperInstance = $html . $endDiv;


    }
    
}
