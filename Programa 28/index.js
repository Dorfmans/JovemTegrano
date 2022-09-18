const task28 = () => {

    let int1 = parseInt(document.getElementById('int1').value)
    let int2 = parseInt(document.getElementById('int2').value)
    let int3 = parseInt(document.getElementById('int3').value)
    let int4 = parseInt(document.getElementById('int4').value)
    let int5 = parseInt(document.getElementById('int5').value)

    let check = int1 * int2 * int3 * int4 * int5

    let highest = Math.max(int1, int2, int3, int4, int5)
    let lowest = Math.min(int1, int2, int3, int4, int5)

    if (!check) {
        result.innerHTML = 'Info should be a number'
    }
    else {
        let htmlData = `
        <div class="result">
            <br>
            <p>Highest: ${highest}</P>
            <p>Lowest: ${lowest}</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task28)