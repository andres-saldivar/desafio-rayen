import { dateFormatToBuildEndpoint } from './dateFormatToBuildEndpoint';

export const buildTutorialApi = ( rawtutorial ) => {

    return {
        nombre   : rawtutorial.descripcion,
        profesor : rawtutorial.profesor,
        materia  : rawtutorial.materia,
        fecha    : dateFormatToBuildEndpoint( rawtutorial.fecha )
    }

}