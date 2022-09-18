const task3 = () => {

    let name1 = document.getElementById('name1').value
    let name2 = document.getElementById('name2').value

    let age1 = parseInt(document.getElementById('age1').value)
    let age2 = parseInt(document.getElementById('age2').value)

    let averageAge = ((age1 + age2) / 2).toFixed(1)


    let result = document.getElementById('result')

    if (averageAge === 'NaN') {
        result.innerHTML = "Ages should be a number"
    }

    else if (!name1 || !name2) {
        result.innerHTML = "Name is missing"
    }
    else {
        let htmlData = `
        <div class="result">
            <p>Person 1: ${name1}, ${age1} years old.</p>
            <p>Person 2: ${name2}, ${age2} years old.</p>
            <br>
            <p>The average age of  ${name1} and ${name2} is ${averageAge}</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task3)






