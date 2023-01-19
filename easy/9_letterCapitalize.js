export const letterCapitalize = (str) => {
    let arr = str.split(" ");
   return  arr.map((item) => item.charAt(0).toUpperCase() + item.slice(1, item.length)).join(" ")
}
