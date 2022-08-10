export const  longestWord  = (sen) => {
    // noktalama isaretleri kaldirilacak
    // cumleyi bosluklardan bolup kelimelerle bir array olusturmak
    // kelimelerle olusturulmus olan arrayi, kelimelerin karakter sayilarina gore azalan bir sekilde siralamak
    // en basta yani 0. indekste yer alan kelimeyi return etmek


    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")

    arr.sort((a,b)=> {return b.length - a.length })

    return arr[0]
}