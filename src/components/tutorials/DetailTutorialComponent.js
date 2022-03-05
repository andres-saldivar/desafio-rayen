import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { dateFormatToInputDate } from '../../helpers/dateFormatToInputDate';

export const DetailTutorialComponent = ( { app, setApp } ) => {

  const { tutorial } = useLocation().state;

  useEffect(() => {
    setApp(
      app =
      {
        title      : 'Detalle tutorial',
        showBack   : true,
        showUpdate : true,
        backTo     : '',
        current    : tutorial
      }
    );
  }, []);

  return (
    <div>
      <div className='container mt-3 p-3'>
        <div className="form-floating mb-3">
          <input type="text" className="form-control rayen-input" name="add-descripcion" placeholder="Descripción" value={ tutorial.nombre } disabled />
          <label>Descripción</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control rayen-input" name="add-profesor" placeholder="Profesor" value={ tutorial.profesor } disabled />
          <label>Profesor</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control rayen-input" name="add-materia" placeholder="Materia" value={ tutorial.materia } disabled />
          <label>Materia</label>
        </div>
        <div className="form-floating mb-3">
          <input type="date" className="form-control rayen-input" name="add-fecha" placeholder="Fecha" value={ dateFormatToInputDate( tutorial.fecha ) } disabled />
          <label>Fecha</label>
        </div>
      </div>
    </div>
  )
}