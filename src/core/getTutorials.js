import { appConfig } from "../config/appConfig";

export const getTutorials = async ( setIsLoaded, setItems, setError  ) => {

   let url  = `${ appConfig().baseUrl }/tutorials`;
   let init = 
   {
       method  : 'GET',
       headers : {
         'Content-Type': 'application/json'
       }
   }

   await fetch( url, init )
      .then(res => res.json())
      .then(
          (data) => {
            setIsLoaded(true);
            setItems(data);
          },
          (error) => {
            setIsLoaded( true );
            setError( error );
          }
   )
    
}