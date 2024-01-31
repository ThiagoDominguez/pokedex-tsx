export function waitFor(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time));
}
// export function formatName(name: string): string {
//   if (name.includes("♀")) {
//     return name.replace("♀", "-f");
//   } else if (name.includes("♂")) {
//     return name.replace("♂", "-m");
//   } else if (name.includes(". ")) {
//     return name.replace(". ", "-");
//   } else if (name.includes("farfetch'd")) {
//     return name.replace("farfetch'd", "farfetchd");
//   } else if (name.includes(" ")) {
//     return name.replace(" ", "-");
//   } else {
//     return name;
//   }
// }
export function formatName(name: string): string {
  // Reemplazar puntos finales con espacios en blanco al final de la cadena
  const sinPuntos = name.replace(/\.$/, "");

  // Verificar si la cadena termina con un punto y reemplazarlo con un espacio en blanco
  const terminaConPunto = sinPuntos.endsWith(".");
  if (terminaConPunto) {
    return sinPuntos.slice(0, -1) + " ";
  }

  // Manejar otras sustituciones como antes
  if (sinPuntos.includes("♀")) {
    return sinPuntos.replace("♀", "-f");
  } else if (sinPuntos.includes("♂")) {
    return sinPuntos.replace("♂", "-m");
  } else if (sinPuntos.includes(". ")) {
    return sinPuntos.replace(". ", "-");
  } else if (sinPuntos.includes("farfetch'd")) {
    return sinPuntos.replace("farfetch'd", "farfetchd");
  } else if (sinPuntos.includes(" ")) {
    return sinPuntos.replace(" ", "-");
  } else {
    return sinPuntos;
  }
}
