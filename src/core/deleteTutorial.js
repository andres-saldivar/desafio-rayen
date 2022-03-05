import { appConfig } from '../config/appConfig';
import { execFetch } from '../helpers/execFetch';

export const deleteTutorial = async ( id ) => {

    let url  = `${ appConfig().baseUrl }/deletetutorial/${ id }`;
    let init = 
    {
        method  : 'DELETE',
        headers : {
          'Content-Type': 'application/json'
        }
    }

    return await execFetch( url, init );

}