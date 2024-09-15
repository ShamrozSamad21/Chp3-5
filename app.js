console.log("hello world!")


// Chapter3

// Q1

var age = 15
alert("i am" + age + " years old")


// Q2

var track = 14
alert("you have visited this site" + track + " times")


// Q3

var birthyear = 2003 
console.log("mt birthyear is " + birthyear)

// Q4

var name = "John Doe"
var productTitle = "T-Shirts"
var quantity = prompt("number of shirts u wanna buy")
console.log(name + " ordered " + quantity + productTitle + " on Xyz clothing store")

// Chapter 3 ended

// Chapter4

// Q1

var a = 1 , b = 2 , c = 3

// Q2

// // legal variables 
// var name = "Shamroz"
// var fullName = "Shamroz Abdul Samad"
// var age = 21
// var id = 123
// var email = "samadas242@gmail.com"

// // illegal variables 
// var 12name = 
// var name-123
// var @email =
// var /age = 
// var 45-name =

// Q3
// a

var head = document.querySelector("#head")

// b

document.write("variable names can only contain numbers,$ and _ .For exmaple $my-1stvariable <br>")


// c

document.write("variable must begin with a letter,$ or _. For example: $name,_name or name <br>")


// d

document.write("variable name are case sensitive <br>")

// e

document.write("variable names should not be JS keywords")


// Chapter4 ended 

// Chapter5


// Q1

var num1 = +prompt("enter a number");
var num2 = +prompt("enter a number");
var result1 = num1 + num2;
console.log("sum of " + num1 + " and " + num2 + " is " + result1)


// Q2

var num3 = +prompt("enter a number");
var num4 = +prompt("enter a number");
var result2 = num3 - num4;
console.log("subtraction of " + num3 + " and " + num4 + " is " + result2)


var num5 = +prompt("enter a number");
var num6 = +prompt("enter a number");
var result3 = num5 * num6;
console.log("multiplication of " + num5 + " and " + num6 + " is " + result3)

var num7 = +prompt("enter a number");
var num8 = +prompt("enter a number");
var result4 = num7 / num8;
console.log("division of " + num7 + " and " + num8 + " is " + result4)


// Q4

var movieTickets = 600
var totalTicket = 600 * 5
console.log("total cost to buy 5 tickets to a movie is " + totalTicket)




// Q5


var num = 5
console.log(num + " * " + 1 + " = " + num * 1);
console.log(num + " * " + 2 + " = " + num * 2);
console.log(num + " * " + 3 + " = " + num * 3);
console.log(num + " * " + 4 + " = " + num * 4);
console.log(num + " * " + 5 + " = " + num * 5);
console.log(num + " * " + 6 + " = " + num * 6);
console.log(num + " * " + 7 + " = " + num * 7);
console.log(num + " * " + 8 + " = " + num * 8);
console.log(num + " * " + 9 + " = " + num * 9);
console.log(num + " * " + 10 + " = " + num * 10);






//        Q3


var myVariable="?";
console.log("The value of varilbe before declartion"+myVariable);
myVariable =5;
console.log("The inital value of varible is " + myVariable);
myVariable ++;
console.log("The value after inncrement is " + myVariable)
myVariable +=7;
console.log("after the additonn value  " + myVariable);
myVariable --;
console.log("Afer the dec value is "  + myVariable);
myVariable= myVariable % 3;
console.log("The reminder value of my variable is " +myVariable);


    // Q7 shopping cart


 var price_of_item1=650;
 var price_of_item2=100;
 var Quantity_item1=3;
 var Quantity_item2=7;
 var shipping_Charge=100;

 console.log("The price of item 1 is  "+ price_of_item1);
 console.log("The price of item 2 is  "+ price_of_item2);
 console.log("The Quantity of item 1  "+ Quantity_item1);
 console.log("The Quantity of item 2  "+ Quantity_item2);
 var prodcut1=price_of_item1*Quantity_item1;
 var prodcut2=price_of_item2*Quantity_item2;
 var result5 = prodcut1+prodcut2+shipping_Charge;
 console.log("The total cost of you order  " +result5)


        //    Q8 student percentage;


        var total=980;
        var obtained=804;
        var percantage=( obtained/total)*100;
        var perFormte=percantage.toFixed(2)
        console.log(perFormte+" %")

        // Q9

var usd1=280;
var saudi=70;
var p=usd1*10;
var p2=saudi*25;
var result6=p+p2;
console.log("The Total Currency in PKR  "+result6 +" Rupees")


            //  Q10


var number =10;
let result7=(( number + 5) *10 ) /2;
console.log(result7)

// Q11

var areaofCricel= "Circle";
var radius=20;
var result8=3.142 *(radius*radius);
console.log( "The area of circle is  " + result8  );

//   Q12

var currentAge = 18;
var maxAge = 60;
var amountOfChipsPerDay = 3;
var daysInYear = 365;
var totalChipsNeeded = (maxAge - currentAge) * daysInYear * amountOfChipsPerDay;
console.log(totalChipsNeeded);

//Chapter 5 ended 
