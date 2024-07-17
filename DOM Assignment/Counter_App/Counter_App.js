const decrease = document.getElementById("decreaseBTN");
const increase = document.getElementById("increaseBTN");
const reset = document.getElementById("resetBTN");
const displayValue = document.getElementById("value"); 

//for decrement button click

decrease.addEventListener("click",() =>{
    const value = Number(displayValue.innerText);
    if(value>0){
        displayValue.innerText = value - 1;
    } else{
        alert("Negative value not allowed");
    }
});

//for increment button click

increase.addEventListener("click",() =>{
    const value = Number(displayValue.innerText);
    if(value>=10){
        alert("Value reached maximum limit");
    }else{
        displayValue.innerText = value + 1;
    }
});

reset.addEventListener("click",()=>{
    displayValue.innerText=0;
})