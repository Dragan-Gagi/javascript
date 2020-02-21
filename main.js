
// //Task 1
// var	a =15;
// var b=-2;
// var	c=22;
// var	d=0;
// var	f=13;


// if (a>b && a>c && a>d && a>f)
// {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log(b);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log(c);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log(d);
// }
// else
// {
//     console.log(f);
// }

// // //Task 2

// var x=3;
// var y=-7;
// var z=2;


// if (x>0 && y>0 && z>0)
// {
//        alert("The sign is +");
// }
// else if (x<0 && y<0 && z<0)
//         {
//           console.log("The sign is +");
//         }
//         else if (x>0 && y<0 && z<0)
//         {
//           console.log("The sign is +");
//         }
//         else if (x<0 && y>0 && z<0)
//         {
//           console.log("The sign is +");
//         }
//         else
//         {
//           console.log("The sign is -");
//         }



//         //Task 3


//         var hello = "This is English";


//         switch (hello) {
//         	case "This is English":
//         		console.log ("Hello World");
        		
//         	 case "This is German":
//         		console.log ("Hallo Welt");
        		
//         	 case "This is Serbian":
//         		console.log ("Zdravo svete");
        		
//         	 case "This is Japanese":
//         		console.log ("こんにちは世界");
        		
//         	 case "This is Spanish":
//         		console.log ("Hola Mundo");
//             default: 
//             console.log ("Hello World")
//         }; 

// //Task 4


// var userAge = 28;



// 	if (userAge>=29) {
// 	console.log ("User is less than 28 years old")
// }

// 	else if (userAge>28) {
// 	console.log ("User is older than 28")
// }

// 	 else if (userAge=28)
// {
// 	console.log("User is 28 years old")
// }




var dataOld = [34, true, "Peter", 1992];
var dataNew = [];



dataNew = dataOld;

console.log(dataNew)

//Task 2

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];


dataNew=dataOld.reverse ();

console.log (dataNew);

//Task 3

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];


var otherData = dataNew.concat(dataOld);


console.log (otherData);

//Task 4

const array1 = [12, 56, 32, 44];
const array2 = [88, 7, 13];


const array3 = array1.concat(array2);

console.log (array3);

//Task 5


const a = [12, 56, 32, 44];
const b = [88, 7, 13];


const result = a.map((element, index) => [element, b[index]]
).flat();
    
result.splice (-1)

console.log (result);


// Task 6


for (var i=1;i<=6; i++) {
    for (var j=1;j <=i;j++) {
        document.write("*");
    }
    document.write ("<br/>");
}

document.write("<br/>");
document.write ("<br/>");
//Task 7 


var n =" ";
 for (var i=1; i<=6; i++){
     for (var j=1; j<=10; j++){
         if (i>1 && i<6 && j>1 && j<10 ) {
 
         document.write(n*j);
     }
     else  {
         document.write("*");
     }
 }
 document.write("<br/>");
 }