const task30 = () => {

    let number = parseInt(document.getElementById('int').value)
    let digits = number.toString().split('')

    let result = document.getElementById('result')

    let oneToNine = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    let twentyToNinety = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    let tenToTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']

    let word = ''


    if (digits.length > 2) {
        result.innerHTML = 'Info should be a number with up to two digits'
    }
    else if (number == 0) {

        word = 'Zero'

        let htmlData = `
        <div class="result">
            <p>Number: ${number}</P>
            <br>
            <p>${word}</P>
        </div>`

        result.innerHTML = htmlData
    }
    else if (digits.length == 1) {

        word = oneToNine[number]

        let htmlData = `
        <div class="result">
            <p>Number: ${number}</P>
            <br>
            <p>${word}</P>
        </div>`

        result.innerHTML = htmlData
    }
    else if (digits.length == 2 && number < 20) {

        word = tenToTwenty[digits[1]]

        let htmlData = `
        <div class="result">
            <p>Number: ${number}</P>
            <br>
            <p>${word}</P>
        </div>`

        result.innerHTML = htmlData
    }
    else if (digits.length == 2 && number >= 20) {

        word = twentyToNinety[digits[0]] + ' ' + oneToNine[digits[1]]

        let htmlData = `
        <div class="result">
            <p>Number: ${number}</P>
            <br>
            <p>${word}</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task30)