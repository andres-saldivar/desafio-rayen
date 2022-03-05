import { appConfig } from "../config/appConfig";
import { execFetch } from '../helpers/execFetch';

export const addTutorial = async ( tutorialapi ) => {

    let url  = `${ appConfig().baseUrl }/createtutorial`;
    let init = 
    {
        method  : 'POST',
        body    : JSON.stringify( tutorialapi ),
        headers : {
          'Content-Type': 'application/json'
        }
    }

    return await execFetch( url, init );
    
}