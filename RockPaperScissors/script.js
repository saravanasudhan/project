count =0;
you=0;
comp=0;
tie=0;
function val1(){
a=document.getElementById("a").id;
cal(a);

}
function val2(){
a=document.getElementById("b").id;
cal(a);
}

function val3(){
a=document.getElementById("c").id;
cal(a);
}
function cal(player){
count++;
last="";
const choices = ["a", "b", "c"];
const choice = choices[Math.floor(Math.random() * 3)];
if (player === choice) {
   last="match tie!";
   tie++;
   
} else if (
    (player === "a" && choice === "c") ||
    (player === "c" && choice === "b") ||
    (player === "b" && choice === "a")
) {
    last= "You win!";
    you++;
} else {
    last= "Computer wins!";
    comp++;
}
document.getElementById("val").innerHTML=last;
document.getElementById("cont").innerHTML=`total= ${count} || you win= ${you} || computer win =${comp} ||match tie= ${tie}`
}
