export const isPalindrome = (str) => {

    let arr= str.replace(/ /g, "").split("").reverse().join("")

    return arr === str
}
