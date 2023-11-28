// Función para convertir dólares a pesos colombianos
function convertirADolares() {
  const dolares = parseFloat(document.getElementById('dolares').value);
  const pesos = parseFloat(document.getElementById('pesos').value);
  const tasaCambio = 1 / pesos; // Invertir la tasa de cambio
  const conversion = dolares * tasaCambio;
  document.getElementById('pesos').value = conversion.toFixed(2);
}

// Función para convertir pesos colombianos a dólares
function convertirAPesos() {
  const pesos = parseFloat(document.getElementById('pesos').value);
  const dolares = parseFloat(document.getElementById('dolares').value);
  const tasaCambio = 1 / pesos; // Invertir la tasa de cambio
  const conversion = dolares * tasaCambio;
  document.getElementById('dolares').value = conversion.toFixed(2);
}

// Eventos al cambiar el valor de los campos
document.getElementById('dolares').addEventListener('input', convertirADolares);
document.getElementById('pesos').addEventListener('input', convertirAPesos);

// Mostrar el valor inicial
convertirADolares();
convertirAPesos();
