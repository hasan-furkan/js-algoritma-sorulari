export const questionMark = (str) => {

    // str >= 5 kontrol et

    if(str.length < 5){
        return false
    }
    // soru isareti ve rakam olmayan butun ifadeleri temizle

    const newStr = str.replace(/[^0-9?]/g, "")
    // forEach icin string -> array cevir

    const arr = newStr.split("")
    // forEach icerisinde kullanilacak degiskenlerin tanimlanmasi (sums, sum, iterator)
    let sums = []
    let sum = 0
    let iterator = 0

    // forEach dongusu ile her bir rakam ve kendisinden sonraki 4. karakterin toplanarak sum degiskenine esitlenmesi ve sonra bu degerin sums arrayine eklenmesi
    console.log(newStr)
    console.log(arr)
   arr.forEach((item) => {
       if(item !== "?"){
           sum = parseInt(item) + parseInt(arr[iterator + 4])
           sums.push(sum)
       }
       iterator++
   })

    console.log(sums)
    // sums arrayi icerisinde 10 degeri varsa true yoksa false degerin donulmesi


    return sums.includes(10)


    // return sums.includes(10) ? true : false
    /*
    if(sums.includes(10)){
        return true
    }else {
        return false
    }
     */
}