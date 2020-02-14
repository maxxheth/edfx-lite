const getSiblings = elem => {
    const children = [...elem.parentNode.childNodes];

    return children.filter(child => child !== elem);
};

export default getSiblings;
