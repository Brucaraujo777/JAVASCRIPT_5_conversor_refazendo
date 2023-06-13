
/*console.log("Funcionou?")*/

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.0
    const euroToday = 5.2
    const libraToday = 6.0 
    const bitcoinToday = 125000


    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    } 

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    
}
convertButton.addEventListener("click", convertValues)


function convertCurrency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = ("Dólar americano")
        currencyImage.src = ("./assets/dolar.png")
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = ("Euro")
        currencyImage.src = ("./assets/euro.png")
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = ("Libra")
        currencyImage.src = ("./assets/libra.png")
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = ("Bitcoin")
        currencyImage.src = ("./assets/bitcoin.png")
    }

    convertValues()
}
currencySelect.addEventListener("change", convertCurrency) 
