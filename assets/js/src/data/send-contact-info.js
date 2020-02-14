import { fetchContactFormData } from "../global/fetch-contact-form-data";

import { loaderSwitch } from "../effects/loaders/loader-switch";

import Swal from "sweetalert2";

export const sendContactInfo = (defaultFormData, destination) => {
    //const skCubeGrid = document.querySelector(".sk-cube-grid");

    const defaultFormDataText = Object.keys(defaultFormData).reduce(
        (acc, curr) => {
            acc[curr] = defaultFormData[curr].value;

            return acc;
        },
        {}
    );

    const submitButton = document.getElementById("submit-button");

    const promisifiedAjax = payload =>
        new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.addEventListener("readystatechange", () => {
                switch (xhr.readyState) {
                    case 4:
                        if (xhr.status === 200) {
                            resolve({
                                response: xhr.response,
                                status: xhr.status
                            });
                        } else {
                            reject({
                                response: xhr.response,
                                status: xhr.status
                            });
                        }

                        break;
                }
            });

            // const destination =
            //     location.protocol +
            //     "//" +
            //     location.host +
            //     "/helper_funcs/contact-form.php";

            // console.log(destination);

            xhr.open("POST", destination);

            xhr.setRequestHeader(
                "Content-Type",
                "application/json;charset=UTF-8"
            );

            xhr.send(payload);
        });

    submitButton.addEventListener(
        "click",
        event => {
            event.preventDefault();

            let emailPackage;

            let formDataText = fetchContactFormData(true);

            const formDataTextEqualityCheckArray = Object.keys(formDataText)
                .reduce((acc, curr) => {
                    acc.push(formDataText[curr] === defaultFormDataText[curr]);

                    return acc;
                }, [])
                .filter(bool => !!bool);

            if (
                formDataTextEqualityCheckArray.length ===
                Object.keys(defaultFormDataText).length
            ) {
                defaultFormDataText.origin = "contactForm";

                console.log({ defaultFormDataText });
                emailPackage = JSON.stringify(defaultFormDataText);
            } else {
                formDataText.origin = "contactForm";

                console.log({ formDataText });

                emailPackage = JSON.stringify(formDataText);
            }

            const promisedResponse = promisifiedAjax(emailPackage);

            promisedResponse
                .then(() => {
                    Swal.fire(
                        "Message sent!",
                        "We'll get back to you within 1-2 business days.",
                        "success"
                    );
                })
                .catch(error => console.log({ Error: error }));
        },
        false
    );
};
