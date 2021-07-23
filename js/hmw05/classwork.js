// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
const groupName = 'June-2021-incubator';
document.getElementById('main_header').style.color = groupName;

// b) робить шириниу елементу ul 400px
document.getElementsByTagName('ul')[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
for (const el of document.getElementsByClassName('linkList') ) {
    el.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
const listElement2_text = document.getElementsByClassName('listElement2')[0].innerText;

// e) отримує всі елементи li та змінює ім колір фону на сірий
for (const el of document.getElementsByTagName('li')) {
    el.style.background = 'gray';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
const elsA = document.getElementsByTagName('a');
for (const el of elsA ) {
    el.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const el of elsA ) {
    if (el.innerText === 'link3') {
        el.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const el of elsA ) {
    el.classList.add('element_XXX');
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let class1 = 'sub-header';
const els_subHeader = document.getElementsByClassName(class1);
const background = prompt(`Enter the background color for elements of class ${class1} : `);
for (const el of els_subHeader) {
    el.style.background = background;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
const el_text = 'content 2 segment';
for (const el of els_subHeader) {
    if (el.innerText === el_text) {
        el.style.color = prompt (`Enter the color for text "${el_text}" `);
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
class1 = 'content_1';
document.getElementsByClassName(class1)[0].innerText = prompt(`Enter an arbitrary text for the element of class ${class1}`);

// l) отримати елементи p та змінити їм padding на 20px
for (const el of document.getElementsByTagName('p') ) {
    el.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
for (const el of document.getElementsByClassName('text2') ) {
    el.innerText = groupName;
}
