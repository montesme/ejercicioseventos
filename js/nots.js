// a. Crear un array donde vamos a guardar las notas
let notas = [];

// b. Agregar un par de notas de prueba
notas.push({ id: 1, titulo: 'Nota de prueba 1', texto: 'Contenido de la nota 1', realizada: false });
notas.push({ id: 2, titulo: 'Nota de prueba 2', texto: 'Contenido de la nota 2', realizada: true });

// c. Crear una variable idGlobal e inicializarla
let idGlobal = notas.length > 0 ? notas[notas.length - 1].id : 0;

// d. Crear un div que será el contenedor de las notas
const contenedorNotas = document.getElementById('contenedor-notas');

// e. Función para pintar las notas
function pintarNotas() {
  contenedorNotas.innerHTML = '';
  if (notas.length === 0) {
    contenedorNotas.innerHTML = 'NO HAY NOTAS PARA MOSTRAR';
    return;
  }
  notas.forEach(nota => {
    contenedorNotas.innerHTML += `
      <div class="note">
        <h3>${nota.titulo}</h3>
        <p>${nota.texto}</p>
        <input type="checkbox" onClick="marcarRealizada(${nota.id})" ${nota.realizada ? "checked" : ""}>
        <button onclick="borrarNota(${nota.id})">Borrar nota</button>
      </div>
    `;
  });
}

// f. Crear interfaz para nuevas notas
const inputTitulo = document.getElementById('input-titulo');
const inputTexto = document.getElementById('input-texto');
const btnGuardar = document.getElementById('btn-guardar');
const btnLimpiar = document.getElementById('btn-limpiar');

// g. Función para agregar notas
function agregarNota(titulo, texto) {
  idGlobal++;
  const nuevaNota = { id: idGlobal, titulo, texto, realizada: false };
  notas.push(nuevaNota);
  pintarNotas();
}

// h. Guardar valores de los inputs y agregar nueva nota
btnGuardar.addEventListener('click', () => {
  const titulo = inputTitulo.value.trim();
  const texto = inputTexto.value.trim();
  if (titulo !== '' && texto !== '') {
    agregarNota(titulo, texto);
    limpiarCampos();
  }
});

// i. Función para borrar una nota por su id
function borrarNota(id) {
  notas = notas.filter(nota => nota.id !== id);
  pintarNotas();
}

// j. Función para marcar una nota como realizada
function marcarRealizada(id) {
  const notaIndex = notas.findIndex(nota => nota.id === id);
  if (notaIndex !== -1) {
    notas[notaIndex].realizada = !notas[notaIndex].realizada;
    pintarNotas();
  }
}

// k. Validación para mostrar mensaje si no hay notas
pintarNotas();

// l. Limpiar campos de título y texto
function limpiarCampos() {
  inputTitulo.value = '';
  inputTexto.value = '';
}

// m. Crear filtro por texto y notas realizadas
const inputFiltroTexto = document.getElementById('filtro-texto');
const inputFiltroRealizadas = document.getElementById('filtro-realizadas');

// n. Función para filtrar por notas realizadas
function filtrarPorRealizadas(array) {
  return array.filter(nota => inputFiltroRealizadas.checked ? nota.realizada : true);
}

// q. Función para filtrar por texto
function filtrarPorTexto(array, texto) {
  return array.filter(nota =>
    nota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
    nota.texto.toLowerCase().includes(texto.toLowerCase())
  );
}

// r. Mostrar resultado de filtros
function aplicarFiltros() {
  let notasFiltradas = notas;
  notasFiltradas = filtrarPorRealizadas(notasFiltradas);
  const textoFiltro = inputFiltroTexto.value.trim();
  notasFiltradas = textoFiltro !== '' ? filtrarPorTexto(notasFiltradas, textoFiltro) : notasFiltradas;
  pintarNotas(notasFiltradas);
}

// o. Eventos al cambiar el texto o checkbox de filtro
inputFiltroTexto.addEventListener('keyup', aplicarFiltros);
inputFiltroRealizadas.addEventListener('change', aplicarFiltros);

// l. Limpiar campos al hacer click en el botón "Limpiar"
btnLimpiar.addEventListener('click', limpiarCampos);