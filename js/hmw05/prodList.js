let products = JSON.parse(localStorage.getItem(nameLS)) || []; // nameLS declared in additional_lib.js

const prodList = document.getElementById('prodList');
const btDelAll = document.getElementById('btDelAll');
btDelAll.onclick = () => { // button "Delete all"
    products = [];
    localStorage.setItem(nameLS, '');
    deleteAllProdEl();
};
const btBack = document.getElementById('btBack');
btBack.onclick = () => {
    history.back();
};

products.forEach(appendProduct);

function deleteAllProdEl() {
    while (prodList.firstChild) {
        prodList.lastChild.remove()
    }
}

function appendProduct(product) {

    let el0;
    let el = crEl('div', '', 'prodItem flxRow flxAcrCenter');
    {
        let el = crEl('div', '', 'prodNum txtL txtBold flxCol flxCenter');
        el.appendChild(crEl('p', '', '', product.id));
        el0 = el;
    }
    el.appendChild(el0);

    {
        let el = crEl('div', '', 'prodBody flxRow');
        {
            let el = crEl('div', '', 'prodDesc flxCol flxAlgCenter txtL');
            el.appendChild(crEl('p', '', 'txtBold', product.title));
            el.appendChild(crEl('p', '', '', 'price : ' + product.price));
            el.appendChild(crEl('p', '', '', 'quantity : ' + product.qnt));
            el0 = el;
        }
        el.appendChild(el0);

        {
            let el = crEl('div', '', 'prodImg');
            {
                let el = crEl('img');
                let attr = document.createAttribute('src');
                attr.value = product.imgRef;
                el.setAttributeNode(attr);
                el0 = el;
            }
            el.appendChild(el0);
            el0 = el;
        }
        el.appendChild(el0);
        el0 = el;
    }
    el.appendChild(el0);

    {
        let el = crEl('div');
        {
            let el = crEl('button', 'btDel', 'button bkgBeg', 'Delete');
            el.addEventListener('click', () => {
                products.splice(product.id - 1, 1);
                products.forEach( (product, ind) => {product.id = ind + 1} );
                localStorage.setItem(nameLS, JSON.stringify(products)); // nameLS declared in additional_lib.js
                // products[0].title += 's';
                deleteAllProdEl();
                products.forEach(appendProduct);
            })
            el0 = el;
        }
        el.appendChild(el0)
        el0 = el;
    }
    el.appendChild(el0);

    prodList.appendChild(el);
}


