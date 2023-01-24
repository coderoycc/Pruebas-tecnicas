/*
Encontrar el mayor de un arreglo iterando una sola vez
*/
const mayor = (arr) =>{
   let may = -Infinity
   arr.forEach(element => {
      if(element > may){
         may = element
      }
   });
   return may
}
console.log(mayor([3,1,2,9,-1,2,4]))
console.log(mayor([9,12,90,3,-100]))
console.log(mayor([21,-100,12,3]))