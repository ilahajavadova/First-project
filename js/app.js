// "use strict"
// let password = prompt("kodu daxil edin")
// let confirmPasword = prompt("tekrar kod daxil edin")

// if (password === "" || confirmPasword === "") {
//     alert("password cant empty")
// } else if (password !== confirmPasword) {
//     alert("password " + password + " doesnt match confirmpassword " + confirmPasword)
// }else(
//     alert("succesfully")
// )


"use strict"
let money = prompt("cibimdeki pul ");
let kilo= prompt("meyvenin kilosu");
10

if(0<money/kilo && money/kilo <2){
    alert( 'alma ${money/kilo}' );
} 
 else if (2 < money / kilo && money / kilo < 4) {
    alert('orange ${money/kilo}')
} else if (4 < money / kilo && money / kilo < 6){
    alert("hayva ${money/kilo}")
}else {
    alert( " bele meyve yoxdur")
}

