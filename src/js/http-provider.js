const jokeUrl       = 'https://api.chucknorris.io/jokes/random';
const urlUsuario    = 'https://reqres.in/api/users?page=2';


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

const obtnerUsuario = async() => {
    const resp = await fetch(urlUsuario);
    const {data:usuarios} = await resp.json();
    return usuarios;
}

export {
    obtenerChiste,
    obtnerUsuario
}