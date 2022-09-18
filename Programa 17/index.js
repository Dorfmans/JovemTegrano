const task17 = () => {

    let int1 = parseInt(document.getElementById('int1').value)
    let int2 = parseInt(document.getElementById('int2').value)
    let check = int1 * int2

    let multiple1 = (int1 % int2 === 0)
    let multiple2 = (int2 % int1 === 0)

    let result = document.getElementById('result')


    if (check === 'NaN') {
        result.innerHTML = 'Info should be a number'
    }
    else if (multiple1 || multiple2) {
        let htmlData = `
        <div class="result">
            <p>Number 1: ${int1}</P>
            <p>Number 2: ${int2}</P>
            <br>
            <p>They are multiples!</P>

        </div>`

        result.innerHTML = htmlData
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Number 1: ${int1}</P>
            <p>Number 2: ${int2}</P>
            <br>
            <p>They're not multiples</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task17)