/*
Multiplicar dos numeros sin usar el operador de multiplicación
*/
function multi(a, b){
   let res = 0
   const positivo = Math.abs(b) == b
   for(let i = 0; i < Math.abs(b); i++){
      res = positivo ? res + a : res - a
   }
   return res
}

console.log(multi(-12,2))
console.log(multi(3,8))
console.log(multi(2,-9))
console.log(multi(2,-1))