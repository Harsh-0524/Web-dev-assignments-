FUNCTION :-  a reusable piece of code

--> Function declaration
-------------------------------------------------------------------------  
  function greet(a)
  {
    console.log("Parameters",a)
    return "function greet called";
  } 
  console.log(a) //function greet called"
  let a=greet(7);  //parameters:7

 greet();  <!-- //parameters:undefined -->
 greet(g,"ABC"); <!-- //parameters:9 -->

* function hoisted in js

---> Functionl expressions
-----------------------------------------------------------------------------
1. console.log(sum(1,9))      <!-- anonymous function -->
cosnt sum=function(a,b)
{
    return a+b;
}
console.log(sum(1,9));    //10
sum(5,5);

2. var sumffunction(a,b).    <!-- named function -->
{
    return a+b;
}
console.log(sum(1,9));
sum(5,5);

* not hoisted 
* stored in variables 

3. Arrow functions 

1. const muultiply =(a,b)==>a*b;
2. const cube = a ===> a*a*a;
3. const sum(a,b) ==>{
    console.log(a,b);
    return a+b;
}

* short syntax
* function is not hoisted 

4. IIFE (immediately invoked fuctional expression)

(function(a,b)){
    console.log(a+b);
    return a*b;

}

