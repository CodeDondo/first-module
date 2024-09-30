const nav = document.getElementById('navigation');

export default function createNav(){
    const addUl = document.createElement('ul');
    const addLi1 = document.createElement('li');
    const addHref1 = document.createElement('a');
    addHref1.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules';
    addHref1.textContent = 'MDN';
    addLi1.appendChild(addHref1);
    addUl.appendChild(addLi1);
    const addLi2 = document.createElement('li');
    const addHref2 = document.createElement('a');
    addHref2.href = 'https://www.w3schools.com/js/js_modules.asp';
    addHref2.textContent = 'w3schools';
    addLi2.appendChild(addHref2);
    addUl.appendChild(addLi2);
    nav.appendChild(addUl);

}