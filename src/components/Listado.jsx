

export default function Listado(props) {
  const {listaAlumnos} = props;
  

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
          </tr>
        </thead>
        <tbody>
          {listaAlumnos.map((alumno, i) => (
            <tr key={i}>
              <th scope="row"></th>
              <td>{alumno.name}</td>
              <td>{alumno.apellidos}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.curso}</td>
              <td>{alumno.fecha}</td>
              <td>{alumno.nota}</td>
              <td>{alumno.porcentaje}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
