import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
const Formlogin = () => {
  let navigate = useNavigate()

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const iniciarSesion = async (e) => {
    e.preventDefault()
    console.log('Sesion enviada')
    cambiarFormularioEnviado(true)
    setTimeout(() => cambiarFormularioEnviado(false), 5000)
    let { email, password } = formData

    try {
      const respuesta = await fetch('http://localhost:3000/cliente', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await respuesta.json()

      if (data.lenght !== 0) {
        console.log(data[0])
        //navigate("/cards")
        //return <Redirect to="/cards"/>
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(valores) => {
          let errores = {}

          if (!valores.email) {
            errores.email = 'Por favor ingresa un correo electronico'
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
          }
          return errores
        }}
        onSubmit={(valores, { resetForm }) => {
          iniciarSesion()
          console.log('Formulario enviado')
          cambiarFormularioEnviado(true)
          setTimeout(() => cambiarFormularioEnviado(false), 5000)
          resetForm({ email: '', password: '' })
        }}
      >
        {({ errors }) => (
          <Form
            className='container formulario'
            onSubmit={iniciarSesion}
            action=''
          >
            <div>
              <label htmlFor='email' className='form-label mt-4'>
                Email
              </label>
              <input
                type='email'
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                className='form-control'
                id='email'
                name='email'
                aria-describedby='emailHelp'
                placeholder='Email'
              />
              <ErrorMessage
                name='user'
                component={() => <div className='error'>{errors.email}</div>}
              />
            </div>
            <div>
              <label htmlFor='password' className='form-label mt-4'>
                Password
              </label>
              <input
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
            {formularioEnviado && <p className='exito'>Sesion enviada</p>}
          </Form>
        )}
      </Formik>
    </>
  )
}
export default Formlogin
