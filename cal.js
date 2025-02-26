const button=document.querySelectorAll("button");
const display=document.querySelector(".display");
const selected=document.querySelectorAll(".but");
const clear=document.querySelector(".clear");
const equal=document.querySelector(".equal");
const del=document.querySelector(".delete");
const cal=document.querySelector(".cal");
const mod=document.querySelector(".mood");
const circle=document.querySelector(".circle");
selected.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let num=choice.textContent;
        display.value+=num;
        console.log(display.value);
    })
})

clear.addEventListener("click",()=>{
    display.value="";
})

equal.addEventListener("click",()=>{
    display.value=eval(display.value);
    console.log(display.value);

    
})

mod.addEventListener("click",()=>{
    mod.classList.toggle("mood1");
    circle.classList.toggle("circle1");
    cal.classList.toggle("cal1");
    display.classList.toggle("display1");
    selected.classList.toggle("but1");
})




