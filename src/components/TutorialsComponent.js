import React, { useState } from 'react';
import { ItemTutorialComponent } from './ItemTutorialComponent';
import { deleteAllTutorials } from '../core/deleteAllTutorials';
import { serialMaker } from '../helpers/serialMaker'
import Swal from 'sweetalert2';
import { orderArray } from '../helpers/orderArray';

export const TutorialsComponent = ( { items, setItems } ) => {

    var seqer = serialMaker();
    seqer.set_prefix('R');
    seqer.set_seq(100000);

    const [orden, setOrden] = useState({ value: 'titulo' });
    
    const ordenarDatos = ( evt ) => {
      setOrden( evt.target.value );
      orderArray( items, evt.target.value );
    }

    const handleEliminarAllTutorial = async () => {

      if( items.length === 0 ) {

        Swal.fire({
          title: 'Ops!',
          text: `No hay tutoriales para eliminar`,
          icon: 'warning',
          confirmButtonText: 'Entiendo'
        })

      } else {

        Swal.fire({

          title: '',
          text: `¿ Eliminar todos los tutoriales ?`,
          icon: 'question',
          confirmButtonText: 'Eliminar',
          showCancelButton: true
          
        }).then( async (resp) => { 

          if( resp.isConfirmed ){

            await deleteAllTutorials().then(() => {
            
              setItems([]);
        
            }).catch(() => {
        
              Swal.fire({
                title: 'Ops!',
                text: `Se produjo un error al eliminar todos los tutoriales`,
                icon: 'error',
                confirmButtonText: 'Entiendo'
              })
        
            });

          }

        })

      }

    }

    return (
      <div>
        <div className='row g-3 mb-3 p-1 align-items-end'>          
          <div className='col-3'></div>
          <span className='col-5 col-md-8 p-2 text-muted order-title'>Ordenado por</span>
          <select className='col-1 form-select rayen-select' value={ orden.value } onChange={ ordenarDatos }>
            <option value="titulo">Titulo</option>
            <option value="fecha">Fecha</option>
          </select>
        </div>
        <ol className="list-group">          
        {
          items.map( tutorial => {
            console.log(tutorial);
            return <ItemTutorialComponent key={ seqer.gensym() } tutorial={ tutorial } />
          })
        }  
        </ol>
        <div className='col-12 pt-5 d-flex align-items-center'>
          <button
            className='btn rayen-btn-outline mx-auto'
            type='button'
            onClick={ handleEliminarAllTutorial }
          >
            ELIMINAR TODO
          </button>
        </div>
        
      </div>
    ) 

}