// ? get element by id

// const h1 = document.getElementById('heading');
// const title = document.getElementsByTagName('h1');
// const titleDiv = document.getElementsByClassName('title');

// console.log(title[0]);
// console.log(h1);
// console.log(titleDiv[0])

// ? query selector

// const h1 = document.querySelector('#heading');
// const title = document.querySelector('h1');
// const titleDiv = document.querySelector('.title');

// const ids = document.querySelectorAll('#heading')
// console.log(ids);

// var heading = document.getElementById('heading');
// heading.innerHTML = 'Heading 2';
// heading.className = 'class2';
// heading.style.color = 'black';
// heading.style.textDecoration = 'underline';
// heading.setAttribute('class', 'class2');

// ? create elements

// var heading = document.createElement('h1');
// heading.className = 'class2';
// heading.id = 'heading2';
// heading.innerHTML = 'New heading';

// var div = document.createElement('div');
// div.className = 'title';

// div.appendChild(heading);

// var collection = document.querySelector('.collections');
// collection.appendChild(div);
// var title1 = document.getElementById('title1');
// collection.replaceChild(div, title1)

// var title1 = document.getElementById('title1');
// var heading1 = document.getElementById('heading');
// title1.removeChild(heading1);

var collection = document.querySelector('#div');
collection.innerHTML = `
    <h1 id="h1">Heading2</h1>
`

// ? event listenners
// var heading = document.getElementById('heading');

// heading.onclick = (event) => {
//     heading.innerHTML = 'you clicked me';
//     console.log(event.target.className);
// }
// var clicked = 0;
// const changeContext = () => {
//     heading.innerHTML = 'you clicked me ' + clicked;
    // clicked++;
    // if (clicked == 5) {
    //     heading.removeEventListener('click', changeContext);
    // }
// }

// heading.addEventListener('click', changeContext);

// ? select all 

// console.log(document.anchors);

// ? forms


// var submit = document.getElementById('submit');
// var username = document.getElementById('username');

// var form = document.getElementById('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(form.username.value);
//     console.log(form.password.value);
//     // form.reset();
//     form.username.value = '';
//     form.password.value = '';
// });

// var username = document.querySelector("input[name='username']");
// console.log(username);

// var h1 = document.getElementById('h1');
// console.log(h1.parentNode)
// console.log(h1.nextSibling.nextSibling.nodeValue)

// var div = document.getElementById('div');
// console.log(div.childNodes)


