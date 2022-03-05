export const orderArray = ( data, orderby ) => {

    function sortByName (x, y){
        return x.nombre.localeCompare(y.nombre);
    }

    function sortByFecha (x, y){
        return x.fecha.localeCompare(y.fecha);
    }

    let dataOrdenada;
    if ( orderby === 'titulo' ){
        dataOrdenada = data.sort(sortByName);
    } else {
        dataOrdenada = data.sort(sortByFecha);
    }

    data = dataOrdenada;

}