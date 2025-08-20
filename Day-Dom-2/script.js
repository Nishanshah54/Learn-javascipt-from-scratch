// let div=document.querySelector("div");
// console.log(div);


// 1. about getAttribute 
// div.getAtt
// div.getAttribute("id")


// know about 

/*
-------------------------setAttributes--------------------------------
The setAttribute() method in JavaScript is a part of the Document Object Model (DOM) and
is used to set the value of an attribute on a specified HTML element. If the attribute already exists 
on the element, its value is updated; otherwise, a new attribute with the given name and value is added. 

*/
// let p=document.querySelector("p");
// p.getAttribute("id");

// p.setAttribute('class',"newClassName");
// p.classList('class',"newClassName");


/*
Changing the Color using Javascrip 

*/
// div.style.backgroundColor="yellow";
// div.style.color="white";
// div.style.fontSize="12px";


/*
create new element in javascrip 
1. createElement()
2.Add

*/
let newBtn=document.createElement("button");
newBtn.innerText="Click me!";

let div=document.querySelector("div");
// 1.
div.append(newBtn);//  add at the end of node (inside)
// 2
div.prepend(newBtn); // start of the node (inside)
// 3
div.after(newBtn); // adds after the node (outside)
// 4
div.before(newBtn);// add before the nodes (outside)

//Delete Element
newBtn.remove();