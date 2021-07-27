const {name, price, img} = document.forms.form;
console.log(name);
const btn = document.getElementById('btn');
const key = 'store'


const save = (name, price, img) => {
    const store = JSON.parse(localStorage.getItem(key)) || [];
    const storeCopy = [...store];
    const lastId = storeCopy.length ? storeCopy.sort((a, b) => a.id - b.id).pop().id : 0;
    store.push({id: lastId + 1, name, price, img})
    localStorage.setItem(key, JSON.stringify(store))
}

btn.onclick = () => {
    save(name.value, price.value, img.value)
}


