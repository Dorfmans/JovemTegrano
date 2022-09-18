const task25 = () => {

    let bday = parseInt(document.getElementById('bday').value)
    let bmonth = parseInt(document.getElementById('bmonth').value) - 1

    let signs = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn']

    let days = [21, 19, 21, 21, 21, 21, 23, 23, 23, 23, 22, 22];
    let month = parseInt(document.getElementById('bmonth').value)


    let result = document.getElementById('result')

    if (bday < 1 || bday > 31) {
        result.innerHTML = 'Info should be a valid date'
    }
    else if (bmonth < 0 || bmonth > 11) {
        result.innerHTML = 'Info should be a valid date'
    }
    else if (bmonth == 1 && bday > 29) {
        result.innerHTML = 'Info should be a valid date'
    }
    else if (bmonth == 3 && bday > 30) {
        result.innerHTML = 'Info should be a valid date'
    }
    else if (bmonth == 5 && bday > 30) {
        result.innerHTML = 'Info should be a valid date'
    }
    else if (bmonth == 8 && bday > 30) {
        result.innerHTML = 'Info should be a valid date'
    }
    else if (bmonth == 10 && bday > 30) {
        result.innerHTML = 'Info should be a valid date'
    }
    else {
        if (bmonth == 0 && bday <= 20) {
            bmonth = 11
        } else if (bday < days[bmonth]) {
            bmonth--
        }

        let htmlData = `
        <div class="result">
            <p>Birthday: ${bday}/${month}</P>
            <br>
            <p>Sign: ${signs[bmonth]}</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task25)