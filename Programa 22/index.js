const task22 = () => {

    let number = parseInt(document.getElementById('number').value)

    let table = []

    for (var i = 1; i <= 10; i++) {
        table.push(number * i)
    }

    let result = document.getElementById('result')

    if (!number) {
        result.innerHTML = 'Info should be a number or higher than 0'
    }
    else {
        let htmlData = `
        <div class="result">
            <table>
                ${table.map(e => `
                    <tr>
                        <td>${number}</td>
                        <td>${table.indexOf(e) + 1}</td>
                        <td>${e}</td>
                    </tr>
                    `).join('')}
            </table>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task22)