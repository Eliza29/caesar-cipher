// Cifrado Cesar
// El usuario no podra ingresar un campo vacío o que contenga números
do {
  var phrase = prompt('Escribe una frase');
} while (!phrase || !isNaN(phrase));
// Creamos la funcion cipher para encriptar el mensaje
function cipher(phrase) {
  var encryptedString = ''; // Creamos una variable donde se va almacenar la frase encritada
  for (var i=0; i < phrase.length; i++) {// recorremos por todos los elementos de la frase
    if (phrase.charCodeAt([i]) >= 65 && phrase.charCodeAt([i]) <= 90 && phrase.charCodeAt([i]) !== 32) { // la condicion nos permite devolver mayusculas
      encryptedString += String.fromCharCode((phrase.charCodeAt([i]) - 65 + 33) % 26 + 65);
    } // La formula hace que cada elemento de la frase recorra 33 espacios en el abecedario.
    else if (phrase.charCodeAt([i]) >= 97 && phrase.charCodeAt([i]) <= 122 && phrase.charCodeAt([i]) !== 32) { // la condicion nos permite devolver minusculas
      encryptedString += String.fromCharCode((phrase.charCodeAt([i]) - 97 + 33) % 26 + 97);
    }
  }
  return encryptedString;// Nos da la nueva frase encriptada
}
function decipher(phrase) { // Creamos la funcion decipher para decifrar el mensaje
  var newPhrase = cipher(phrase);
  var decipherString = '';
  for (var i=0; i < newPhrase.length; i++) {
    if (newPhrase.charCodeAt([i]) >= 65 && newPhrase.charCodeAt([i]) <= 90 && phrase.charCodeAt([i]) !== 32) {
       decipherString += String.fromCharCode((newPhrase.charCodeAt([i]) - 65) - 33 % 26 + 65);
      }
    else if (newPhrase.charCodeAt([i]) >= 97 && newPhrase.charCodeAt([i]) <= 122 && phrase.charCodeAt([i]) !== 32) {
    decipherString += String.fromCharCode((newPhrase.charCodeAt([i]) - 97) - 33 % 26 + 97);
     }
    }
return decipherString;
}
console.log(phrase);
console.log (cipher(phrase));
console.log (decipher(phrase));
