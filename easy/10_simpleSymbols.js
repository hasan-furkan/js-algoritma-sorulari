export const simpleSymbols = (str) => {
    // 1- bir adet string var bu string sadece " harf, =, + " sembollerini bulunduruabilir
    // 2- harflerin saginda ve solunda  "+" isareti olmak zorunda
    // 3- eger saginda veya solunda + isareti yoksa fonksiyon false doner

    const arr = str.split('')
    let controlArr = [];

    arr.forEach((char) => {
        if((/[a-zA-Z]/).test(char)){
            if(arr[arr.indexOf(char) -1 ]  === "+" && arr[arr.indexOf(char) + 1] === "+"){
                controlArr.push(1)
            }else {
                controlArr.push(0)
            }
        }
    })

    return !controlArr.includes(0);

    // if(controlArr.includes(0)){
    //     return false
    // }else{
    //     return true
    // }

}
