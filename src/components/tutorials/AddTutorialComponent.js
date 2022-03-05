import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildTutorialApi } from '../../helpers/buildTutorialEndpoint';
import { handleControlChange } from '../../helpers/handleControlChange';
import { addTutorial } from '../../core/addTutorial';
import Swal from 'sweetalert2';
import '../../estilo.css';

export const AddTutorialComponent = ( { app, setApp } ) => {

  const navigate = useNavigate();

  const [values, setValues] = useState({

    descripcion : '',
    profesor    : '',
    materia     : '',
    fecha       : ''

  });

  useEffect(() => {
    setApp(
      app =
      {
        title      : 'Agregar tutorial',
        showBack   : true,
        showUpdate : false,
        backTo     : ''
      }
    );
  }, []);

  const handleChange = ( evt ) => {
    handleControlChange( evt, values, setValues );
  }

  const handleAgregarTutorial = async () => {
    
    console.log('handleAgregarTutorial Fired');

    if( values.nombre === '' || values.profesor === '' || values.materia === '' || values.fecha === '' ){
        
      Swal.fire({
        title: 'Revise',
        text: `Todos los campos son obligatorios`,
        icon: 'warning',
        confirmButtonText: 'Entiendo'
      })

    } else {
      
      let tutorialApi = buildTutorialApi( values );
      console.log('tutorialapi post', tutorialApi);

      await addTutorial( tutorialApi  ).then(() => {

        Swal.fire({
          title: 'Bien',
          text: `Tutorial ${ tutorialApi.nombre } agregado`,
          icon: 'success',
          confirmButtonText: 'Listo'
        }).then( (r) => {
          if( r.isConfirmed ){
            navigate('/');
          }
        });
          
      }).catch(() => {
  
        Swal.fire({
          title: 'Ops!',
          text: `Se produjo un error al crear el tutorial`,
          icon: 'error',
          confirmButtonText: 'Entiendo'
        })
  
      });

    }

  }

  return (

    <div>
      <div className='container mt-3 p-3'>
        <div className="form-floating mb-3">
          <input type="text" className="form-control rayen-input" id="descripcion" name="descripcion" placeholder="Titulo" onChange={ handleChange } />
          <label>Descripción</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control rayen-input" id="profesor" name="profesor" placeholder="Profesor" onChange={ handleChange } />
          <label>Profesor</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control rayen-input" id="materia" name="materia" placeholder="Materia" onChange={ handleChange } />
          <label>Materia</label>
        </div>
        <div className="form-floating mb-3">
          <input type="date" className="form-control rayen-input" id="fecha" name="fecha" placeholder="Fecha" onChange={ handleChange } />
          <label>Fecha</label>
        </div>
        <div className='col-12 pt-5 d-block'>
          <button
            className='btn rayen-btn float-end'
            type='button'
            onClick={ handleAgregarTutorial }
          >
            AGREGAR
          </button>
        </div>
      </div>

    </div>
  )
  
}