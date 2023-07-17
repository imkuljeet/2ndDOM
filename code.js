// TRAVERSING THE DOM
var itemList = document.querySelector('#items');
// parentnode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="red";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// PARENTELEMENT
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor="blue";
// console.log(itemList.parentElement.parentElement);

// PARENT ELEMENT AND PARENT NODE DOES THE SAME THING ALMOST

// console.log(itemList.childNodes);//nodelist or an array
// dont use child nodes because line break issue
// better to use children instead of child nodes

// console.log(itemList.children);//doesnt look at the line breaks like child nodes
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// FIRSTCHILD

// console.log(itemList.firstChild);//it also takes the line break so its useless

//FIRST ELEMENT CHILD

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent="hello";

// lAST CHILD

// console.log(itemList.lastChild);//it also takes the line break so its useless

//LAST ELEMENT CHILD

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello";

// NEXT SIBLING
// console.log(itemList.nextSibling);//it also gives the text node

// NEXT ELEMENT SIBLING
// console.log(itemList.nextElementSibling);

// PREVIOUS SIBLING
// console.log(itemList.previousSibling);//IT GIVE US THE TEXT NODE

// PREVIOUS ELEMENT SIBLING
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="green";

// HENCE WE CAN DO ALMOST ANYTHING THROUGH JAVASCRIPT AND WE DONT NEED A JQUERY



// CREATE ELEMENT
// CREATE A DIV
var newDiv = document.createElement('div');
console.log(newDiv);

//ADD A CLASS
newDiv.className = "hello";

//ADD ID
newDiv.id='hello1';

//ADD ATTRIBUTE
newDiv.setAttribute('title','hello div');

//ADD CONTENT INSIDE THE DIV..ADD A TEXT NODE
var newDivText = document.createTextNode('hello world');

//ADD TEXT TO DIV
newDiv.appendChild(newDivText);
console.log(newDiv);

var container = document.querySelector('header .container');
var h1=document.querySelector('header h1');

newDiv.style.fontSize="40px";

container.insertBefore(newDiv,h1);

