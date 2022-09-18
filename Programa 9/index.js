const task9 = () => {

    let seconds = Number(document.getElementById('seconds').value)

    let hours = new Date(seconds * 1000).toISOString().slice(14, 19)

    let hh = parseInt(seconds / 3600)


    let result = document.getElementById('result')

    if (seconds === 'NaN') {
        result.innerHTML = "Seconds should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Time in Seconds: ${seconds}s</p>
            <br>
            <p>Time in Hour: ${hh}:${hours}</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task9)







