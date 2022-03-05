import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomeViewComponent } from "../components/HomeViewComponent";
import { NavBarComponent } from "../components/NavBarComponent";
import { AddTutorialComponent } from '../components/tutorials/AddTutorialComponent';
import { DetailTutorialComponent } from '../components/tutorials/DetailTutorialComponent';
import { UpdateTutorialComponent } from '../components/tutorials/UpdateTutorialComponent';

export const TutorialsRoutes = ( { app, setApp } ) => {
  
  return (            
    <BrowserRouter>
        <NavBarComponent app={ app } setApp={ setApp } />
        <Routes>            
            <Route path="add-tutorial"       element={ <AddTutorialComponent app={ app } setApp={ setApp } /> } ></Route>
            <Route path="detail-tutorial"    element={ <DetailTutorialComponent app={ app } setApp={ setApp } /> } ></Route>
            <Route path="update-tutorial"    element={ <UpdateTutorialComponent app={ app } setApp={ setApp } /> } ></Route>
            <Route path="/"                  element={ <HomeViewComponent app={ app } setApp={ setApp } /> } ></Route>
        </Routes>
    </BrowserRouter>
  )
}