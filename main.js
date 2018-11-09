//Select the element or group of elements that we want to affect.
// Decide the effect we want to apply to the selection.

// getElementById('element');

const h1 = document.getElementById('title');

h1.style.color ='red';

document.getElementById('btn').style.backgroundColor = 'blue';



document.getElementsByTagName('element');
//node-list array-like objects
//index based, length property but no array methods

const list = document.getElementsByTagName('li');

console.log(list);

list[0].style.color = 'red';


// get element by class name
document.getElementsByClassName('class');

const special = document.getElementsByClassName('special');
console.log(special);

special[1].style.color= 'blue'


//write any css selector
//(might be the favorite one)
document.querySelector('css selector');// selects single
document.querySelectorAll('css selector'); //selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'yellow';

// const list = document.querySelectorAll('.speical');
//
// list.forEach(function (item){
//   console.log(item);
//   item.style.color = 'red';
// })


//childNodes --returns all choldsNodes including whitespace which is trated as a text-node
//children
//firstChild
//lastChild

//preivousSibling
//nextSibling
//return whitespace

//nodeValue
//textContent


//important john for future used
// document.getElementById('item').classList.add('real');

const btn = document.querySelector('.btnTwo');

btn.addEventListener('click',addClass);

function addClass(){
  document.getElementById('item').classList.add('real');
}

const item = document.getElementById('itemThree');
const heading = document.getElementById('heading');

heading.addEventListener('mouseover', function(){
  heading.classList.add('real');
})

heading.addEventListener('mouseout', function(){
  heading.classList.remove('real');
})
