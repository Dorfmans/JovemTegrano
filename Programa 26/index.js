const task26 = () => {

    let string = document.getElementById('string').value
    let vowels = 0
    let consonants = 0

    let result = document.getElementById('result')

    if (!string) {
        result.innerHTML = 'Insert a word'
    }
    else {
        string.split('').forEach((e) => e.match(/[aeiouAEIOU]/) ? vowels++ : consonants++)
        string.split('').forEach((e) => e.match(/[^A-Z]/ig) ? consonants-- : null)

        let htmlData = `
        <div class="result">
            <p>Word: ${string}</P>
            <br>
            <p>Vowels: ${vowels}</P>
            <p>Consonants: ${consonants}</P>
        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task26)