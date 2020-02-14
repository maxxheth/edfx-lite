const delayImg = () => {
    const allImgs = [...document.querySelectorAll("img")];

    allImgs.forEach(img => {
        if (img.style.display === "none") img.style.removeProperty("display");
    });
};

export default delayImg;
