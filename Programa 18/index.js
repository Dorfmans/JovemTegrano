const task18 = () => {

    let initialScale = document.getElementById('scale').value
    let temperature = parseFloat(document.getElementById('temperature').value).toFixed(2)

    let result = document.getElementById('result')
    if (temperature === 'NaN') {
        result.innerHTML = 'Temperature should be a number'
    }
    else if (initialScale == 'C') {
        let f = parseFloat(temperature * (9 / 5) + 32).toFixed(2)
        let htmlData = `
        <div class="result">
            <p>${temperature}°C</P>
            is
            <p>${f}°F</P>

        </div>`

        result.innerHTML = htmlData
    }
    else {
        let c = parseFloat((temperature - 32) * (5 / 9)).toFixed(2)
        let htmlData = `
        <div class="result">
            <p>${temperature}°F</P>
            is
            <p>${c}°C</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task18)