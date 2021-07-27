// -------- Task 1 --- (cтворити форму з інпутом) ---------------------------------------
// - Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

const form1 = document.getElementById('form1');
form1.addEventListener('submit', (e) => {
    localStorage.setItem('name', e.target.name.value);
});

// -------- Task 2 --- (наповнення інтернет магазину) ---------------------------------------
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
//     створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
// --------------   DEBUG data
//     (uncomment the lines to fill PRODUCTS array if Local Storage is EMPTY)
const productsDebug = [
    {
        id: 1,
        title: 'milk',
        price: 1,
        qnt: 55,
        imgRef: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        id: 2,
        title: 'juice',
        price: 27,
        qnt: 3,
        imgRef: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        id: 3,
        title: 'router Nettis',
        price: 1799.99,
        qnt: 2,
        imgRef: 'https://wintik.com.ua/image/cache/catalog/tovar/netis/router/Netis-WF2780-1000x1000.jpg'
    },
    {
        id: 4,
        title: 'tea',
        price: 15,
        qnt: 5,
        imgRef: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

if (!localStorage.getItem(LSname).trim()) {
    localStorage.setItem(LSname, JSON.stringify(productsDebug));
}
// ---------- end of DEBUG data

const prodForm = document.forms.prodForm;
const {title, qnt, price, imgRef} = prodForm;
const btSave = document.getElementById('btSave');
const btList = document.getElementById('btList');

const products = JSON.parse(localStorage.getItem(LSname)) || [];// LSname declared in additional_lib.js
updProdCount();

prodForm.addEventListener('submit', (e) => {
    e.preventDefault();
})

btSave.addEventListener('click', () => {
    if (!!title.value.trim()) {
        addCurrProd(products);
        localStorage.setItem(LSname, JSON.stringify(products)); // LSname declared in additional_lib.js
    }
    updProdCount();
});

btList.addEventListener('click', () => {
    if (!products.length) {
        alert('There are NO products to view !');
        return;
    }
    open('./prodList.html', "_self");
});

function updProdCount() {
    btList.innerText = products.length ? `View list (${products.length})` : 'View list';
}

function addCurrProd(products) {
    products[products.length] = {
        id: products.length + 1,
        title: title.value, qnt: qnt.value,
        price: price.value, imgRef: imgRef.value
    };
    [title.value, qnt.value, price.value, imgRef.value] = ['', 0, 0, ''];
}

// -------- Task 3 --- (масив users) ---------------------------------------
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
const usersAddr = [];
for (const user of users) {
    usersAddr.push(user.address);
}


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
let elTaskBlock = document.getElementById('task3');
for (const user of users) {
    const elUser = crEl('div', '', 'userBlock');
    elUser.appendChild(crEl('p', '', '', `Name: ${user.name}`));
    elUser.appendChild(crEl('p', '', '', `Age: ${user.age}`));
    elUser.appendChild(crEl('p', '', '', `Status: ${user.status}`));
    ({city, country, street, houseNumber} = user.address);
    const addr = `${country}, ${city}, ${houseNumber} ${street} str.`;
    elUser.appendChild(crEl('p', '', '', `Address: ${addr}`));
    elTaskBlock.appendChild(elUser);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
elTaskBlock.appendChild(crEl('div', '', 'taskDelim'));  // sub-task delimiter

for (const user of users) {
    const elUser = crEl('div', '', 'userBlock');
    elUser.appendChild(crEl('div', '', 'dottedBorder', `Name: ${user.name}`));
    elUser.appendChild(crEl('div', '', 'dottedBorder', `Age: ${user.age}`));
    elUser.appendChild(crEl('div', '', 'dottedBorder', `Status: ${user.status}`));
    ({city, country, street, houseNumber} = user.address);
    const addr = `${country}, ${city}, ${houseNumber} ${street} str.`;
    elUser.appendChild(crEl('div', '', 'dottedBorder', `Address: ${addr}`));
    elTaskBlock.appendChild(elUser);
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
elTaskBlock.appendChild(crEl('div', '', 'taskDelim'));  // sub-task delimiter

for (const user of users) {
    const elUser = crEl('div', '', 'userBlock');
    elUser.appendChild(crEl('div', '', 'dottedBorder', `Name: ${user.name}`));
    elUser.appendChild(crEl('div', '', 'dottedBorder', `Age: ${user.age}`));
    elUser.appendChild(crEl('div', '', 'dottedBorder', `Status: ${user.status}`));
    const elAddr = crEl('div', '', 'flxRow dottedBorder');
    ({city, country, street, houseNumber} = user.address);
    elAddr.appendChild(crEl('div', '', 'dottedBorder', `Country: ${country}`));
    elAddr.appendChild(crEl('div', '', 'dottedBorder', `City: ${city}`));
    elAddr.appendChild(crEl('div', '', 'dottedBorder', `Street: ${street}`));
    elAddr.appendChild(crEl('div', '', 'dottedBorder', `House number: ${houseNumber}`));
    elUser.appendChild(elAddr);
    elTaskBlock.appendChild(elUser);
}

// -------- Task 4 --- (сторінка rules.html) ---------------------------------------
const bt2rules = document.getElementById('bt2rules');


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
//
bt2rules.onclick = () => open('./rules.html', '_self');  // press the button to see script output


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

elTaskBlock = document.getElementById('task4');

rules.forEach((el, ind) => {
    const elDiv = document.createElement('div');
    elDiv.classList = `rules rule${ind + 1}`;
    elDiv.innerHTML = `<h2>${el.title}</h2>
                        <p>${el.body}</p>`;
    elTaskBlock.appendChild(elDiv);
});


