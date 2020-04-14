import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ addApoiment }) => {
    /*
        remember that useState let us change the state of a react component, this is the hooks approach
    */
   const [ appoiment, setAppoiment ] = useState(
       {
           pet: '',
           owner: '',
           date: '',
           time: '',
           symptoms: ''
       }
   )
   const [ error, setError ] = useState(false)
   /*
       form inputs change handler function, where we will update the state
   */
    const handleInputChange = e => {
        // e.target.name tiene el nombre del campo que se esta modificando
        // verificar inputs que tienen el campo name
        setAppoiment({
            ...appoiment,
            [e.target.name]: e.target.value
        })
    }
    /*
        submit appoiment with all the form data/state
    */
   const handleFormSubmit = e => {
       e.preventDefault()
       const isInvalidAppoimentState = validateAppoimentState()
       setError(isInvalidAppoimentState)
       if (!isInvalidAppoimentState) {
            appoiment.id = uuidv4()
            addApoiment(appoiment)
            clearState()
       }

   }

   const validateAppoimentState = () => {
       return (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '')
   }

   const clearState = () => {
       /*
            actualizamos el state y limpiamos todos sus valores
            como los inputs estan leyendo cada uno un valor del state
            react detecta el cambio en el state y vuelve a renderear
            cada input
       */
        setAppoiment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptoms: ''
        })
   }

   /*
        get all data from state appoiment
    */
   const { pet, owner, date, time, symptoms } = appoiment

    return (
        <Fragment>
            <h2>Crear cita</h2>
            {
                error
                &&
                <p className="alerta-error">Todos los campos son obligatorios</p>
            }
            <form onSubmit={handleFormSubmit}>
                <label>Nombre de la mascota</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={handleInputChange}
                    value={pet}
                />
                <label>Nombre del dueño</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={handleInputChange}
                    value={owner}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleInputChange}
                    value={date}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleInputChange}
                    value={time}
                />
                <label>Nombre de la mascota</label>
                <textarea
                    className="u-full-width"
                    name="symptoms"
                    onChange={handleInputChange}
                    value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar cita
                </button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;