/*
Eliminar Elementos null, undefined y 0 de un arreglo
*/
const elimina = (arr) =>{
   return arr.reduce( (acc, act) =>{
      if(act){
         acc.push(act)
      }
      return acc
   }, [])
}
console.log(elimina([1,2,null,null,0,undefined, 21 ,null]))