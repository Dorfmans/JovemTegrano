const task10 = () => {

    let int1 = document.getElementById('int1').value
    let int2 = document.getElementById('int2').value
    let int3 = document.getElementById('int3').value

    let lowest = parseInt(Math.min(int1, int2, int3))

    let result = document.getElementById('result')

    if (!lowest) {
        result.innerHTML = "Info should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Number 1: ${int1}</p>
            <p>Number 2: ${int2}</p>
            <p>Number 3: ${int3}</p>
            <br>
            <p>Lowest: ${lowest}</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task10)







