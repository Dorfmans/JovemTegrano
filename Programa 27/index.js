const task27 = () => {

    let string = document.getElementById('string').value

    let removeChar = /[\W_]/g

    let parsedString =
        string
            .toLowerCase()
            .replace(removeChar, '')

    let reversedString =
        string
            .toLowerCase()
            .split('')
            .reverse()
            .join('')
            .replace(removeChar, '')

    let isPalindrome = reversedString === parsedString

    let result = document.getElementById('result')

    if (!string) {
        result.innerHTML = 'Insert a word'
    }
    else {
        let htmlData = `
        <div class="result">
            <br>
            <p>${isPalindrome ? `${string} is palindrome` : `${string} is not palindrome`}</P>

        </div>`

        result.innerHTML = htmlData
    }
}

let button = document.getElementById('button')

button.addEventListener('click', task27)