import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchComponent } from './SearchComponent';
import { TutorialsComponent } from './TutorialsComponent';
import { getTutorials } from '../core/getTutorials';
import { orderArray } from '../helpers/orderArray';

export const HomeViewComponent = ( { app, setApp } ) => {

    const navigate = useNavigate();    
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect( async () => {
        
        setApp(
            {
                title: 'Tutoriales',
                showBack: false,
                showUpdate: false
            }
        );  

        await getTutorials( setIsLoaded, setItems, setError );

    }, 
    []);
        
    const handleNavigateAddTutorial = () => {
        navigate('/add-tutorial', '');
    }

    const ordenarDatos = ( data ) => {
        orderArray( data, 'titulo' );
    }
        
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        ordenarDatos( items );

        return (
            <div>
                <SearchComponent items={ items } setItems={ setItems } />
                <TutorialsComponent items={ items } setItems={ setItems } />
                <div className="fixed-bottom">
                    <button 
                        type='button'
                        className='btn-add-tutorial'
                        onClick={ handleNavigateAddTutorial }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
        
    }
}
