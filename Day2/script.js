// A. Print all even numbers from 0 to 100
            // const N=prompt("To Print any number for 0 to N number Enter N Integer");
            // let i=1;

            // 1. using for loop
                // for( i; i<=N;i++)
                // {
                //     if(i%2==0)
                //     {
                //     console.log(i,"is Even Number");
                //     }
            // }

            // 2. do while loop
                    // do{
                    //     if(i%2==0)
                    //     {

                    //         console.log(i,"is Even Number");
                    //     }
                    //     i++;
                    // }
                    // while(i<=N);

            // 3. while loop
                // while(i<=N)
                // {
                //    if(i%2==0)
                //             {
                //                 console.log(i,"is Even Number");
                //             }
                //             i++;  
                // }                                                                                
// 4. for in loop
    // let string="Test For of Loop";
    // // let vowel=['e']
    // let count =0;
    // for(let val of string)
    // {
    //     if(val=='a' || val == 'e' || val=="i" || val=="o" || val=="u" )
    //     {
    //     count++;
    //     console.log(val);
    //     }       

        
    // }
    //  console.log("Number of vowel in given",string,"is",count);

// 5. for of loop
        // const colors=['red','bule','yellow','orange','white','pink','green'];

        // for (let color of colors)
        //     {
        //         if(color=='red')
        //         console.log(color)
        //     }



// const array=[19,10,12,34,45,54,32,45,65];

// const found =array.find(element=>element===10);
// console.log(found);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// B. Create a game where you start with any random game number. Ask the user to keep
//  guessing the game number until the user enters correct value
    
        // const luck_number=10;
        // let user_number=Number(prompt("Enter try Your luck 0 to 100"));
        // let flag=0;
        // let count=0;
        // while(flag==0)
        // {
        //     if(luck_number==user_number)
        //     { 
        //         console.log("Congratuation you have guess the Correct LuckyNumber");
        //         flag++;
        //     }
        //     else if(count>5)
        //     {
        //         console.log("Your Appempted is finished")
        //         break;
        //     }
        //     else
        //     {
        //         user_number=Number(prompt("Sorry you Guess was Wrong , Try again"));
        //         count++;
        //         console.log("Your Attempted ", count);  
        //     }

        // }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  String Length

// let sentences="The Quick Brown fox jump over the lazy dog";
// let get_length=sentences.length;
// // console.log("The Length of this \"",sentences,"\"is",get_length);
// console.log(sentences[0]);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//1. Reverse a String

    // let str="colors";
    // console.log(str);
    // const rev=str.split('').reverse().join("");
    // console.log(rev);
    // console.log(rev);
//2. Using write a function to reverse the string

let str="colors test test";
let rev=(str)=>{
    reverseString= str.split("").reverse().join('');
    return reverseString;
}
console.log(rev(str));




