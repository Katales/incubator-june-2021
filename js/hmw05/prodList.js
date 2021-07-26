// --------------   DEBUG data
//     (uncomment the lines to substitute PRODUCTS array from Local Storage)
// const productsDebug =  [
//     {
//         title: 'milk',
//         price: 22,
//         qnt: 55,
//         imgRef: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         qnt: 1,
//         imgRef: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         qnt: 12,
//         imgRef: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         qnt: 5,
//         imgRef: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// localStorage.setItem(LSname, JSON.stringify(productsDebug));

// ---------- end of DEBUG data


let productsJSON = localStorage.getItem(LSname); // LSname declared in additional_lib.js
let products = [];
if (productsJSON.trim() !== '') {
    products = JSON.parse(productsJSON);
} else {
    alert('There are NO products saved !');
}


for (let i = 0; i < products.length; i++) {
    appendProduct(i, products[i]);
}

function btnDelAll_click() {
    products.splice(0, products.length);
    localStorage.setItem(LSname, '');
    document.getElementById('prodItems').remove();
}

function appendProduct(indProd, product) {

    const elProd = document.createElement('div');
    elProd.classList = 'prodItem flxRow flxAcrCenter';
    document.getElementById('prodItems').appendChild(elProd);

    let el = crEl('div', 'prodNum txtL txtBold flxCol flxCenter', '');
    elProd.appendChild(el);
    el.appendChild(crEl('p', '', indProd + 1));

    el = crEl('div', 'prodBody flxRow', '');
    elProd.appendChild(el);
    let el1 = crEl('div', 'prodDesc flxCol flxAlgCenter txtL', '');
    el.appendChild(el1);
    el1.appendChild(crEl('p', '', product.title));
    el1.appendChild(crEl('p', '', 'Price: ' + product.price));
    el1.appendChild(crEl('p', '', 'Quantity: ' + product.qnt));

    el1 = crEl('div', 'prodImg', '');
    el.appendChild(el1);
    el = el1; //prodImg
    el1 = crEl('img', '', '');
    el.appendChild(el1);
    let attr = document.createAttribute('src');
    attr.value = product.imgRef;
    el1.setAttributeNode(attr);
    el.appendChild(el1);

    el = crEl('div', 'btnDel', '');
    elProd.appendChild(el);
    el1 = crEl('button', 'button', 'Delete');
    el1.addEventListener('click', function (e) {
        elProd.remove();
        products.splice(indProd, 1);
        localStorage.setItem(LSname, JSON.stringify(products)); // LSname declared in additional_lib.js
    })
    el.appendChild(el1);
}

function crEl(tag, classes, text) {
    const el = document.createElement(tag);
    el.innerText = text;
    el.classList = classes;
    return el;
}

