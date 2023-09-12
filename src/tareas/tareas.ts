// Importa la clase Tarea
export class Tarea {
  nombre: string;
  fechaVencimiento: Date;
  completada: boolean;

  constructor(nombre: string, fechaVencimiento: Date) {
    this.nombre = nombre;
    this.fechaVencimiento = fechaVencimiento;
    this.completada = false;
  }

  completar() {
    this.completada = true;
  }
}

import 'bootstrap/dist/css/bootstrap.min.css';

// Obtiene elementos del DOM
const nombreTareaInput = document.getElementById('nombreTarea') as HTMLInputElement;
const fechaVencimientoInput = document.getElementById('fechaVencimiento') as HTMLInputElement;
const agregarTareaButton = document.getElementById('agregarTarea') as HTMLButtonElement;
const completarTareaButton = document.getElementById('completarTarea') as HTMLButtonElement;
const eliminarTareaButton = document.getElementById('eliminarTarea') as HTMLButtonElement;
const listaTareas = document.getElementById('listaTareas') as HTMLUListElement;

// Lista de tareas
const tareas: Tarea[] = [];

// Función para agregar una nueva tarea
function agregarNuevaTarea() {
  const nombreTarea = nombreTareaInput.value;
  const fechaVencimiento = new Date(fechaVencimientoInput.value);

  if (nombreTarea.trim() === '' || isNaN(fechaVencimiento.getTime())) {
    alert('Por favor, ingresa un nombre de tarea válido y una fecha de vencimiento.');
    return;
  }

  const nuevaTarea = new Tarea(nombreTarea, fechaVencimiento);
  tareas.push(nuevaTarea);
  actualizarListaTareas();
  limpiarCampos();
}

// Función para actualizar la lista de tareas en la interfaz
function actualizarListaTareas() {
  listaTareas.innerHTML = '';
  tareas.forEach((tarea) => {
    const tareaItem = document.createElement('li');
    tareaItem.classList.add('list-group-item');

    if (tarea.completada) {
      tareaItem.classList.add('list-group-item-success');
    }

    tareaItem.innerHTML = `
      Tarea: ${tarea.nombre} <br/>
      Fecha: ${tarea.fechaVencimiento} <br/>
      Estado: ${tarea.completada}
      <button  id="completarTarea" class="btn btn-success btn-sm float-end" onclick="completarTarea(index)">Completar</button>
      <button  id="eliminarTarea" class="btn btn-danger btn-sm float-end me-2" onclick="eliminarTarea(index)">Eliminar</button>
    `;

    listaTareas.appendChild(tareaItem);
  });
}

// Función para marcar una tarea como completada
function completarTarea(id) {
  tareas[id].completar();
  actualizarListaTareas();
}

// Función para eliminar una tarea
function eliminarTarea(id) {
  tareas.splice(id, 1);
  actualizarListaTareas();
}

// Función para limpiar los campos de entrada
function limpiarCampos() {
  nombreTareaInput.value = '';
  fechaVencimientoInput.value = '';
}

// Evento de clic para agregar una nueva tarea
agregarTareaButton.addEventListener('click', agregarNuevaTarea);
completarTareaButton.addEventListener('click', completarTarea);
eliminarTareaButton.addEventListener('click', eliminarTarea);

