// +++++++++++++++++++++++++++++++  Task 1     ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 
    // create a h2 heading elemente with text " Hello Javascript ". Append it with "Learn  JavaScript with Nishan shah" to the text using Js
    let h1=document.querySelector("h1");
    console.dir(h1);
    let append_new=h1.innerText+ " Learn javaScript with Nishan shah";
    h1.innerHTML=append_new;
// =============  End of Task 1 ====================================
//---------------------------------Start of Task 2 -----------------------------------------------
    // Create a 3 div with common class name -"box" , Access them and add  some unique text to each of them
    let divs=document.querySelectorAll(".box");
    // console.dir(divs);
// divs[0].innerText="unique test 1";
// divs[2].innerText="unique test 2";
// divs[1].innerText="unique test 0";
let i=0;
for(div of divs)
{
    console.log(div.innerText);
   div.innerText=`uniques text values ${i}`;
   i++;
}
//---------------------------------End  of Task 2 -----------------------------------------------

// let div=document.querySelector('div');
// console.dir(div);

// div.innerText

// let dom=document.getElementById('maincontent');

// console.dir(dom);
// console.log(dom);
