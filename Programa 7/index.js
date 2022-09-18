const task7 = () => {

    let distance = parseInt(document.getElementById('distance').value)
    let fuel = parseFloat(document.getElementById('fuel').value).toFixed(1)


    let consume = parseFloat(distance / fuel).toFixed(3)

    let result = document.getElementById('result')

    if (consume === 'NaN') {
        result.innerHTML = "Radius should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Driven Distance: ${distance}km</p>
            <p>Consumed Fuel: ${fuel}l</p>
            <br>
            <p>Average Consume: ${consume}km/L</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task7)







