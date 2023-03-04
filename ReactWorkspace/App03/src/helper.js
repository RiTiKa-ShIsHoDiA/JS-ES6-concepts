function choice(arr){
    let idx = parseInt(Math.random())*arr.length;
    return arr[idx];
}
function remove(arr,animal){
    let idx = arr.indexOf(animal);
    let updatedArray = [...arr.slice(0,idx) ,...arr.slice(idx+1,arr.length)];
    return updatedArray;
}
export {choice,remove}