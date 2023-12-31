import { useState } from 'react';
import Formulario from './components/AddAlumno';
import Listado from './components/Listado';

function App() {
  const [listaAlumnos, setListaAlumnos] = useState(
    JSON.parse(localStorage.getItem('listaAlumnos')) || []
  );
  const actualizarNuevoAlumnos = () => {
    setListaAlumnos(JSON.parse(localStorage.getItem('listaAlumnos')));
  };
  return (
    <>
    <div className="container">

      
      <Formulario
        listaAlumnos={listaAlumnos}
        actualizarAlumnos={() => actualizarNuevoAlumnos()}
      />
      <Listado listaAlumnos={listaAlumnos} onActualizarAlumnos={(value)=>setListaAlumnos(value)} />
    </div>  
    </>
  );
}

export default App;
