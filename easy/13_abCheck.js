export const abCheck = (str) => {

    // 1- verilen string icerisinde a harfinden 3 harf sonra b harfi varsa true degilse false

    // const arr = str.toLowerCase().split("")
    // let controller = []
    // arr.forEach(char => {
    //     if(char === 'a' && arr[arr.indexOf(char)+ 4 ] === 'b'){
    //         controller.push(true)
    //     }
    // })

  //  return controller.includes(true) // && return controller.includes(true) ? true : false

 //   return str.search('a...b') > -1 // ||  return str.search('a...b') > -1 ? true : false

    const arr = str.toLowerCase().split("")
    let controller = []

    for(let i =0; i< arr.length; i++){
        if(arr[i] === "a" && arr[arr.indexOf(arr[i]) + 4] === "b"){
            controller.push(true)
        }
    }

    return controller.includes(true)
}
