const task13 = () => {

    let minutes = parseFloat(document.getElementById('minutes').value)

    let plan = minutes - 100

    let toPay = 50

    let result = document.getElementById('result')

    plan > 0 ? toPay += (plan * 2) : toPay

    if (!minutes) {
        result.innerHTML = "Info should be a number"
    }

    else {
        let htmlData = `
        <div class="result">
            <p>Minutes Used: ${minutes}m</p>
            <br>
            <p>To Pay: ${parseFloat(toPay).toFixed(2)}$</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task13)







