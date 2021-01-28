
// var variable = 'variable';

// var Mytemplate = `My ${variable}`;

// console.log(Mytemplate);

// var myMonth = "0112";

// var date = new Date();
// var myMonth = date.getMonth() + 1;
// myMonth = myMonth.toString().padStart(2,'0');
// console.log(myMonth);

// console.log(myMonth);

// myMonth = myMonth.padStart(2,'0');
// myMonth = myMonth.padEnd(2,'0');
// myMonth = myMonth.trimStart();
// myMonth = myMonth.trimEnd();

// console.log(myMonth);

// var i = 0;
// debugger;
// i = 10;

// console.log(i);


//? Les listes
// var list = [1,2,3,[6,[10,11],8],5];
// console.log(list);
// list = list.flat(1);
// console.log(list);
// list.forEach(num => console.log(num));
// list = list.map(num => num * 2);
// list = list.filter(num => num >= 3);
// const finalSum = list.reduce((somme,num) => somme + num, 0);
// console.log(finalSum);
// list = list.concat([6,7,8,9]);
// list.push(10);
// console.log(list.includes(99));
// list = list.flat(3);



// class Person {
//     constructor(name,age, height) {
//         this.name = name;
//         this.age = age;
//         this.height = height;
//     }
//     description() {
//         return `This is ${this.name}, my age is ${this.age}.`;
//     }
// }

// var mohamed = new Person(
//     'mohamed',
//     19,
//     170
// )
// var ali = new Person(
//     'ali',
//     25,
//     175
// )
// console.log(mohamed.description());
// console.log(ali.description());
// console.log(ali.name);
// console.log(ali.age);
// console.log(ali.height);



// get my elements 

// var chaneButton = document.getElementById('change');
// var body = document.getElementsByTagName('body');


// var list = ['red', 'blue', 'orange', 'green']
// var indice = 0;
// chaneButton.addEventListener('click', () => {
//     body[0].style.backgroundColor = list[indice];
//     indice = ( indice + 1 ) % list.length;
// })