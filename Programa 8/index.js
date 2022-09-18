const task8 = () => {

    let a = parseFloat(document.getElementById('a').value).toFixed(1)
    let b = parseFloat(document.getElementById('b').value).toFixed(1)
    let c = parseFloat(document.getElementById('c').value).toFixed(1)

    let trapezeBases = Number(a) + Number(b)

    let square = parseFloat(a ** 2).toFixed(4)
    let triangle = parseFloat((a * b) / 2).toFixed(4)
    let trapeze = parseFloat((trapezeBases * c) / 2).toFixed(4)

    let result = document.getElementById('result')

    if (trapeze === 'NaN') {
        result.innerHTML = "All measures should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Measure A: ${a}m</p>
            <p>Measure B: ${b}m</p>
            <p>Measure C: ${c}m</p>
            <br>
            <p>Square Area: ${square}m²</P>
            <p>Triangle Area: ${triangle}m²</P>
            <p>Trapeze Area: ${trapeze}m²</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task8)







