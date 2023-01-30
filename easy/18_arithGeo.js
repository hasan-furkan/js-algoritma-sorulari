export const arithGeo = (arr) => {
    // 1- aritmetik ve geometrik olarak iki adet dizi var
    // 2- eger dizi aritmetik bir sekilde artiyorsa "Aritmetik" yazilacak
    // 3- eger dizi geometrik bir sekilde artiyorsa "Geometrik" yazilacak

    // aritmetik dizi [2,4,6,8,10,12]
    // geometrik dizi [2,6,18,54]

    // aritmetik icin
    let different = arr[1] - arr[0]
    let isArith = true

    // geometrik icin
    let ratio = arr[1] / arr[0]
    let isGeo = true

    for (let i = 2; i < arr.length; i++) {
        if(arr[i] - arr[i - 1] !== different){
           isArith = false
        }

        if(arr[i] / arr[i -1] !== ratio){
            isGeo = false
        }
    }

    if (isArith === true){
        return "Arithmetic"
    }else if (isGeo === true){
        return "Geometric"
    }else {
        return - 1
    }
}
