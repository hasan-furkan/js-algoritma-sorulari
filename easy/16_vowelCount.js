export const vowelCount = str => {
    let i = 0;

    [...str].forEach(element => {
        if((/([aeiuoIOUAE])/gi).test(element)){
            i += 1
        }
    })

    return i

    // let newStr=str.toLowerCase();
    // let arr = newStr.replace(/[^a/e/i/o/u]/g,"").split("")
    // return arr.length
}
