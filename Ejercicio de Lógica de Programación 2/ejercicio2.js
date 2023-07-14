let gradosCelsius = Number(prompt("Ingrese una temperatura en °C"));



function convertirGradosCelsius(gradosCelsius) {
    const gradosFahrenheit = (gradosCelsius * 9/5) + 32;
    const kelvin = gradosCelsius + 273.15;
  
    return {
      fahrenheit: gradosFahrenheit,
      kelvin: kelvin
    };
  }
  
  // Ejemplo de uso:


  const conversion = convertirGradosCelsius(gradosCelsius);
  
  console.log("Grados Fahrenheit:", conversion.fahrenheit);
  console.log("Kelvin:", conversion.kelvin);