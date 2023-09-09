const tareas = [
  {
    id: 1,
    tarea: "Abrir las cortinas",
    estado: false
  },
  {
    id: 2,
    tarea: "Hacer la cama",
    estado: false
  },
  {
    id: 3,
    tarea: "Preparar el desayuno",
    estado: false
  },
];

window.addEventListener('load', function () {
  pintarHTML();
});

const pintarHTML = () => {
  let totalTareas = tareas.length;
  const tareasRealizadas = tareas.filter(tarea => tarea.estado === true);
  const cantidadTareasTrue = tareasRealizadas.length;

  let filasHTML = '';

  tareas.forEach(tarea => {
    const estadoTarea = tarea.estado ? "true" : "false";
    const lineaSuperpuesta = tarea.estado ? 'linea-superpuesta' : ''; // Clase CSS para línea superpuesta
    filasHTML += `
      <tr data-estado="${estadoTarea}">
        <td>${tarea.id}</td>
        <td class="${lineaSuperpuesta}">${tarea.tarea}</td>
        <td>
          <input type="checkbox" data-id="${tarea.id}" id="miCheckbox" name="miCheckbox" value="valorDelCheckbox" ${tarea.estado ? "checked" : ""}>
        </td>
        <td>
          <i class="fas fa-times" style="color: red; cursor: pointer;"></i>
        </td>
      </tr>
    `;
  });

  const html = `
    <div class="resultados d-flex flex-row justify-content-between mt-5 me-5">
      <div>
        <p>Total: <b>${totalTareas}</b></p>
        <p>Realizadas: <b>${cantidadTareasTrue}</b></p>
      </div>
      <div>
        <table>
          <tr>
            <td><b>ID</b></td>
            <td><b>Tarea</b></td>
          </tr>
          ${filasHTML}
        </table>
      </div>
    </div>
  `;

  const divHTML = document.getElementById("info");
  divHTML.innerHTML = html;

  // Eliminar tarea
  const deleteIcons = document.querySelectorAll('i.fa-times');
  deleteIcons.forEach((icon, index) => {
    icon.addEventListener('click', function () {
      const tareaId = tareas[index].id;
      tareas.splice(index, 1);
      pintarHTML();
    });
  });

  // Manejador de checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const tareaId = parseInt(checkbox.dataset.id);
      const tarea = tareas.find(t => t.id === tareaId);
      tarea.estado = checkbox.checked;
      pintarHTML();
    });
  });
};


  // Nueva tarea
const agregarTarea = () => {
  const tareaIngresada = document.getElementById("input").value;
  const ultimoElemento = tareas.slice(-1);
  let ultimoID = ultimoElemento[0].id;

  const nuevaTarea = {
    id: ultimoID + 1,
    tarea: tareaIngresada,
    estado: false,
  }
  tareas.push(nuevaTarea)
  pintarHTML();
}
