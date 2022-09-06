let producto = parseInt(prompt("cantidad de producto deseado"));
let cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
let valor = 100;

while (producto > 0) {
  switch (cuotas) {
    case 1:
      valor = valor * producto;
      alert("El valor de la cuota es: " + valor);
      break;
    case 3:
      valor = valor * producto + valor * producto * 0.03;
      alert("El valor de la cuota es: " + valor);
      break;
    case 6:
      valor = valor * producto + valor * producto * 0.06;
      alert("El valor de la cuota es: " + valor);
      break;
    case 12:
      valor = valor * producto + valor * producto * 0.12;
      alert("El valor de la cuota es: " + valor);
      break;
    default:
      alert("Cuotas o cantidad de producto invalido");
      break;
  }

  producto = parseInt(prompt("cantidad de producto deseado"));
  cuotas = parseInt(prompt("cantidad de cuotas deseadas, 1, 3, 6 o 12"));
  valor = 100;
}

alert("Cuotas o cantidad de producto invalido recargue la paguina pulsando F5");
