import React, { useState } from 'react'
const FormMovie = () => {
  //   const data = Object.fromEntries(new FormData(e.target))
  //   alert(JSON.stringify(data))
  const [values, setValues] = useState({
    title: '',
    trailer: '',
    synopsis: '',
    poster: '',
    year: '',
  })
  function handleSubmit(e) {
    e.preventDefault()
    console.log('Informacion enviada')
    // Aquí puedes usar values para enviar la información
  }
  function handleChange(evt) {
    /*
      evt.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    const { target } = evt
    const { name, value } = target
    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutó el evento
    */
    const newValues = {
      ...values,
      [name]: value,
    }
    // Sincroniza el estado de nuevo
    setValues(newValues)
  }
  return (
    <form className='container formulario' onSubmit={handleSubmit}>
      <label htmlFor='title'>Titulo del video</label>
      <input
        id='title'
        name='title'
        type='title'
        value={values.title}
        onChange={handleChange}
      />
      <label htmlFor='trailer'>Link de trailer de YouTube</label>
      <input
        id='trailer'
        name='trailer'
        type='trailer'
        value={values.trailer}
        onChange={handleChange}
      />
      <label htmlFor='synopsis'>Descripción</label>
      <input
        id='synopsis'
        name='synopsis'
        type='synopsis'
        value={values.synopsis}
        onChange={handleChange}
      />
      <label htmlFor='poster'>Link de imagen de portada</label>
      <input
        id='poster'
        name='poster'
        type='poster'
        value={values.poster}
        onChange={handleChange}
      />
      <label htmlFor='year'>Año de estreno</label>
      <input
        id='year'
        name='year'
        type='year'
        value={values.year}
        onChange={handleChange}
      />
      <button type='submit'>Enviar data</button>
    </form>
  )
}
export default FormMovie
