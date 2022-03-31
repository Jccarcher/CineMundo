import React, { useState } from 'react'
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Formlogin = () => {

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    documentNumber:"",
    email: "",
    age:"",
    password: "",
  })

  const infoSubmit = async (e) => {
    e.preventDefault()
    console.log('Formulario enviado')
    /* cambiarFormularioEnviado(true)
    setTimeout(() => cambiarFormularioEnviado(false), 5000) */
    let { name, lastname, documentNumber, email,age, password } = formData
    console.log(formData)
    try {
      const respuesta = await fetch('http://localhost:5000/users/create', {
        method: "POST",
        body: JSON.stringify({ name, lastname, documentNumber, email, age, password }),
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
          name: '',
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
              <label htmlFor='name'> name</label>
              <Field
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                className='form-control'
                id='name'
                name='name'
                placeholder='name'
              />
            </div>
            <div>
              <label htmlFor='lastname'> Apellido</label>
              <Field
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                value={formData.lastname}
                className='form-control'
                id='lastname'
                name='lastname'
                placeholder='lastname'
              />
            </div>
            <div>
              <label htmlFor='documentNumber'> DNI</label>
              <Field
                onChange={(e) =>
                  setFormData({ ...formData, documentNumber: e.target.value })
                }
                value={formData.documentNumber}
                className='form-control'
                id='documentNumber'
                name='documentNumber'
                placeholder='documentNumber'
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
              <label htmlFor='age'>Edad</label>
              <Field
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
                value={formData.age}
                className='form-control'
                id='age'
                name='age'
                placeholder='age'
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
    
    /* <div className="container">
    <form id="formCliente" onSubmit={infoSubmit} action="">
            <fieldset>
            <legend>Sign Up</legend>

    <div className="form-group">
      <label htmlFor="name" className="form-label mt-4">Nombre</label>
      <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} value= {formData.name} className="form-control" id="name" name="name" placeholder="name" />
    </div>
    
    <div className="form-group">
      <label htmlFor="lastname" className="form-label mt-4">Apellido</label>
      <input type="text" onChange={(e) => setFormData({...formData, lastname: e.target.value})} value = {formData.lastname} className="form-control" id="lastname" name="lastname" placeholder="lastname" />
    </div>
    
    <div className="form-group">
      <label htmlFor="documentNumber" className="form-label mt-4">DNI</label>
      <input type="number" onChange={(e) => setFormData({...formData, documentNumber: e.target.value})} value={formData.documentNumber} className="form-control" id="documentNumber" name="documentNumber" placeholder="documentNumber" />
    </div>

    <div className="form-group">
      <label htmlFor="email" className="form-label mt-4">Email</label>
      <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} className="form-control" id="email" name = "email" aria-describedby="emailHelp" placeholder="Email" />
      <small id="emailHelp" className="form-text text-muted">No compartiremos tu email con nadie. ¿O si?</small>
    </div>
    <div className="form-group">
      <label htmlFor="age" className="form-label mt-4">Edad</label>
      <input type="number" onChange={(e) => setFormData({...formData, age: e.target.value})} value={formData.age} className="form-control" id="age" name = "age" aria-describedby="emailHelp" placeholder="Age" />
      <small id="ageHelp" className="form-text text-muted">No compartiremos tu email con nadie. ¿O si?</small>
    </div>

    <div className="form-group">
      <label htmlFor="password" className="form-label mt-4">Password</label>
      <input type="password" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password} className="form-control" id="password" name="password" placeholder="Password" />
    </div><br />

<button type="submit" className="btn btn-primary">Enviar</button>
</fieldset>
</form>
    </div>
 */


  )

} 
export default Formlogin
