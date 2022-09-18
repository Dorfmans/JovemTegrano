const task21 = () => {

    let number = parseInt(document.getElementById('number').value)

    let evens = []

    for (let i = 1; i <= number; i++) {
        i % 2 == 0 ? evens.push(i) : null;
    }


    let result = document.getElementById('result')

    if (evens.length == 0) {
        result.innerHTML = 'Info should be a number or higher than 1'
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Number: ${number}</P>
            <br>
            <p>Evens:<br>${evens.map(e => `<br>${e}`).join('')}</P >
        </div > `
        console.log(evens, htmlData)
        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task21)