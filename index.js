//Function that accept two numbers 
    /* var calcSum = function(num1, num2) {
        return num1 + num2;        
    };
    console.log(calcSum(6,7));
    */

//Function that accept three number and return the largest
    /* var largestNumber = function(num1, num2, num3) {
        var greatestNumber = 0;
        var numbersArray = [num1, num2, num3];
        
        for( var i = 0; i < numbersArray.length; i++) {
            if( numbersArray[i] > greatestNumber) {
                greatestNumber = numbersArray[i]   
            }
        }    
        console.log("the largest numbers is " + greatestNumber);    
    };
    largestNumber(9, 12, 15); */

// Function that accept a parameter , and return whether that number is even or odd

var oddEven = function(num) {
    if( num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

oddEven(16);