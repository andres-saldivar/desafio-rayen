import React from 'react';
import { getSearch } from '../core/getSearch';

export const SearchComponent = ( { items, setItems } ) => {

  const inputSearch = React.createRef();

  const handleSearch = async () => {

    const search = inputSearch.current.value;
    await getSearch( search ).then( (data) => {

        items = data;
        setItems( items );

    });

  }

  return (
    <div className='row' style={{ marginRight:8, marginLeft:8 }}>
      <div className='col-12 mt-4'>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control rayen-input-search" 
            ref={ inputSearch }
            placeholder="Buscar por título"
          />
          <button
            type="button" 
            className="btn btn-outline rayen-btn-search"
            onClick={ handleSearch }
          >Buscar</button>
        </div>
      </div>
    </div>
  )
}