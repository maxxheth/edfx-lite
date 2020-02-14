export const fetchContactFormData = (getRawValues = false) => {
    const name = document.querySelector('[placeholder="Name"]');

    const email = document.querySelector('[placeholder="Email"]');

    const subject = document.querySelector('[placeholder="Subject"]');

    const message = document.querySelector('[placeholder="How Can We Help?"]');

    if (!getRawValues) {
        return {
            name,
            email,
            subject,
            message
        };
    } else {
        return {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };
    }
};
