export const letterChange = (str) => {

    // 1 - js charcode ve charcodeAt kullanilacak. string icerisinde yer alan harfler toLowerCase olarak degistirilecek
    // 2 - replace ile str taranacak ve icinde "z" varsa bu "a" ile degistirilecek. harf z degilse kendisinden bir sonraki harfle degistirilecek
    // 3 - str icerisinde sesli harfler varsa buyuk harfe cevrilecek ve deger return edilecek


    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if(char === "z"){
            return "a"
        }else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })

    let vowelStr = newStr.replace(/[aeoui]/gi, (char) => char.toUpperCase())
    // let vowelStr = newStr.replace(/a|e|o|i|u/gi, (char) => char.toUpperCase())

    return vowelStr
}
