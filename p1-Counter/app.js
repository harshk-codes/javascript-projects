const sub = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const add = document.querySelector(".inc");
const num = document.querySelector(".num");
 
let count = 0;

add.onclick = () => {
    count += 1;
    num.innerHTML = count;
    num.style.color = "green";
}

reset.onclick = () => {
num.innerHTML = 0;
}

sub.onclick = () => {
    count -= 1;
    num.innerHTML = count;
    if(count >= 0 ){
        num.style.color = "green";
    } else {
        num.style.color = "red";
    }
}