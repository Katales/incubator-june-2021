const listDiv = document.getElementById('list');
const key = 'store'
let store = JSON.parse(localStorage.getItem(key)) || [];

const showList = () => {
    if (!store.length) {
        const empty = document.createElement('h3');
        empty.innerText = 'List is empty'
        listDiv.appendChild(empty)
    }

    for (let item of store) {
        const itemDiv = document.createElement('div');
        const imgE = document.createElement('img');
        const nameE = document.createElement('div');
        const priceE = document.createElement('div');
        const button = document.createElement('button');
        imgE.src = item.img
        nameE.innerText = `Name: ${item.name}`
        priceE.innerText = `Price: ${item.price}`
        button.innerText = 'Delete'
        button.onclick = () => {
            deleteItem(item.id)
        }
        itemDiv.append(imgE, nameE, priceE, button)
        listDiv.appendChild(itemDiv)
    }
}

const deleteItem = (id) => {
    store = store.filter(value => value.id !== id)
    localStorage.setItem(key, JSON.stringify(store))
    listDiv.innerHTML = '';
    showList();
}

showList()
