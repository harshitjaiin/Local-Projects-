const cryptos = document.getElementById("cryptos");
const current_price = document.getElementById("current_price");
const alert_box = document.getElementById("alert-price");
const alert_message = document.getElementById("alert-message");
    fetch("https://api.coinlore.net/api/tickers/")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function(data){
    // console.log(data);
    let i = 0;
    data.data.forEach((element)=>{
        let val = document.createElement("option");
        // console.log(val);

        const name = `${element.name}`;
        // const index = i;
        i++;
        val.value=name;
        val.innerHTML=name;
        val.id=name;
        val.className=i;
        // console.log(val);
        cryptos.appendChild(val);
    })
    
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


// Add event listener to the select element
cryptos.addEventListener('change', function(e) {
    // console.log(cryptos.selectedIndex);
    const selectedOption = cryptos.options[cryptos.selectedIndex];
    printPrice(selectedOption);
});

alert_box.addEventListener('change' , ()=>{
  const selectedOption = cryptos.options[cryptos.selectedIndex];
  checkifGreater(selectedOption);
})
function checkifGreater(curr){
  console.log(curr);
  fetch("https://api.coinlore.net/api/tickers/")
    .then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        } else {
            return response.json();
        }
    })
    .then((data) => {
        let xx = Number(curr.className);
        console.log(alert_box.value);
        const price = data.data[xx-1].price_usd;
        if(price>=alert_box.value){
           alert_message.innerHTML=`<h5>Alert: The price of ${curr.value} has reached or surpassed ${alert_box.value}</h5>`
        }
    })
}

function printPrice(curr) {
    console.log(curr);
    fetch("https://api.coinlore.net/api/tickers/")
    .then((response) => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        } else {
            return response.json();
        }
    })
    .then((data) => {
        let xx = Number(curr.className);
        console.log(xx);
        const price = data.data[xx-1].price_usd;
        current_price.innerHTML= `${price}`;
    })
}





  

