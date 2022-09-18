const task1 = () => {
    let width = parseFloat(document.getElementById('width').value).toFixed(1)
    let height = parseFloat(document.getElementById('height').value).toFixed(1)
    let price = parseFloat(document.getElementById('price').value).toFixed(2)

    let squareMeter = (width * height).toFixed(2)
    let totalPrice = (squareMeter * price).toFixed(2)

    let result = document.getElementById('result')

    if (totalPrice === 'NaN') {
        result.innerHTML = "Info should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Width: ${width}m</P>
            <p>Height: ${height}m</P>
            <p>Price Per Square Meter: ${price}$</P>
            <br>
            <p>Square Meter: ${squareMeter}m²</P>
            <p>Total Price: ${totalPrice}$</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task1)






