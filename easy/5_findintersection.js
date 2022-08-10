export const findintersection = (arr) => {

    // yeni bir array tanimlanacak
    let intersection = []
    // split, replace kullanilacak
    const kume1 = arr[0].replace(/\s/g, "").split(",")
    const kume2 = arr[1].replace(/\s/g, "").split(",")
    // forEach kullanarak buttun array icerisindeki karakterlerin diger array icerisinde olup olmadigi kontrol edilecek varsa tanimlanan yeni array degiskeni icerisine yeni deger aktarilacak
   kume2.forEach((item)=>{
       if(kume1.includes(item)){
           intersection.push(item)
       }
   })
    // eger tanimlamis oldugum array bossa return false donecek bos degilse array icindeki degerler string seklinde gosterilecek
    if(intersection.length !== 0){
        return intersection.toString()
    }else{
        return false
    }


}