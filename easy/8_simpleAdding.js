export const simpleAdding = (num) => {

    // 1 - verilecek olan tam sayiya kadar olan butun degerlerin toplanmasi (verilen sayi dahil)

    let result = 0
    for (let i = 0; i <= num; i++) {
        result += i
    }

    return result
}
