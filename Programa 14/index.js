const task14 = () => {

    let price = parseFloat(document.getElementById('price').value).toFixed(2)
    let quantity = parseInt(document.getElementById('quantity').value)
    let pay = parseFloat(document.getElementById('pay').value).toFixed(2)

    let totalPrice = price * quantity
    let howMuchLeft = parseFloat(totalPrice - pay).toFixed(2)

    let change = parseFloat(pay - totalPrice).toFixed(2)


    let result = document.getElementById('result')

    if (change === 'NaN') {
        result.innerHTML = "Infos should be a number"
    }

    else {
        let htmlData = `
        <div class="result">
            <p>Unit Price: ${price}$</p>
            <p>Quantity: ${quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}$</P>
            <br>
            <p>Payment: ${pay}$</P>
            <p>Change: ${change}$</P>
        </div>`

        let notEnough = `
        <div class="result">
            <p>Unit Price: ${price}$</p>
            <p>Quantity: ${quantity}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}$</P>
            <br>
            <p>Payment: ${pay}$</P>
            <p>NOT ENOUGH CASH! ${howMuchLeft}$ LEFT!</P>
        </div>`

        pay < totalPrice ? result.innerHTML = notEnough : result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task14)