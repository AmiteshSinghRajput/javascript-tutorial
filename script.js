let a=document.querySelector("button");
a.addEventListener('click',input);
a.addEventListener('click',namaste);


function namaste()
{
    alert('aap kaise h');

}

function input()
{
    let age =prompt("enter your age");
    a.textContent="age"+age;

}



//--------------------For in loop-------------------------


//----Array---- 
let animal = ["monkey","bakri","elephant","dog"];
for(let key in animal){
    console.log(key,animal[key]);
}


//-----Object---
let people = {
    jyanshu :34,
    amit :13,
    jyansi : "aavya"
}

for(let index in people){
    console.log(index,people[index]);
}



//-----Array for of loop---------
for(let a of animal){
    console.log(a);
}


//------------- Coersion and Conversion ------------

// Type of conversion 
// string,boolean,number

//It all about just conversion 
// explicit coversion and implicit conversion

// --------------Everything about object---------------

// const object = {
//     Property_Name(key)  : 'Property_value',
//     Property_Name1      : 'Property_value1',
//     object1: {
//          property_Name2     : "property_value2",
//          property_Name3     : "property_value3",
//             },
    // function_name() {
    //         console.log("-->Function called syntax = object.function_name() -->nested object call syntax = object.object1.property_Name3")
    // }

// }


//-----example of object ------
const course= {
    name : "javascript",
    sems : "4",
    status1() {
        console.log("complete");
    },
    course1:{
        name : "c++",
        sems : "2"
    }
}

console.log(course.name+"  "+course.course1.sems);
course.status1();

// Another way to create object
const course2 = {};
course2.name="python";
course2.sems= "1";
console.log(course2);

//----------- manufacture by function -------
function f(name1,sems1){
    let course3={
        name : name1,
        sems : sems1
        
    }
    return course3;
}

let data =f("english",9);
console.log(data.name);
console.log(data);


console.log(f("math",8));

//----------manufacture by constructer--------

function Constructorcourse(name,sems){
    this.name=name,
    this.sems=sems,
    this.enroll= function() {
        console.log("yes your sems complete");
    }
}

console.log(new Constructorcourse("dsa",9));

objectcourse = new Constructorcourse("hindi",9);
objectcourse.enroll();
// delete objectcourse.name;  // for delete property
// objectcourse.checkEnrollment = function(){  //create function
//     console.log("yes function dynamically created");
// }
console.log(objectcourse)


//call by value
let number =10;
let number1 = number;
number =15; 

//call by reference 
let object= {
    number : 10
}

let object1 = object
object1.number = 15;

// now copy the object by using pass by value

const co= {
    name : "javascript",
    sems : "4",
    status1() {
        console.log("complete");
        }
}

// let cot = {...co}  // 1. one trick or syntax 
let cot = Object.assign({},co) //2. another trick 
// now change in cot see weather its change in co or not
cot.name = "sanskrit"
cot.sems = "all"

// hurray it actually passes by value

//for loop in object

//1. for in loop
for(let key in co){
    console.log(key,co[key]);
}

//2. for of loop
for(let key of Object.keys(co)){
    console.log(key,co[key]);
}

//now copy object by using for loop

let cota = {};
for(let key in co){
    cota[key] = co[key];
}

//Exercise using objects
//itemname
//price
//discount
//itemcode


//constructor function 
function Product(item,price,discount,itemcode){
    this.itemName = item,
    this.price =price,
    this.discount =discount,
    this.itemcode =itemcode,
    this.actualdisc = function() {
      return  price*(discount/100);
            
    }
}

const prod = new Product("pepsi",40,2,"12rty");

//factory function

function pri(item,pric,dis,itemc) {
     const product={
    itemName : item,
    price :pric,
    discount :dis,
    itemcode :itemc,
    actualdisc(){
      return  pric*(dis/100);

    }
    }
return product;
     }

const prodi = pri("dew",50,10,"ty567");

//-------------Classes------------
class Product1{
    constructor(item,price,discount,itemcode){
               this.itemName=item,
               this.price=price,
               this.discount=discount,
               this.itemcode=itemcode
    }
    //getter and setter method
    get getDiscountvalue(){
        return this.discount;
    }
    set setDiscountvalue(value){
        this.discount=value;
    }
    discountValue(){
        return this.price*this.discount/100;
    }
};

let honey = new Product1("honey","578",10,"po786");

// class inheritence

class furniture extends Product1{
    constructor(){
        super();
    }
    
}

//------------------------- W3RESOURSE javascript basic question -----------------

// //----Q1----
// console.log(Date());
// let date =new Date();

// let darray =["SUN","MON","TUE","WED","THU","FRI","SAT"]; 
// let prepand;
// if(date.getHours()<12){
//     prepand = "AM";
// }else{
//     prepand = "PM";
// }
// console.log(date.getDate());
// console.log("Today Day Is "+darray[date.getDay()]);
// console.log(date.getFullYear());

// console.log("Current Time = "+date.getHours()+" : "+date.getMinutes()+" "+prepand);
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getDate());

// //-------Q2----------
// // console.log(window.print());

// //------Q3-----------
// console.log(date.getMonth()+"-"+date.getDate()+"-"+date.getFullYear());
// console.log(date.getMonth()+"/"+date.getDate()+"/"+date.getUTCFullYear());

// //--------Q4--------
// let x= prompt("side of triangle");
// let y= prompt("side of triangle");
// let z= prompt("side of triangle");

// // console.log(typeof x);

// x=Number(x);
// y=Number(y);
// z=Number(z);


// let s = (x+y+z)/2;
// let area = Math.sqrt(s*(s-x)*(s-y)*(s-z));

// console.log("area of traingle = "+area);


// //@we3resourse Q5

// let q="w3resource";
// console.log(q[5]);
// let l = q.length();

// let i=l-1;
// // while(i>0){

// // }
