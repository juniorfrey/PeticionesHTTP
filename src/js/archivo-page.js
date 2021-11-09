

const body = document.body;
let inputFile;
let imgFoto;

const crearInputFileHtml = () => {


    const html = /*html*/`<h1 class="mt-5">Subir archivos</h1>
                            <hr/>
                            <label>Seleccione una fotografia: </label>
                            <input type="file" accept="image/png, image/jpeg" />
                            <img id="foto" class="img-thumbnail" src="" /> `;

    
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile   = document.querySelector('input');
    imgFoto     = document.querySelector('#foto');

}

const evento = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        console.log(file);
    })
}


export const init = () => {
    crearInputFileHtml();
    evento();
}