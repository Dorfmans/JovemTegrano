const task24 = () => {

    let int1 = parseInt(document.getElementById('int1').value)
    let int2 = parseInt(document.getElementById('int2').value)
    let int3 = parseInt(document.getElementById('int3').value)
    let int4 = parseInt(document.getElementById('int4').value)
    let int5 = parseInt(document.getElementById('int5').value)

    let check = int1 * int2 * int3 * int4 * int5

    let numbers = [int1, int2, int3, int4, int5]

    let result = document.getElementById('result')

    if (!check) {
        result.innerHTML = 'Info should be a number'
    }

    else {
        let htmlData = `
        <div class="result">
            <p>Numbers: 
            <br>
            ${numbers.join(' | ')}</P>
            <br>
            <p>Sorted: 
            <br>
            ${numbers.sort((a, b) => a - b).join(' | ')}</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task24)