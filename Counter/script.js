const btns = document.querySelectorAll(".button")
const val = document.querySelector(".val")

btns.forEach((button)=>{
    button.addEventListener('click' , (e)=>{
        console.log(e.target);
        if(e.target.innerHTML=="Increase"){
            val.innerHTML = Number(val.innerHTML)+1;
        }
        else if(e.target.innerHTML=="Decrease"){
            val.innerHTML = Number(val.innerHTML)-1;
        }
        else{
            val.innerHTML= 0;
        }
    })
});
