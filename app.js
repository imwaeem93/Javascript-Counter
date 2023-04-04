let count = 0

const label = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const eventType = e.currentTarget.classList
        if (eventType.contains("increase")) {
            count++;
           
        }
        else if(eventType.contains("decrease")){
            count--;
        }
        else{
            count=0
        }
        if (count>0) {
            label.style.color = "green"
        }
        if (count < 0 ){
            label.style.color = "yellow"
        }
        if(count == 0){
            label.style.color = "black"
        }
        label.textContent=count
    })
})


/*let counter = 0;

const label = document.querySelector("#value")
const btnInc = document.querySelector(".increase")
const btnDec = document.querySelector(".decrease")
const btnReset = document.querySelector(".reset")


btnInc.addEventListener("click", ()=>{
    counter = counter+1;
    label.textContent=counter
    changeColor(counter)
})

btnDec.addEventListener("click", ()=>{
    counter = counter - 1;
    label.textContent=counter
    changeColor(counter)
})

btnReset.addEventListener("click", ()=>{
    counter = 0;
    label.textContent=counter
    changeColor(counter)
})

const changeColor = (val)=>{
    if (counter>0) {
        document.body.style.backgroundColor = "green"
    }
    else if (counter < 0 ){
        document.body.style.backgroundColor = "yellow"
    }
    else{
        document.body.style.backgroundColor = "light"
    }
}*/