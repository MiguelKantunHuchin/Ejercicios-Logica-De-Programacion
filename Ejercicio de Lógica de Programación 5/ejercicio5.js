function adivinarNumeroSecreto() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const numerosIngresados = [];
  
    while (true) {
      const numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 100 para adivinar el número secreto:"));
  
      numerosIngresados.push(numeroIngresado);
  
      if (numeroIngresado === numeroSecreto) {
        console.log("Felicidades, adivinaste el número secreto.");
        console.log("Lista de números ingresados:", numerosIngresados);
        break;
      } else {
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
      }
    }
  }
  
  adivinarNumeroSecreto();