const btn = document.querySelector('.btn')
const notes = document.querySelector('.notes-container')

btn.addEventListener('click',()=>{
    let inputBox = document.createElement('p')
    // console.log('Hello')
    let img = document.createElement('img')
    img.src="./delete.png"
    inputBox.className = 'text-box';
    inputBox.setAttribute('contenteditable' ,'true')
    img.src="./delete.png";
    notes.appendChild(inputBox).appendChild(img);
})