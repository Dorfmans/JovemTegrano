const task2 = () => {
    let width = parseFloat(document.getElementById('width').value).toFixed(1)
    let height = parseFloat(document.getElementById('height').value).toFixed(1)

    let area = (width * height).toFixed(4)
    let perimeter = ((width * 2) + (height * 2)).toFixed(4)
    let diagonal = Math.sqrt((width ** 2) + (height ** 2)).toFixed(4)

    let result = document.getElementById('result')

    if (perimeter === 'NaN') {
        result.innerHTML = "Info should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Width: ${width}m</P>
            <p>Height: ${height}m</P>
            <br>
            <p>Area: ${area}m²</P>
            <p>Perimeter: ${perimeter}m</P>
            <p>Diagonal: ${diagonal}m</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task2)






