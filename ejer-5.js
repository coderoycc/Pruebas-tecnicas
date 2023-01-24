/*
Contar las palabras repetidas de una oracion
*/
const fun = (cadena) => {
   cadena = cadena.toLowerCase()
   cadena = cadena.replace(/\.+|\,+|\?+|\!+/g,'')
   let arr = cadena.split(' ')
   let mapa = new Map()
   arr.forEach(el => {
      if(mapa.get(el)){
         mapa.set(el, mapa.get(el) + 1)
      }else{
         mapa.set(el, 1)
      }
   });
   const v = [...mapa.keys()]
   // Retorna las palabras que se repiten mas de una vez 
   // return v.filter( k => mapa.get(k) > 1)


   //Retorna la palabra que mas se repite
   return v.reduce( (acc, el) => mapa.get(acc) > mapa.get(el) ? acc : el)
   
}
console.log(fun('pedro clavo un clavito en la calva de un calvito, pero pedro no tenia un clavito para la calva del calvito'))