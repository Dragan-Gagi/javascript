
//Task 1
var	a =15;
var b=-2;
var	c=22;
var	d=0;
var	f=13;


if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}

// //Task 2

var x=3;
var y=-7;
var z=2;


if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }



        //Task 3


        var hello = "This is English";


        switch (hello) {
        	case "This is English":
        		console.log ("Hello World");
        		
        	 case "This is German":
        		console.log ("Hallo Welt");
        		
        	 case "This is Serbian":
        		console.log ("Zdravo svete");
        		
        	 case "This is Japanese":
        		console.log ("こんにちは世界");
        		
        	 case "This is Spanish":
        		console.log ("Hola Mundo");
            default: 
            console.log ("Hello World")
        }; 

//Task 4


var userAge = 28;



	if (userAge>=29) {
	console.log ("User is less than 28 years old")
}

	else if (userAge>28) {
	console.log ("User is older than 28")
}

	 else if (userAge=28)
{
	console.log("User is 28 years old")
}