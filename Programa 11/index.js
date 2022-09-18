const task11 = () => {

    let grade1 = parseFloat(document.getElementById('grade1').value).toFixed(1)
    let grade2 = parseFloat(document.getElementById('grade2').value).toFixed(1)

    let final = parseFloat(Number(grade1) + Number(grade2)).toFixed(1)

    let result = document.getElementById('result')

    if (!final) {
        result.innerHTML = "Grades should be a number"
    }
    else if (final >= 60) {
        let htmlDataApproved = `
        <div class="result">
            <p>First Grade: ${grade1}</p>
            <p>Second Grade: ${grade2}</p>
            <br>
            <p>Final Grade: ${final}</P>
            <p style="color: #00FF00">APPROVED</P>
        </div>`

        result.innerHTML = htmlDataApproved
    }
    else {
        let htmlData = `
        <div class="result">
            <p>First Grade: ${grade1}</p>
            <p>Second Grade: ${grade2}</p>
            <br>
            <p>Final Grade: ${final}</P>
            <p style="color: #ff0000">DISAPPROVED</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task11)







