

let total=0;
    let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count;
    total+=1;
}

function decrement() {
    count -= 1
    if(count<0){
    count=0
    }
    countEl.textContent = count
    total-=1;
}
function save() {
    let countStr = count + " - "
    saveEl.textContent +=countStr
    countEl.textContent = 0
    count = 0
    if(total>10){
        saveEl.style.color="red";
        saveEl.style.fontSize="2rem";
        saveEl.style.textDecoration="underline";
    saveEl.textContent="Max Capacity Reached";
}
    //console.log("Let's count people on the subway!")
}

//console.log("Let's count people on the subway!")