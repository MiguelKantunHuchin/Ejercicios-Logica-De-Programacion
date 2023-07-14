
let numero = Number(prompt("Ingrese un número"))

function fibonacci(numero) {
    const serie = [0, 1]; // Inicializar la serie con los primeros dos números de Fibonacci
  
    if (numero === 0) {
      return [0]; // Caso especial: si el número es 0, la serie de Fibonacci será solo [0]
    } else if (numero === 1) {
      return serie; // Caso especial: si el número es 1, la serie de Fibonacci será [0, 1]
    } else {
      for (let i = 2; i <= numero; i++) {
        const siguienteNumero = serie[i - 1] + serie[i - 2];
        serie.push(siguienteNumero);
      }
      return serie;
    }
  }
  
  // Ejemplo de uso:
  
  console.log(fibonacci(numero)); 