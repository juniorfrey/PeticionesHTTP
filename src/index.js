// Petición HTTP get

//import { obtnerUsuario } from "./js/http-provider";
//import { init } from "./js/usuarios-page";
import * as CRUD from './js/crud-provider';

//import { init } from "./js/chistes-page";

//import { obtenerChiste } from "./js/http-provider";

//const jokeUrl = 'https://api.chucknorris.io/jokes/random';

/*fetch( jokeUrl ).then( resp => {
    //resp.json().then(data) => {
    resp.json().then(({id, value}) => {
        //console.log(data);
        console.log(id);
        console.log(value);
    })
})*/

/*fetch ( jokeUrl ).then(resp => resp.json() )
      .then( ({id, value}) => {
          console.log(id);
          console.log(value);
} );*/

//obtenerChiste().then(console.log);

//init();

//obtnerUsuario().then(console.log);
CRUD.getUsuario(2).then(console.log);
CRUD.crearUsuario({
    name:'Fredys',
    job:'Ingeniero de sistemas'
}).then( console.log )