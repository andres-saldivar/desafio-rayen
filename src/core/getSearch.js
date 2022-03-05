import { appConfig } from "../config/appConfig";
import { execFetch } from "../helpers/execFetch";

export const getSearch = async ( search ) => {

   let url  = `${ appConfig().baseUrl }/tutorial?description=${ search }`;
   let init = 
   {
       method  : 'GET',
       headers : {
         'Content-Type': 'application/json'
       }
   }

   return await execFetch( url, init );
    
}