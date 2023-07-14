
let array = [];

do {

    
    var str = prompt("Ingresa un número entero");
var num = parseInt(str);
array.push(num);

    
} while (array.length < 3);

array.sort((a,b) => {
    if (a<b){
        return -1;
    }
    if (a>b){
        return 1;
    }

    return 0;


})



const elementosDuplicados = array =>
new Set(array).size < array.length


if(elementosDuplicados(array) == true){
    console.log("De menor a mayor ", array);
   console.log("De mayor a menor ",array.reverse());
   console.log("Hay elementos repetidos");

} else {
    console.log("De menor a mayor ", array);
    console.log("De mayor a menor ",array.reverse());
}
  
 


