import React, { Fragment } from 'react';
import Formulario from './components/Formulario'

function App() {
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
            <Formulario/>
          </div>
          <div className="one-half column"> 2 </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
