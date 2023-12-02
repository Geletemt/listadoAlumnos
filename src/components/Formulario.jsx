import { Field, Form, Formik } from 'formik';
import { useState } from 'react';

export default function Formulario() {
  const [listaAlumnos, setListaAlumnos] = useState(
    JSON.parse(localStorage.getItem('listaAlumnos')) || []
  );
  const [cursos] = useState(['1ºESO','2ºESO','3ºESO','4ºESO']);
  const [cursoSelected, setCursoSelected] = useState(cursos[0]);

  const addAlumnos = () => {
    let tempListaAlumnos = [...listaAlumnos];
    tempListaAlumnos.push({
      name: '',
      Apellidos: '',
      Edad: '',
      Curso: '',
      Fecha: '',
      Nota: '',
      Porcentaje: '',
    });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Añadir alumno
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Añadir Alumno
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  Name: '',
                  Apellidos: '',
                  Edad: '',
                  Curso: '',
                  Fecha: '',
                  Nota: '',
                  Porcentaje: '',
                }}
                onSubmit={(values) => {
                  localStorage.setItem('listaAlumnos', JSON.stringify(values));
                }}
              >
                {() => (
                  <Form>
                    <label htmlFor="nombre">Name:</label>
                    <Field type="text" name="Name" placeholder="Nombre" />
                    <label htmlFor="apellidos">Surname:</label>
                    <Field
                      type="text"
                      name="Apellidos"
                      placeholder="Apellidos"
                    />
                    <label htmlFor="Edad">Age:</label>
                    <Field type="number" name="Edad" placeholder="Edad" />
                    <label htmlFor="Curso">Curso:</label>
                    <Field as="select" name="Curso" placeholder="Curso">
                      {cursos.map((curso, i) => (
                        <option key={i}>{curso}</option>
                      ))}
                    </Field>
                    <label htmlFor="Fecha">Fecha:</label>
                    <Field type="date" name="Fecha" placeholder="Fecha" />
                    <label htmlFor="Nota">Nota:</label>
                    <Field type="number" name="Nota" placeholder="Nota" />
                    <label htmlFor="Porcentaje">Porcentaje:</label>
                    <Field
                      type="number"
                      name="Porcentaje"
                      placeholder="Porcentaje"
                    />
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Enviar
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
