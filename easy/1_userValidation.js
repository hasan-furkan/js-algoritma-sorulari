
//////////////////////// KURALLAR ///////////////////////////////

/*

Kullanici ismi 4 ve 25 karakter arasinda olmali

Kullanici ismi kesinlikle harfle baslamali

Kullanici ismi icerisinde sadece harf, rakam ve altcizgi olabilir

Kullanici ismi altcizgi ile bitemez

Kullanici ismi 1 => u__hello_world123

*/


export const userValidation = (str) => {

    // bu sekilde de yazilabilir

    if(str.length >= 4 && str.length <= 25 && (/[a-zA-Z]/).test(str.slice(0,1)) && (/^\w+$/).test(str) && (/[a-zA-Z0-9]/).test(str.slice(-1)) ){
        return true
    }else{
        return false
    }

    // ya da tek satir halinde bu sekilde de yazilabilir

  //  return str.length >= 4 && str.length <= 25 && (/[a-zA-Z]/).test(str.slice(0, 1)) && (/^\w+$/).test(str) && (/[a-zA-Z0-9]/).test(str.slice(-1));
}

/*

.test(str.slice(0,1)) ===> .test(str.charAt(0))

.test(str.slice(-1)) ===> .test(str.charAt(str.length(-1)))

*/
