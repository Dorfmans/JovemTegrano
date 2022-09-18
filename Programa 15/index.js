const task15 = () => {

    let glucose = parseFloat(document.getElementById('glucose').value)

    let diagnosis = ''

    if (glucose < 20) {
        diagnosis = 'You should eat something, im serious'
    }
    else if (glucose <= 100) {
        diagnosis = 'Regular Glucose'
    }
    else if (glucose > 100 && glucose <= 140) {
        diagnosis = 'High Glucose'
    }
    else {
        diagnosis = 'Diabetes'
    }

    let result = document.getElementById('result')

    if (glucose === 'NaN') {
        result.innerHTML = "Infos should be a number"
    }

    else {
        let htmlData = `
        <div class="result">
            <p>Glucose Content: ${glucose.toFixed(1)}mg/dl</P>
            <br>
            <p>Diagnosis: ${diagnosis}</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task15)