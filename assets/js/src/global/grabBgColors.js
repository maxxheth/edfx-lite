const grabBgColors = regexStr => {

    console.log(regexStr);

    const numRegex = /[0-9]{1,3}/g;

    let newRegexStr = regexStr.match(numRegex);

    console.log(newRegexStr);

    newRegexStr = newRegexStr.filter(num => num !== '');

    return newRegexStr;

};

export default grabBgColors;