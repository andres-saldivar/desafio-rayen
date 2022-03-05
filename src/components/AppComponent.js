import React, { useState } from 'react';
import { TutorialsRoutes } from '../routes/TutorialsRoutes';

export const AppComponent = () => {

  const [ app, setApp ] = useState (
    {
      title      : 'Tutoriales',
      showBack   : false,
      showUpdate : false,
      backTo     : '',
      current    : {}
    }
  );

  return (
    <div className='container-fluid'>
        <TutorialsRoutes app={ app } setApp={ setApp } />
    </div>
  )
}