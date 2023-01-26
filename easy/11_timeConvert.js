export const timeConvert = (num) => {

    // 1- verilmis olan sayiyi saat ve dakika olarak dondur

    // const minutes = num % 60
    // const hour = Math.floor(num / 60)
    //
    // return hour + ":" + minutes

    return ` ${Math.floor(num / 60)}:${num % 60}`

}
