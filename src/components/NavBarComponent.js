import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../estilo.css';

export const NavBarComponent = ( { app, setApp } ) => {

    const { title, showBack, showUpdate, backTo, current } = app;

    let navigate = useNavigate();
    const handleNavigateBack = () => {        
        (backTo === '') ? navigate('./') : navigate( backTo, { state :{ tutorial: current } } );
    }

    const handleNavigateUpdate = () => {
        navigate('/update-tutorial', { state: { tutorial: {} } } );
    }
    
    return (
        <div className='row rayen-navbar align-middle'>
            
            {
                showBack ?
                    <>
                        <div className='col-2'>
                            <button
                                type='button'
                                className='nav-link'
                                onClick={ handleNavigateBack }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-reply-fill" viewBox="0 0 16 16">
                                    <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='col-lg-8 col-8 p-0 text-start'>
                            <NavLink activeclassname='active' className='nav-link' to="/">{ title }</NavLink>
                        </div>
                    </>
                :
                    <div className='col-sm-8 col-lg-10 text-start'>
                        <NavLink activeclassname='active' className='nav-link' to="/">{ title }</NavLink>
                    </div>
            }

            {
                 showUpdate ?
                    <div className='col-2 text-end'>
                        <button 
                            type='button'
                            className='nav-link float-end'
                            onClick={ handleNavigateUpdate }
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        </button>
                    </div>
                :
                    <div className='col-2 px-1'>
                    </div>
            }

        </div>
    )
}