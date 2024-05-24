let buttons = document.querySelectorAll('.buttons');
console.log(buttons);
let res = "";
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click' , (e)=>{
    if(e.target.innerHTML == "="){
        res = eval(res);
        document.querySelector('#result').value=res;
    
    }
    else if(e.target.innerHTML == "C"){
        res = "";
        document.querySelector('#result').value=res;
    }
    else{
        res = res+e.target.innerHTML;
        document.querySelector('#result').value=res;
    }
    // console.log(e.target.innerHTML);
   })
})