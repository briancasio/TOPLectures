// 1
let add7 = n => n + 7;
    console.log("This must be 10: " + add7(3));
// 2
function multiply(x,y){
    return x * y;
}
    console.log("This must be 6: " + multiply(2,3));
// 3
let capitalize = s => { 

    let x = s.charAt(0).toUpperCase()
    let y = s.slice(1).toLowerCase()
    return x + y;

};
    console.log("This must be Hello: " + capitalize("heLLo"));
// 4
function lastLetter(s){

    return s.charAt(s.length-1);

}
    console.log("This must be d: " + lastLetter("abcd"));
