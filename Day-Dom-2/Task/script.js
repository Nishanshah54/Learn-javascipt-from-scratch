// Q1. Create a new button element .Given it text "click Me ", background color of red & text color of white
// insert the button as the first element inside the body EventTarget. 

let newBtn=document.createElement("button");
// console.log(newBtn);
newBtn.innerText="Click Me !";

newBtn.style.backgroundColor="red";
newBtn.style.color="white";


// Insert button as the first element inside body
document.body.prepend(newBtn);
document.body.style.backgroundColor="blue";




// console.dir(newBtn);

/*
Q2. Create a <p> tag in html , give it a class & some styline 
Now create a new class in css and try to append this class to the <p> element

Did you notice ,how you overwrite the class name when you add a new one? Solve this problem using  ClassList.
*/

let param=document.querySelector('p');
// param.setAttribute('class','newClass'); 
param.classList.add("newClass") ;

