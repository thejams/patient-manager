import React from 'react';


const Appoiment = ({ appoiment, removeAppoiment }) => {
    return (
        <div className="cita">
            <p>Mascota <span>{appoiment.pet}</span> </p>
            <p>Dueño <span>{appoiment.owner}</span> </p>
            <p>Fecha <span>{appoiment.date}</span> </p>
            <p>Hora <span>{appoiment.time}</span> </p>
            <p>Sintomas <span>{appoiment.symptoms}</span> </p>
            {
                /*
                    colocamos en el onClick () =>
                    para que el boton espere que ocurra el evento click y luego llame a la funcion
                    si lo colocamos sin la funcion, va a llamar a la funcion de una
                */
            }
            <button 
                className="button eliminar u-full-width"
                onClick={()=> removeAppoiment(appoiment.id)}
            >
                Eliminar &times;
            </button>
        </div>
    )
}
 
export default Appoiment;