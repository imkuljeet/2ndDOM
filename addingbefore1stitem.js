
  // CREATE ELEMENT
  // CREATE A DIV
  var newDiv = document.createElement('div');

  // ADD A CLASS
  newDiv.className = "hello";

  // ADD ID
  newDiv.id = 'hello1';

  // ADD ATTRIBUTE
  newDiv.setAttribute('title', 'hello div');

  // ADD CONTENT INSIDE THE DIV..ADD A TEXT NODE
  var newDivText = document.createTextNode('hello world');

  // ADD TEXT TO DIV
  newDiv.appendChild(newDivText);

  // Find the parent element where the new div should be inserted before
  var itemsList = document.getElementById('items');

  // Find the first child element (the first item in the list)
  var firstItem = itemsList.firstElementChild;

  // Insert the newDiv before the firstItem in the itemsList
  itemsList.insertBefore(newDiv, firstItem);

