const nameLS = 'users';

function crEl (tag, id, classes, text) {
    const el = document.createElement(tag);
    el.id = id || '';
    el.innerText = text || '';
    el.classList = classes || '';
    return el;
}