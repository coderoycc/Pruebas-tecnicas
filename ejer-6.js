/*
Verificar si una palabra es palindrome
*/
const pali = (cadena) => {
   cadena = cadena.toLowerCase()
   cadena = cadena.replace(/\.+|\,+|\?+|\!+|\s+/g,'')
   let arr = cadena.split('')
   let rever = arr.reverse().join('')
   return cadena == rever
}
// pali('betto')
console.log(pali('oruro'))