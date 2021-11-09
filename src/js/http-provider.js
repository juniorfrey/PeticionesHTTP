const jokeUrl = 'https://api.chucknorris.io/jokes/random';


const obtenerChiste = async() => {

    try {
        const respuesta = await fetch ( jokeUrl );
        if(!respuesta.ok) throw 'No se pudo realizar la petición';
        const {icon_url, id, value} = await respuesta.json();
        return  {icon_url, id, value};

    } catch (error) {
        throw error;
    }
}

/*const pr = async () => {
    return await obtenerChiste();
}*/

export {
    obtenerChiste
}