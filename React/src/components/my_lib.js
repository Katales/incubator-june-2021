
function crEl(tag, id, classes, text) {
    const el = document.createElement(tag);
    id = (id || '').trim().split(' ')[0];
    if (id) el.id = id;
    el.innerText = text || '';
    classes = strNormSpaces(classes || '');
    if (classes) {
        classes.split(' ').forEach(className => el.classList.add(className));
    }
    return el;
}

function strNormSpaces(str) {
    return str.replace(/\b\s+\b/g, ' ').trim();
}

function getRandInt(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits));
}