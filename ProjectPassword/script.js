let inputSlider = document.getElementById('inputSlider');
let sliderValue = document.getElementById('sliderValue');
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyBtn = document.getElementById("copyBtn");

inputSlider.addEventListener('input' , ()=>{
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click' , ()=>{
    passBox.value = generatePassword();
})

//fn to generateOur password
let upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchars = "abcdefghijklmnopqrstuvwxyz";
let numberss   = "0123456789"; 
let symbolss   = "~!@#$%^&*";

function generatePassword(){
    let password="";
    
    let temp ="";

    temp+=lowercase.checked ? lowerchars : "";
    temp+=uppercase.checked ? upperchars : "";
    temp+=numbers.checked ? numberss : "";
    temp+=symbols.checked ? symbolss : "";
    if(temp==''){
        alert("Please select atleast one pption")
    }
    for(let i = 0 ; i<sliderValue.innerHTML ; i++){
       password += temp.charAt(Math.floor(Math.random()*temp.length));
    }

    return password;
}

copyBtn.addEventListener('click' , ()=>{
    if(passBox.value!=''){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText="check";
        setTimeout(()=>{
            copyBtn.innerText = "content_copy";
        },2000);
    }
    else{
        alert('Password is Empty');
    }
});