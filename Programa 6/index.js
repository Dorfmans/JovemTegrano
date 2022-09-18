const task6 = () => {

    let name = document.getElementById('name').value
    let value = parseFloat(document.getElementById('value').value).toFixed(2)
    let hours = parseInt(document.getElementById('hours').value)

    let salary = parseFloat(value * hours).toFixed(2)

    let result = document.getElementById('result')

    if (salary === 'NaN') {
        result.innerHTML = "Value per Hours and Hours Worked should be a number"
    }
    else if (!name) {
        result.innerHTML = "Insert a Name"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Name: ${name}</p>
            <p>Value per Hour: ${value}$</p>
            <p>Hours Worked: ${hours}h</p>
            <br>
            <p>Salary: ${salary}$</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task6)







