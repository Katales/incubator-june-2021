//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
el_idContent = document.getElementById("content");
console.log(el_idContent.innerText);

// -- отримує текст з блоку з id "rules"
el_idRules = document.getElementById('rules');
console.log(el_idRules.innerText)

// -- замініть текст параграфа з id 'content' на будь-який інший
el_idContent.innerText = 'This sensible text is an apt replacement for lora ipsum gibberish';

// -- замініть текст параграфа з id 'rules' на будь-який інший
el_idRules.innerText = 'The original was better ... but be it as it may :-)) ';

// -- змініть кожному елементу колір фону на червоний
for (const el of document.children) {
    el.style.background = 'tomato';
}

// -- змініть кожному елементу колір тексту на синій
for (const el of document.children) {
    el.style.color = 'blue';
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log('class list of element with id=\"rules\" :', el_idRules.classList.toString());

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
for (const el of document.getElementsByClassName('fc_rules')) {
    el.addEventListener('click',
            e => console.log(el.innerText) );
    el.addEventListener('click',
            e => console.log(`Event \"${e.type}\" received for the element with classes = ${el.classList}`) );
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const el of document.getElementsByClassName('fc_rules')) {
    el.style.color = 'tomato';
}