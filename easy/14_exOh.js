export const exOh = (str) => {
    let xlist = []
    let olist = []

    str.split("").forEach(char => {
        if(char === "x"){
            xlist.push(char)
        }else {
            olist.push(char)
        }
    })
    return xlist.length === olist.length
}
