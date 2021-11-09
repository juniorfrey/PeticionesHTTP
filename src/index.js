// Petición HTTP get

import { obtenerChiste } from "./js/http-provider";

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

obtenerChiste().then(console.log);