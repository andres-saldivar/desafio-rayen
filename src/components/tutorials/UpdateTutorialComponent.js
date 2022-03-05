import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dateFormatToInputDate } from '../../helpers/dateFormatToInputDate';
import { buildTutorialApi } from '../../helpers/buildTutorialEndpoint';
import { handleControlChange } from '../../helpers/handleControlChange';
import { updateTutorial } from '../../core/updateTutorial';
import { deleteTutorial } from '../../core/deleteTutorial';
import Swal from 'sweetalert2';
import '../../estilo.css';

export const UpdateTutorialComponent = ( { app, setApp } ) => {
  
  const tutorial = app.current;
  const [values, setValues] = useState({

    descripcion : tutorial.nombre,
    profesor    : tutorial.profesor,
    materia     : tutorial.materia,
    fecha       : tutorial.fecha

  });

  const navigate = useNavigate();

  useEffect( async () => {
    setApp(
      app =
      {
        title      : 'Modificar tutorial',
        showBack   : true,
        showUpdate : false,
        backTo     : '/detail-tutorial',
        current    : app.current
      }
    );
  }, []);

  const handleChange = ( evt ) => {
    handleControlChange( evt, values, setValues );
  }

  const eliminarTutorial = async () => {
      
      console.log('eliminarTutorial fired');
      await deleteTutorial( tutorial.id ).then(() => {
        
        navigate( '/' );
  
      }).catch(() => {
  
        Swal.fire({
          title: 'Ops!',
          text: `Se produjo un error al intentar la eliminación`,
          icon: 'error',
          confirmButtonText: 'Entiendo'
        })
  
      });

  }

  const modificarTutorial = async () => {

    if( values.descripcion === '' || values.profesor === '' || values.materia === '' || values.fecha === '' ){
      
      Swal.fire({
        title: 'Revise',
        text: `Todos los campos son obligatorios`,
        icon: 'warning',
        confirmButtonText: 'Entiendo'
      })

    } else {
      
      let tutorialApi = buildTutorialApi( values );
      await updateTutorial( tutorial.id, tutorialApi  ).then(() => {
        
        navigate('/detail-tutorial', { state: { tutorial: { id: tutorial.id, nombre: values.descripcion, profesor: values.profesor, materia: values.materia, fecha: values.fecha } } } );
  
      }).catch(() => {
  
        Swal.fire({
          title: 'Ops!',
          text: `Se produjo un error al intentar la modificación`,
          icon: 'error',
          confirmButtonText: 'Entiendo'
        })
  
      });

    }

  }

  if( tutorial !== undefined ){
  
    return (
      <div>
        <div className='container mt-3 p-3'>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rayen-input" id="descripcion" name="descripcion" placeholder="Descripción" value={ values.descripcion } onChange={ handleChange } />
            <label>Descripción</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rayen-input" id="profesor" name="profesor" placeholder="Profesor" value={ values.profesor }  onChange={ handleChange } />
            <label>Profesor</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control rayen-input" id="materia" name="materia" placeholder="Materia" value={ values.materia } onChange={ handleChange } />
            <label>Materia</label>
          </div>
          <div className="form-floating mb-3">
            <input type="date" className="form-control rayen-input" id="fecha" name="fecha" placeholder="Fecha" value={ dateFormatToInputDate( values.fecha ) } onChange={ handleChange } />
            <label>Fecha</label>
          </div>

          <div className="d-grid d-flex justify-content-between mt-5">
            <button 
              className="btn rayen-btn-outline me-md-2" 
              type="button"
              onClick={ eliminarTutorial }
            >ELIMINAR</button>
            <button 
              className="btn rayen-btn" 
              type="button"
              onClick={ modificarTutorial }
            >MODIFICAR</button>
          </div>

        </div>

      </div>
    )
  }
  else {
    return ( <div></div> )
  }
}