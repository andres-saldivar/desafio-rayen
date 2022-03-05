import { appConfig } from "../config/appConfig";
import { execFetch } from '../helpers/execFetch';

export const deleteAllTutorials = async () => {

    let url  = `${ appConfig().baseUrl }/deletetutorials`;
    let init = 
    {
        method  : 'DELETE',
        headers : {
          'Content-Type': 'application/json'
        }
    }

    return await execFetch( url, init );

}