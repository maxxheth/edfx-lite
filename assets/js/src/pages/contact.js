import renderMenu from "../global/menu";

import swapBGMenuSlide from "../effects/swapBGMenuSlide";

import { sendContactInfo } from "../data/send-contact-info";

import { fetchContactFormData } from "../global/fetch-contact-form-data";

import init from "vanilla-ripplejs/lib";

renderMenu();

swapBGMenuSlide();

const formData = fetchContactFormData();

Object.keys(formData).forEach(key => {
    switch (key) {
        case "name":
            formData[key].value = "Maximillian Heth";

            break;

        case "email":
            formData[key].value = "maximillian.heth@gmail.com";

            break;

        case "subject":
            formData[key].value = "Some subject";

            break;

        case "message":
            formData[key].value = "An important message";

            break;
    }
});

sendContactInfo(
    formData,
    `${location.protocol}//${location.host}/helper_funcs/email-relay-contact.php`
);

init();
