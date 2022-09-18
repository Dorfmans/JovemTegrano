const task29 = () => {

    let cnpj = document.getElementById('cnpj').value

    function validate(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        let length = cnpj.length - 2
        let numbers = cnpj.substring(0, length);
        let dvs = cnpj.substring(length);
        let sum = 0;
        let multipliers = length - 7;

        for (i = length; i >= 1; i--) {
            sum += numbers.charAt(length - i) * multipliers--;
            if (multipliers < 2)
                multipliers = 9;
        }
        let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != dvs.charAt(0))
            return false;

        length = length + 1;
        numbers = cnpj.substring(0, length);
        sum = 0;
        multipliers = length - 7;
        for (i = length; i >= 1; i--) {
            sum += numbers.charAt(length - i) * multipliers--;
            if (multipliers < 2)
                multipliers = 9;
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11;
        if (result != dvs.charAt(1))
            return false;

        return true;

    }

    let result = document.getElementById('result')

    if (cnpj.length != 14) {
        result.innerHTML = 'A Valid CNPJ number has 14 digits'
    }
    else {
        let validated = validate(cnpj)
        let htmlData = `
        <div class="result">
            <p>CNPJ: ${cnpj}</P>

            <p>${validated ? 'Is Valid' : 'Is not Valid'}</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task29)