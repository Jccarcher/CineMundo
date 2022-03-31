import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
const Formlogin = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    email: '',
    password: '',
  })

  const infoSubmit = async (e) => {
    e.preventDefault()
    console.log('Formulario enviado')
    cambiarFormularioEnviado(true)
    setTimeout(() => cambiarFormularioEnviado(false), 5000)
    let { nombre, usuario, email, password } = formData
    try {
      const respuesta = await fetch('http://localhost:3000/crear', {
        method: 'POST',
        body: JSON.stringify({ nombre, usuario, email, password }),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await respuesta.json()
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <Formik
        initialValues={{
          nombre: '',
          email: '',
          usuario: '',
          password: '',
        }}
        onSubmit={(resetForm) => {}}
      >
        {() => (
          <Form
            className='container formulario'
            onSubmit={infoSubmit}
            action=''
          >
            <div>
              <label htmlFor='nombre'> Nombre</label>
              <Field
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                value={formData.nombre}
                className='form-control'
                id='nombre'
                name='nombre'
                placeholder='Nombre'
              />
            </div>
            <div>
              <label htmlFor='usuario'> Usuario</label>
              <Field
                onChange={(e) =>
                  setFormData({ ...formData, usuario: e.target.value })
                }
                value={formData.usuario}
                className='form-control'
                id='usuario'
                name='usuario'
                placeholder='Usuario'
              />
            </div>

            <div>
              <label htmlFor='email'>Correo</label>
              <Field
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                className='form-control'
                id='email'
                name='email'
                placeholder='Email'
              />
            </div>
            <div>
              <label htmlFor='password'> Contraseña</label>
              <Field
                type='password'
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
                className='form-control'
                id='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <button type='submit'>Enviar</button>
            {formularioEnviado && (
              <p className='exito'>Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  )
}
export default Formlogin
