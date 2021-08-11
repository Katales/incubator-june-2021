

export {strNormSpaces, getRandInt};

function strNormSpaces(str) {
    return str.replace(/\b\s+\b/g, ' ').trim();
}

function getRandInt(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}

