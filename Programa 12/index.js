const task12 = () => {

    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)


    let delta = ((b ** 2) - (4 * (a * c)))

    let x1 = parseFloat((-b + Math.sqrt(delta)) / (2 * a)).toFixed(4)
    let x2 = parseFloat((-b - Math.sqrt(delta)) / (2 * a)).toFixed(4)

    let result = document.getElementById('result')

    if (!delta) {
        result.innerHTML = "Info should be a number or delta must be greater than 0"
    }

    else if (delta <= 0) {
        result.innerHTML = "These number don't result in a valid square root"
    }

    else {
        let htmlData = `
        <div class="result">
            <p>Value of A: ${a}</p>
            <p>Value of B: ${b}</p>
            <p>Value of C: ${c}</p>
            <br>
            <p>Value of X1: ${x1}</P>
            <p>Value of X2: ${x2}</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task12)







