const task5 = () => {

    let radius = parseFloat(document.getElementById('radius').value).toFixed(1)

    const pi = 3.14159

    let circle = parseFloat((radius ** 2) * pi).toFixed(3)

    let result = document.getElementById('result')

    if (circle === 'NaN') {
        result.innerHTML = "Radius should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Radius: ${radius}m</p>
            <br>
            <p>Circle Area: ${circle}m²</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task5)







