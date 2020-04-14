import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'
import Appoiment from './components/Appoiment'


function App() {
  const [ appoiments, setAppoiments ] = useState([])

  const addApoiment = (appoiment) => {
    setAppoiments([...appoiments, appoiment ])
  }
  const removeAppoiment = (id) => {
    const newAppoimentList = appoiments.filter(appoiment=> appoiment.id !== id)
    setAppoiments(newAppoimentList)
  }
  /*
    the mayoriti of the css classes are from the framework skeleton
    it wass add it as a cdn in the index.html headers of this project
  */
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario addApoiment={addApoiment}/>
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {
              appoiments.map(appoiment => (
                <Appoiment
                  key={appoiment.id}
                  appoiment={appoiment}
                  removeAppoiment={removeAppoiment}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
