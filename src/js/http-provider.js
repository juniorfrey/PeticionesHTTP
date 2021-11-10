const jokeUrl       = 'https://api.chucknorris.io/jokes/random';
const urlUsuario    = 'https://reqres.in/api/users?page=2';
const cloudPreset   = 'pt0afx65';
const urlCloudDinary = '	https://api.cloudinary.com/v1_1/dkq8qyhyc/upload';


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

// Archivo Tipo File
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);

    try {
        const resp = await fetch( urlCloudDinary, {
            method:'POST',
            body: formData
        } );

        if( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

}

export {
    obtenerChiste,
    obtnerUsuario,
    subirImagen
}