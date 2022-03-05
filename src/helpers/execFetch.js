export const execFetch = async ( url, init ) => {

    return new Promise( async ( result, reject ) => {

        await fetch( url, init )
            .then(res => res.json())
            .then(
                (data) => {
                    result( data );
                },
                (error) => {
                    reject( error );
                }
            )

    });

}