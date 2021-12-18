//for string
function great(name,lastname){
    console.log('Hello '+ name+ ' '+lastname);
}
great('Alnassor', 'Hemed');
//For number 
function sgure(namber) {
    return namber*namber;
    
}
console.log(sgure(2));
//Array
let selected=['red','blue'];
selected[2]=100;
console.log(selected);
//Tenary operator
let x=100;
let y = x > 900 ? 'GoodJob' :'Fair';
console.log(y);
//Conditional statement
let hours = 10;
if (hours >= 6 && hours < 12) console.log('Good Morning');
else if(hours >=12 && hours <18) console.log('Good afternoon');
else console.log('Good evening');

//switch
let a='A';
switch (a) {
    case 'A':console.log('good');break;
    case 'C':console.log('bad');break;
    default:console.log('Unknow');break;
}
//For Loops
console.log('For Loop');
for (let a = 1; a < 6; a++) {
    if(a % 2 ==0) console.log(a)
}
//While Loop
console.log("While loop");
let b = 1;
while (b < 6) {
   if(b % 2 !==0) console.log(b);
   b++;
}
console.log("Do..While loop");
//Do..While loop
let r = 0;
do{
    if(r % 2 !==0) console.log(r);
    r++;
}while(r < 6);
//find max number
let number = max(10,9);
console.log(number);
function max(a, b){
    return (a > b) ? a : b;
}
//birthday wish
let name = 'Mpemba Inc';
let age = '0';

function itsYourBirthday(){
    age++;
    console.log("Happy Birthday," +
     name + ",You add +" +age);
}
itsYourBirthday();
//Buzz progran
const names = Alnassor(15);
console.log(names);
function Alnassor(numbers){
    if (typeof numbers !=='number') 
        return 'No Number';
    if((numbers %3==0) && (numbers %5==0))
        return 'Alnassor';

    if (numbers % 3==0) 
        return 'Al';
        
        if (numbers %5==0) 
        return 'nassor';
        
    return numbers;    
}
//
const movies ={
    tittle:'a',
    years:'2020',
    rating:'5.8',
    dicetor:'xyz'
};
Show(movies);
function Show(obj){
    for(let key in obj)
    console.log(key)
}
//Constractor function
let address=new Address('Pemba',+
    'Zanzibar','+288');
console.log(address);
function Address(City,County, ZipCode ){
    this.City=City;
    this.County=County;
    this.ZipCode=ZipCode;
}