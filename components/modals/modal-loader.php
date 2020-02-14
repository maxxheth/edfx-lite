<?php

namespace EDFX;

error_reporting('E_ALL');

ini_set('display_errors', true);

class ModalComponent {

    public $modalInstance = '';

    public function __construct($options = ['modalName' => '']) {

        $this->getModalComponent($options['modalName']);

    }

    public function getModalComponent($modalName)
    {

            switch ($modalName) {

            case 'contactModal':

                $this->modalInstance = '<form class="modal contact-modal">' . 
                '<div class="modal-background"></div>' .
                '<div class="modal-content">' .
                    '<div class="field">' .
                    '<label class="label">Name</label>' .
                        '<div class="control">' .
                            '<input class="input contact-modal-name" type="text" placeholder="Your Name">' .
                        '</div>' .
                    '</div>' .

                    '<div class="field">' .
                        '<label class="label">Email</label>' .
                            '<div class="control has-icons-left has-icons-right">' .
                                '<input class="input contact-modal-email is-danger" type="email" placeholder="yourname@email.com" required>' .
                            
                            '</div>' .
                    '</div>' .

                    '<div class="field">' .
                        '<label class="label">What\'s Your Budget?</label>' .
                            '<div class="control">' .
                                '<div class="select">' .
                                    '<select class="contact-modal-budget">' .
                                        '<option>Select Budget Range</option>' .
                                        '<option>$500 to $1000</option>' .
                                        '<option>$1000 to $2000</option>' .
                                        '<option>$2000 to $4000</option>' .
                                        '<option>$4000 to $8000</option>' .
                                        '<option>$8000+</option>' .
                                    '</select>' .
                                '</div>' .
                        '</div>' .
                    '</div>' .

                    '<div class="field">' .
                        '<label class="label">How Can We Help You?</label>' .
                        '<div class="control">' .
                            '<textarea rows="10" style="resize: none;" class="textarea contact-modal-message"></textarea>' .
                        '</div>' .
                    '</div>' .


                    '<div class="field is-grouped">' .
                        '<div class="control">' .
                            '<button type="submit" class="button is-link">Submit</button>' .
                        '</div>' .
                    '</div>' .
                    '</div>' .
                        '<button class="modal-close modal-close__contact-modal is-large" aria-label="close">Close</button>';
                    '</form>';

            break;
        

        }

    }

}