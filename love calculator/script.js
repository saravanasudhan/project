document.getElementById('cal').addEventListener("click", calculation);
document.getElementById('reset').addEventListener("click", reset);

function calculation() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let ans = score(a, b);
    document.getElementById("ans").innerHTML = `${ans} %`;
    document.getElementById("cal").removeEventListener("click", calculation);
    
}

function score(a, b) {
    const love = Math.floor(Math.random() * 100) + 1;
    return love;
}

function reset() {
    document.getElementById('a').value = "";
    document.getElementById("b").value = "";
    document.getElementById('ans').innerHTML = "&nbsp;";
    document.getElementById("cal").addEventListener("click", calculation);
}