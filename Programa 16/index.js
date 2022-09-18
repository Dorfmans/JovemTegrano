const task16 = () => {

    let distance1 = parseFloat(document.getElementById('distance1').value).toFixed(2)
    let distance2 = parseFloat(document.getElementById('distance2').value).toFixed(2)
    let distance3 = parseFloat(document.getElementById('distance3').value).toFixed(2)

    let farest = parseFloat(Math.max(distance1, distance2, distance3)).toFixed(2)

    let result = document.getElementById('result')
    if (farest === 'NaN') {
        result.innerHTML = 'Info should be a number'
    }
    else {
        let htmlData = `
        <div class="result">
            <p>1º Throw Distance: ${distance1}m</P>
            <p>2º Throw Distance: ${distance2}m</P>
            <p>3º Throw Distance: ${distance3}m</P>
            <br>
            <p>Farest Throw Distance: ${farest}m</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task16)