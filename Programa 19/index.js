const task19 = () => {

    let salary = parseFloat(document.getElementById('salary').value).toFixed(2)
    let percentage = 0

    switch (salary > 0) {
        case salary < 1000:
            percentage = 20;
            break;
        case salary < 3000:
            percentage = 15;
            break;
        case salary < 8000:
            percentage = 10;
            break;
        case salary >= 8000:
            percentage = 5;
            break;
        default:
            break;
    }

    let raiseAmount = parseFloat(salary * percentage / 100).toFixed(2)
    let newSalary = Number(salary) + Number(raiseAmount)

    let result = document.getElementById('result')

    if (salary === 'NaN') {
        result.innerHTML = "Salary should be a number"
    }
    else {
        let htmlData = `
        <div class="result">
        <p>Salary: ${salary}$</p>
        <br>
        <p>New Salary: ${parseFloat(newSalary).toFixed(2)}$</p>
        <p>Raise Amount: ${raiseAmount}$</p>
        <p>Raise Percentage: ${percentage}%</p>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task19)