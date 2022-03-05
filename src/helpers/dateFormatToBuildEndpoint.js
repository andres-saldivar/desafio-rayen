export const dateFormatToBuildEndpoint = ( fechaTutorial ) => {

    let fecha = new Date(fechaTutorial);
    let format = `${ fecha.getFullYear() }-${ (fecha.getMonth() + 1 ).toString().padStart( 2, '0' ) }-${ (fecha.getDate() + 1).toString().padStart( 2, '0' ) } ${ fecha.getHours().toString().padStart( 2, '0') }:${ fecha.getMinutes().toString().padStart( 2, '0') }:${ fecha.getSeconds().toString().padStart( 2, '0') }`;
    return format;

}