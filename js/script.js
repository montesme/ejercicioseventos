function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const alturaCm = parseFloat(document.getElementById('altura').value);

  if (isNaN(peso) || isNaN(alturaCm) || alturaCm === 0) {
    document.getElementById('resultado').innerText = 'Por favor, ingrese valores válidos.';
    return;
  }

  // Convertir altura de centímetros a metros (ya que el IMC se calcula en kg/m^2)
  const alturaMetros = alturaCm / 100;

  const imc = peso / Math.pow(alturaMetros, 2); // Calcula el IMC correctamente
  const resultado = `Tu IMC es: ${imc.toFixed(2)}`;

  document.getElementById('resultado').innerText = resultado;
}