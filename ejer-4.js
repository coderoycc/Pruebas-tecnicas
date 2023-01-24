/*
Aplanar un array [[1,2], [12,2,[12,34,4]],[1,6,9]]
*/
const aplanar = (arr) => {
   return arr.reduce((acc, act) => acc.concat(act), [])
}
console.log(aplanar([2,[12,3,[4,2,1,2,2]], 2, 9]))