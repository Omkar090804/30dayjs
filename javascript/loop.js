/*
 let num= prompt("enter a number");
if(num%2===0){
    console.log(num,"is even");
}
else{
    console.log(num,"odd");
 }
 */

 let marks = prompt("Enter the marks");

if (80 <= marks && marks <= 100) {
    console.log("A");
} else if (70 <= marks && marks <= 79) {
    console.log("B");
} else if (60 <= marks && marks <= 69) {
    console.log("C");
} else if (50 <= marks && marks <= 59) {
    console.log("D");
} else if (0 <= marks && marks <= 49) {
    console.log("F");
} else {
    console.log("Papers not corrected");
}
