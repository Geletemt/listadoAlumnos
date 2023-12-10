import EditAlumno from './EditAlumno';

export default function Listado(props) {
  const { listaAlumnos, onActualizarAlumnos } = props;

  const removeItem = (i) => {
    let tempLista = [...listaAlumnos];
    tempLista.splice(i, 1);
    onActualizarAlumnos(tempLista);
    localStorage.setItem('listaAlumnos', JSON.stringify(tempLista));
  };

  
  return (
    <>
      
      <h1>Listado de Alumnos</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Edad</th>
            <th scope="col">Curso</th>
            <th scope="col">Fecha</th>
            <th scope="col">Nota</th>
            <th scope="col">Porcentaje</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaAlumnos?.map((alumno, i) => (
            <tr key={i}>
              <th scope="row"></th>
              <td>{alumno.name}</td>
              <td>{alumno.apellidos}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.curso}</td>
              <td>{alumno.fecha}</td>
              <td>{alumno.nota}</td>
              <td>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Example with label"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${alumno.porcentaje}%` }}
                  >
                    {`${alumno.porcentaje}%`}
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <EditAlumno alumno={alumno} index={i} listaAlumnos={listaAlumnos} actualizarAlumnos={(values)=>onActualizarAlumnos(values)} />
                  <i
                    onClick={() => removeItem(i)}
                    className="ri-delete-bin-line"
                    style={{ cursor: 'pointer', color: 'red' }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
