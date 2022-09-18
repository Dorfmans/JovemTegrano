const task20 = () => {

    let int1 = parseInt(document.getElementById('int1').value)
    let int2 = parseInt(document.getElementById('int2').value)

    let min = Math.min(int1, int2)
    let max = Math.max(int1, int2)

    let sum = 0

    for (let i = min; i <= max; i++) {
        sum += i
    }

    let result = document.getElementById('result')

    if (sum === 0) {
        result.innerHTML = 'Info should be a number and at least one input be higher than 0'
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Number 1: ${int1}</P>
            <p>Number 2: ${int2}</P>
            <br>
            <p>Interval Sum: ${sum}</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task20)