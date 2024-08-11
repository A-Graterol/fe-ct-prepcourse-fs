function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if(numero >= 0){
    console.log('Es un numero entero');
  }else{
    console.log('No es un numero entero');
  }
};

//esNumeroEntero(0)

module.exports = esNumeroEntero;