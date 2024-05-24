var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-5z18ld4gkwkcydf4-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

const leloapi = async() => {
    try{
        const response =  await fetch("https://www.goldapi.io/api/XAU/INR", requestOptions);
        const result = await response.json();
        const lelo = document.querySelector('#goldprice');

        if(result && result.price){
            lelo.textContent = `GOLD PRICE IS 1kg =  ${result.price}`
        }else{
            lelo.textContent = "Not fetching come later !"
        }
    }
    catch(error){
        console.log(error);
    }
}

leloapi();
