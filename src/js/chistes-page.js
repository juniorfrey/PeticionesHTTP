import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtroCHiste, olList;

const crearHtmlChiste = () => {
    const html = /*html*/ `<h1 class="mt-5">Chistes</h1>
                            <hr>

                            <button class="btn btn-primary">Otro chiste</button>
                            <ol class="mt-2 list-group">
                                <li class="list-group-item"></li>
                            </ol>
                        `;

    
        const divChistes = document.createElement('div');
        divChistes.innerHTML = html;

        body.append(divChistes);
};

const evento = () => {
    olList = document.querySelector('ol');
    btnOtroCHiste = document.querySelector('button');

    btnOtroCHiste.addEventListener('click', () => {
        obtenerChiste().then((resp) => {
            console.log(resp);
            const htmlLi = /*html*/`<li class="list-group-item">${resp.id}</li>
                                    <li class="list-group-item">${resp.value}</li>
                                    <li class="list-group-item">${resp.icon_url}</li>`;
            olList.innerHTML = htmlLi;

       });
    })

}

export const init = () => {
    crearHtmlChiste();
    evento();
}

