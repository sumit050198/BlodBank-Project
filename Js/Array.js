// let book = ["hindi","English","Math","Computer"];
// book[1]="scince"        //replace
// console.log(book);

// let assets = new Array(1,2,"yoyo",3,4);
// console.log(assets[1]);

// *******************************************************
//new element Add karne ke liye use (Push)


// let book=["Hindi","Computer","Scince","Social Scince"];


// book.push("Sanskrit");  //last me add karne ke liye
// book.unshift("English");    //first me add karne ke liye
// book.pop();                 //last element hatane ke liye
// book.pop();
// book.shift();               //first element hatane ke liye                  
// book.splice(0,1);          //apne hisab se element hata sakte h

//  ********** Array ko empty karne ka 2 types hota h **********

// book=[];             //1 type
// book.length=0;       //2 type

// ******** Check Array Position *********//*****Array me indexOf && length same work karta hai*/

// let position = book.indexOf("Social Scince");
// console.log(book);
// console.log(position);

// ************ Split **************

// let text= "This is random text";
// let wordarray=text.split('');
// let wordarray=text.split(' ');
// let wordarray=text.split('s');
// console.log(wordarray);

// *************** Join *****************

// let wordarray=book.join(' ');
// let wordarray=book.join('-');
// console.log(wordarray);

// *************** Add two Array *****************

// let book2 = ["bio","physics"];
// let book3 = ["chemistry","urdu"];
// let newBook = book.concat(book2);
// let newBook = book.concat(book2,book3);
// console.log(newBook); 

// ************* MultiDymantional Array ***************

// let bookWithPages = [
//     ["Math",["300","500"]],
//     ["Physics","400"],
//     ["Bio","100"]
// ];

// let fetch = bookWithPages[1][0];
// // let fetch = bookWithPages[0][1][1];
// console.log(fetch);

// ************ Array *************

// let booklength = book.length;
// for(i=0; i < booklength; i++){
//     console.log(`Element ${i} is ${book[i]} \n`);
// }

// ************ Function *********************

// book.forEach(sumit);
// function sumit(value){
//     console.log(value)
// }

// ************************************************************************************************************
// for(i=1; i<=10; i++){
//     document.write(`2 * ${i} = ${2*i}`);
//     document.write("<br>");
// }

// function multable(){
//     for(i=1; i<=10; i++){
//         document.write(`2 * ${i} = ${2*i}`);
//         document.write("<br>");
//     }
//     document.write("<br>");
// }
// multable();
// document.write(" hello <br><br>");
// multable();

// ***********************************************

// function multable(num){
//     for(i=1; i<=10; i++){
//         document.write(`${num} * ${i} = ${num*i}`);
//         document.write("<br>");
//     }
// }
// multable(2);
// document.write("<br>");
// multable(50);

// ***************** Add number *************

// function add(num1,num2){
//     document.write(`${num1} + ${num2} = ${num1+num2}`)
// }
// add(5,7);
// **************************************************************************

//                      THE ARGUMENT OBJECT

// function add()
// {
//     if(arguments.length == 0){
//         console.log("No any parrameter passed")
//     }
//     else{
//         let sum=0;
//         for(let i = 0; i < arguments.length; i++){
//             sum+=arguments[i];
//         }
//         console.log(sum);
//     }
// }
// add(10,4);
// add(2,3,5);
// add(2,3,4,1);

// ******************* Return Function ************************

function add(a, b){
    
    // document.write(a+b);
    // return c;
    // ******************************
    
    return a+b;

}
let c = add(3, 2);
document.write(c);












































