## CIT --- Cellule Web --- Resources




## Meeting 0: what you should install


install VsCode Editor : 
https://vscode.readthedocs.io/en/latest/setup/windows/

Extensions : 
Live Server / Github 

Create an account github : 
https://github.com/

installer git : 
https://github.com/git-guides/install-git?fbclid=IwAR2jplxduHpnX2_K9SUbo3arx4c5PbFjl_venRON8GFT_nYvu_h5U1LzvPY#install-git-on-windows

Common git commands : http://guides.beanstalkapp.com/version-control/common-git-commands.html?fbclid=IwAR3ZB6tc_IWHecrbNGwnJUnzqxMG9i6mtEdDE5V0jknxCEIA_6iUZW3vo6E


## Meeting 1: HTML & CSS basics

Each meeting we create a branch to save our code

A game to learn Flex : http://flexboxfroggy.com/#fr

Some HTML tags : https://www.w3schools.com/tags/default.asp


## Meeting 2: HTML & CSS basics

### Basic HTML Tags : 

*	`<html>`
*	`<head>`
*	`<title>`
*	`<body>`
*	headings (`h1`, `h2`, `h3`, `h4`, `h5`, `h6`)
*	paragraph `<p>`
*	bold `<strong>`, italic `<em>`
*	ordered list `<ol>`, unordered list `<ul>`, list item`<li>`
*	break `<br>`, horizontal rule `<hr>`
*	image `<img>` and attributes: `src`, `width`, `height`
*	anchor `<a href="">`

### Advanced HTML Tags :


*	`<form>`
	*	`method`, `action`
*	`<input>`:
	*	`type`= `"text"`, `"submit"`, `"reset"`, `"email"`, `"date"`, `"radio"`, `"password"`
	*	`required`, `value`, `name`, `min`
*	dropdown `<select>`
	*	option `<option>`
*	comment `<!-- -->`
*	`<div>` and `<span>`

*	`<header>`
*	`<nav>`
*	`<main>`
*	`<footer>`

### Resources :


* https://learn.freecodecamp.org/responsive-web-design/basic-html-and-html5
* https://stackoverflow.com/
* https://www.w3schools.com/

### CSS basics

Properties:

* text-align
* border
* background
* list-style
* cursor
* display
* color

Text Properties

* text-decoration
* text-transform
* line-height
* font-style
* font-weight
* font-size
* font-family

Box Model

* margin
* border
* padding
* width
* height

## Advanced CSS

Flexbox

* display: flex
* flex-direction
* flex-wrap
* flex-flow
* justify-content
* align-items
* align-content
* order
* flex: flex-grow, flex-shrink and flex-basis
* align-self

Grid 


* https://grid.malven.co/

* https://cssgridgarden.com/#fr


## CSS Resources 

* https://fonts.google.com/
* http://flexboxfroggy.com/#fr

******************************************************************************************

## Javascript

Javascript types:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
7. Object

Javascript comparisons:
- \!==
- \===
- \>=
- \<=
- \>
- \<

Javascript variables:
- var
- let
- const

Javascript conditionals:
- if
- else
- else if
- ternary operator
- switch

Javascript logical operators:
- &&
- ||
- !

Javascript functions:
- var a = function name() {}
- function name() {}
- return
- () => 

Javascript data structures:
- Array
- Object

Javascript looping:
- for
- while
- do
- forEach

Javascript keywords:
- break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- export
- extends
- finally
- for
- function
- if
- import
- in
- instanceof
- new
- return
- super
- switch
- this
- throw
- try
- typeof
- var
- void
- while
- with
- yield

******************************************************************************************
## DOM Manipulation

- getElementById
- querySelector

Reference websites:
*	https://developer.mozilla.org/en-US/docs/web/Events

******************************************************************************************
## Advanced Javascript

Variable declaration:
+ `let variableName` /* its value can be altered
+ `const variableName` /* it stands for constant, its value can't be altered once declared
+ ``` `` ``` /* are used instead of `''` or `""`. Allows us to avoid the "+" separation and elements and variables should be added with syntax `${element}`
+ `a**b`  /* it stands for a to the b potence
+ `element.padStart(param1,param2)` /* param1 number of characters param2 are added before the value of element declared. The default param2 is `" "`
+ `.padEnd(param1,param2)` /* Same as above but at the end
+ `.trimStart()` /* eliminates empty spaces from the start of a variable
+ `.trimEnd()` /* Same as above but from the end
+ `debugger;` /* Stops running the code and opens console for a step by step check

Functions:
+ Function declaration syntax: `const functionname=(param1,param2...) => action` /* If there is an only return, there is no need to type "return" and if it's just one parameter, no need to add `"()"`
+ Currying: `const functionname= param1 => param2 => action` /* To properly call function syntax is:  `functionname (param1)(param2)`
+ Compose: `const functionname= (param2,param3) => param1 => param2(param3(param1))` /* Being param2 and 3 functions y param1 a value. Executes a function inside a function executed with the initial param1

Arrays:
+ `array.forEach(num=>{})` /* For each element num of the array, executes the actions inside {}
+ `array.map(num=>{})` /* For each element num in the array, executes actions inside {} and return needs to be specified since the return will be placed in a new array.
+ `array.filter(num=>{})` /* For each element num of the array a condition is checked. If the value turns out true, it will be added to teh new array. Return needs to be specified
+ `array.reduce((accumulator,num)=>{}, param3)` /* Acumulates values of the operation performed in previous elements, param3 beinf the initial value of the acumulator
+ `array.concat(param1)` /* Concats param1 to the array
+ `array.includes('param1')` /* Verifies the array includes param1
+ `array.flat(param1)` /* Elminates the nested arrays to a param1 level
+ `array.flatMap(param1=>{})` /* For each element num, the operation inside {} is performed and the array is lowered to a level 1 nesting
+ `array.fromEntries` /* Turns the array into an object, making the first element of the array the property and the second the value of such property

Objects:
+ `const(/let) {property1, property2,...} = obj`  /* Given an object obj, keeps the value of the properties in new variables property1, property2,...etc
+ `{...obj}` /* Creates a clone object of the object obj
+ `Object.assign(param1,param2)` /* Clones the lements of an object param2 in an object param1
+ `Object.values(obj)` /* Takes the values of the properties of an object obj
+ `Object.entries(obj)` /* returns an array with property,value of each element of an object obj
/* `.entries` and `.values` can be used with array methods such as `.map`, `.forEach`, etc.
+ `this` /* when using this parameter, the method/action is applied exclusively to the element in which "this" has been summoned.

Classes:
+ Class creator syntax: 
 ```
 Classname {
 constructor (param1,param2){
    this.param1= value;
    this.param2= value2;
    }
    classmethod(){
    }
 }
 ```

+ Create class object syntax: `new Classname(param1,param2)`

+ Class extention syntax: 
 ```
 Classextension extends Classname {
    constructor(param1,param2){
       super(param1,param2);
    }
    classextensionmethod(){
    }
 }
 ```

Loops:
+ for of: `for (param1 of array){}` /* It's a for loop in an array and an action over the element number param1 in an array array
+ for in: `for (param1 in obj) {}` /* It's a for loop of the properties and an action over the property number param1 in an object obj


