
exports.min = function min (array) {
  if(!Array.isArray(array)){
    return 0
  }
  if(array.length == 0 ){
    return 0
  }
  array.sort((a,b)=>a-b)
  return array[0];
}

exports.max = function max (array) {
  if(!Array.isArray(array)){
    return 0
  }
  if(array.length == 0 ){
    return 0
  }
  array.sort((a,b)=>a-b)
  return array[array.length-1];
}

exports.avg = function avg (array) {
  if(!Array.isArray(array)){
    return 0
  }
  if(array.length == 0 ){
    return 0
  }
  let rez = (array.reduce((acc,val)=>acc+val)) / array.length
  return rez;
}
