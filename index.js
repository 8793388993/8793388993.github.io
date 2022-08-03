function table(){

const myTable = [];
const numm = 5;
let table = document.createElement("table");

for(let x=0; x<numm; x++){

 let row = document.createElement("tr");
    
    const temp = [];
    for(let y=0; y<numm; y++){
        var tagname = "td";
        if (x==0){
            tagname = "th";
            
        } 
        let colomn = document.createElement(tagname);
        row.append(colomn);
        colomn.textContent = x*y;
        temp.push(x*y);
    }
    table.append(row);
    myTable.push(temp);
}
document.body.append(table);
console.table(myTable)
}

function message(){

let language = "javascript";
let message = `let's learn ${language}`;
console.log(message);

}

/*let str1 = "JAVASCRIPT IS FUN!";
let str2 = "JAVASCRIPT IS FUN!";
console.log("These two string are same:", str1 == str2);

let sym1 = Symbol("JAVASCRIPT IS FUN!");
let sym2 = Symbol("JAVASCRIPT IS FUN!");
console.log("These two symbol are same:", sym1 == sym2);*/




/* Type of variable  

 let str = "Hii Suraj!";
 let nr = 5;
 let bigNr = 5959494518n;
 let bool = true;
 let sym = Symbol("unique");
 let undef = undefined;
 let unknown = null;

 console.log("str", typeof str);
 console.log("nr", typeof nr);
 console.log("bigNr", typeof bigNr);
 console.log("bool", typeof bool);
 console.log("sym", typeof sym);
 console.log("undef", typeof undef);
 console.log("unknown", typeof unknown);*/



/* CONVERTING STRING TO NUMBER AND ADDING THEM 
let nr1 = 2;
let nr2 ="2";
console.log(nr1 + Number(nr2)); */



/*
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let x = 1000;

console.log(typeof (str1));
console.log(typeof (str2));
console.log(typeof (val1));
console.log(typeof (val2));
console.log(typeof (x));
*/
 


/* ADDITION
let nr1 = 105;
let nr2 = 45;
let result1 = nr1 + nr2;
console.log(result1);
*/


/* CREATING VARIABES
const myName = "Suraj Giri";
const myAge = 22;
const coder = true;
const message = "Hello, My name is " + myName + ", I am " + myAge + 
" years old and I can code javascript : " + coder +".";
console.log(message);  */


/* SQUARING
let nr1 = 0.2;
let nr2 = 3;
let result1 = nr1 ** nr2;
console.log(result1);
*/



/* MODULUS 

let nr1 = 100;
let nr2 = 33;
let result1 = nr1 % nr2;
console.log(`${nr1} %  ${nr2} = ${result1}`);

let nr3 = 100;
let nr4 = 20;
let result2 = nr3 % nr4;
console.log(`${nr3} %  ${nr4} = ${result2}`);

let nr5 = 100;
let nr6 = 45;
let result3 = nr5 % nr6;
console.log(`${nr5} %  ${nr6} = ${result3}`);
*/


/*
let nr5 = 4;
let nr6 = 5;
let nr7 = 2;
console.log(nr5++ + ++nr6 * nr7++);
*/
/*
let a = window.prompt("Enter Value 1 ?");
let b = window.prompt("Enter Value 2 ?");
a = Number(a);
b = Number(b);
let hypotenuseVal = ((a*a) + (b*b))**0.5;
console.log(hypotenuseVal);
*/
/*
let x = 6;
x *=6
console.log(x)
*/
/*
let a = 2;
let b = 4;
let c = 6;
a = a + b;
b = a / c;
c = c % b;
console.log(a, b, c;
*/

let arr1 = new Array("red", "black", "blue", "Green");
let arr2 = [2, 45, 488, "Add", "yes we done it"];
let arr3  = arr1.concat(arr2);
console.log(arr3);
let arr4 = ["suraj", "say", "hi"];
arr4.shift();
let arr5 = arr3.concat(arr4);

console.log(arr5);











