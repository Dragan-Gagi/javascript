
//Task 1

var num= [29,49,40,11,55];
var newNum=[];


function printNum (list) {
    for (var i = 0; i<list.length ; i++) {
        newNum[i]=list[list.length -1 -i];
    }
    console.log (newNum);
    }


printNum (num);


// Task 2


function doSomething (sentence) {
        console.log ("This code is working")

}

doSomething();
// Task 3

var arr= ["Jim","Steven","Konstantin","Mike", "Peter"];


function findLongestWordLength(str) {
  
 
    var maxLength=0;
    var theWord;

  for ( i = 0; i < str.length; i++) {
    if (str[i].length > maxLength) {
      maxLength= str[i].length;
      theWord = str[i];
    }
  }
console.log (maxLength,theWord)
}


findLongestWordLength(arr);


//Task4

function Second_Greatest_Lowest(arr_num)
{
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var i=1; i < arr_num.length; i++)
  {
    if(arr_num[i-1] !== arr_num[i])
    {
      uniqa.push(arr_num[i]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([23,58,100,433,53]));




//Task 5

function calculate (moreNums,singleNum) {
    var newArray=[];

    for (var i = 0; i<moreNums.length; i++) {
        if (moreNums[i] > singleNum) {
            newArray[newArray.length] = moreNums[i];
        }
    }
    return newArray;
}



function firstFunction (moreNums,singleNum) {
    var biggerNumbers = calculate (moreNums,singleNum);

    console.log (biggerNumbers);
}


firstFunction ([14, 59, 60, 7, 21], 25);
