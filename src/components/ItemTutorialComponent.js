import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ItemTutorialComponent = ( { tutorial } ) => {

  let navigate = useNavigate();

  const viewDetailTutorial = ( tutorial ) => {
    navigate('/detail-tutorial', { state: { tutorial: tutorial } } );
  }

  const customFormatDate = ( date ) => {
    var date = new Date( date );
    const months = ["Ene", "Feb", "Mar","Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dec"];
    let formatted_date = `${(date.getDate() + 1).toString().padStart(2, '0')} ${months[date.getMonth()]}. ${date.getFullYear()}`;
    return formatted_date;
  }

  return (
      <li
        className="list-group-item d-flex justify-content-between align-items-start"
        onClick={ () => viewDetailTutorial( tutorial ) }
      >
        <div className="ms-0 me-auto">
          <div className="item fw-bold">{ tutorial.nombre.toString() }</div>
          <span className='item text-muted'>{ tutorial.profesor }</span>
        </div>
        <span className='item-fecha text-muted'>{ customFormatDate( tutorial.fecha ) }</span>
      </li>
  )
}
