let finDeCiclo = prompt ('Ingrese ESC para salir');
finDeCiclo = finDeCiclo.toUpperCase();
let producto = parseInt(prompt("cantidad de producto deseado"));
let cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
//$100 es el valor estatico del producto en el cual baso el simulador
const valorCuota = (a, b) => 100 * a + 100 * a * (b / 100);
const datoValido = (a, b) => (a > 0 && b == 1) || b == 3 || b == 6 || b == 12;
const fin = (a) => a != 'ESC';

do {
  if(fin(finDeCiclo)){while (datoValido(producto, cuotas) && fin(finDeCiclo)) {
    let valor = 0;
    switch (cuotas) {
      case 1:
        valor = valorCuota(producto, cuotas);
        alert("El valor de la cuota es: " + valor);
        break;
      case 3:
        valor = valorCuota(producto, cuotas);
        alert("El valor de la cuota es: " + valor);
        break;
      case 6:
        valor = valorCuota(producto, cuotas);
        alert("El valor de la cuota es: " + valor);
        break;
      case 12:
        valor = valorCuota(producto, cuotas);
        alert("El valor de la cuota es: " + valor);
        break;
    }
    producto = parseInt(prompt("cantidad de producto deseado"));
    cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
    finDeCiclo = prompt ('Ingrese ESC para salir');
    finDeCiclo = finDeCiclo.toUpperCase();
  }
  }else {
    break;
  }
  while (!datoValido(producto, cuotas)) {
    alert(
      "los datos ingresados son incorrectos, por favor, vuelva a ingresar los datos"
    );
    producto = parseInt(prompt("cantidad de producto deseado"));
    cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
  }
} while (datoValido(producto, cuotas) && fin(finDeCiclo));

