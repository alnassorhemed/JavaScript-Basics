let number1 = [1,2,3,4,5];
//let number2=number1;
number1=[];
console.log(number1);

//combine array
let num =[1,2,3,4,5];
let mum =[6,7,8,9,10];

let comnbine =[...mum, ...num];
console.log([...comnbine]);

const slice =comnbine.slice();
console.log([slice]);

//Function
function intrest(princ, rate=3.5, year=5){
    return princ * rate /100 * year;
}
console.log('The intrest is:$'+intrest(10000));