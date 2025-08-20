function reverse(string) {
    let newWord = ''
    for (let i = string.length - 1; i >= 0; i--) {
        newWord += string[i]
    }

    return newWord
}