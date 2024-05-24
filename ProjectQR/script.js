const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body')

generateBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    if(qrText.value=='') {
        alert("Please enter a value")
    }
    generateQR();
});

function generateQR(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
        text: qrText.value,
        width: sizes.value,
        height: sizes.value,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}

downloadBtn.addEventListener('click' , ()=>{
    const img = document.querySelector('.qr-body img')
    if(img!=null){
        let imgAtt = img.getAttribute('src');
        downloadBtn.setAttribute("href" , imgAtt);
    }
    else{
        downloadBtn.setAttribute("href" , `${document.querySelector('canvas').toDataURL()}`);
    }
})
