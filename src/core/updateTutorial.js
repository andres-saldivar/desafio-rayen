import { appConfig } from "../config/appConfig";
import { execFetch } from '../helpers/execFetch';

export const updateTutorial = async ( id, tutorialapi ) => {

    let url  = `${ appConfig().baseUrl }/updatetutorial/${ id }`;
    let init = 
    {
        method  : 'PUT',
        body    : JSON.stringify( tutorialapi ),
        headers : {
          'Content-Type': 'application/json'
        }
    }

    return await execFetch( url, init );

}