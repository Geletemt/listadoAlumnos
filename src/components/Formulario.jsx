import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

export default function Formulario(props) {
  const { listaAlumnos, actualizarAlumnos } = props;
  const [cursos] = useState(['1ºESO', '2ºESO', '3ºESO', '4ºESO']);
  let plantillaDecimales = /^\d+(\.\d{0,2})?$/;

  const addAlumnos = (values) => {
    console.log(listaAlumnos);
    // console.log(values);
    let tempListaAlumnos = [...listaAlumnos, values];
    console.log(tempListaAlumnos);
    localStorage.setItem('listaAlumnos', JSON.stringify(tempListaAlumnos));
    actualizarAlumnos();
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
                  name: '',
                  apellidos: '',
                  edad: '',
                  curso: '',
                  fecha: '',
                  nota: '',
                  porcentaje: '',
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required('Campo obligatorio'),
                  apellidos: Yup.string().required('Campo obligatorio'),
                  edad: Yup.number()
                    .required('Campo obligatorio')
                    .min(18, 'Debe Ser Mayor de edad')
                    .max(99),
                  curso: Yup.string().required('Campo obligatorio'),
                  fecha: Yup.date().nullable(),
                  nota: Yup.number().required('Campo obligatorio'),
                  porcentaje: Yup.number().required('Campo obligatorio'),
                })}
                validateOnBlur={false}
                validateOnChange={false}
                onSubmit={(values) => {
                  addAlumnos(values);
                }}
              >
                {({ setFieldValue, handleSubmit, errors }) => (
                  <Form onSubmit={handleSubmit}>
                    {errors && (
                      <>
                        <div>
                          {errors.name && <span>Nombre:{errors.name}</span>}
                        </div>
                        <div>
                          {errors.apellidos && (
                            <span>Apellidos:{errors.apellidos}</span>
                          )}
                        </div>
                        <div>
                          {errors.edad && <span>Edad:{errors.edad}</span>}
                        </div>
                        <div>
                          {errors.curso && <span>Curso:{errors.curso}</span>}
                        </div>
                        <div>
                          {errors.fecha && <span>Fecha:{errors.fecha}</span>}
                        </div>
                        <div>
                          {errors.nota && <span>Nota:{errors.edad}</span>}
                        </div>
                        <div>
                          {errors.porcentaje && (
                            <span>Porcentaje:{errors.porcentaje}</span>
                          )}
                        </div>
                        <div></div>
                      </>
                    )}
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Nombre
                      </span>
                      <Field
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Nombre"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Apellidos
                      </span>
                      <Field
                        type="text"
                        className="form-control"
                        name="apellidos"
                        placeholder="Apellidos"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Edad
                      </span>
                      <Field
                        type="number"
                        className="form-control"
                        name="edad"
                        placeholder="Edad"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Curso
                      </span>
                      <Field
                        as="select"
                        className="form-control"
                        name="curso"
                        placeholder="Curso"
                      >
                        {cursos.map((curso, i) => (
                          <option key={i}>{curso}</option>
                        ))}
                      </Field>
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Fecha
                      </span>
                      <Field
                        type="date"
                        className="form-control"
                        name="fecha"
                        timezone=""
                        placeholder="Fecha"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Nota
                      </span>
                      <Field
                        type="number"
                        className="form-control"
                        name="nota"
                        placeholder="Nota"
                      />
                    </div>

                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        Porcentaje
                      </span>
                      <Field
                        type="number"
                        className="form-control"
                        name="porcentaje"
                        placeholder="Porcentaje"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-secondary"
                      // data-bs-dismiss="modal"
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
