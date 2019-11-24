const grabBgColors = regexStr => {

    const numRegex = /[0-9]{1,3}/g;

    let newRegexStr = regexStr.match(numRegex);

    newRegexStr = newRegexStr.filter(num => num !== '');

    return newRegexStr;

}

export default grabBgColors;