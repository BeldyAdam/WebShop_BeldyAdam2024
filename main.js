import { LISTA } from "./adatLista.js";
import { listaOsszeallit } from "./fuggvenyek.js";
import { kosar } from "./basket.js";
/* import { listaMegjelenit } from "./fuggvenyek.js"; */
import { kosarMegjelenit } from "./fuggvenyek.js";
import { rendezEsemeny } from "./fuggvenyek.js";
import { rendez } from "./fuggvenyek.js";

init();

function init() {
    console.log(LISTA)
    /* listaMegjelenit(listaOsszeallit(LISTA)); */
    listaOsszeallit(LISTA);
/*     let index = 0;
    torlesKosarbol(kosar, index); */
/*     kosarMegjelenit(torolEsemeny); */
    let rendezArSzerint = $("#rendezArSzerint");
    rendezArSzerint.on("click", function(){
        listaOsszeallit(rendezEsemeny(rendez(LISTA, "ar", 1)));
    })
} 

/* function torol(lista, index){
    lista.splice(index, 1);
    return lista;
  }
  
  export function torolEsemeny(){
    const torolELEM = $("#torlesGombb");
    torolELEM.on("click", function(event) {
        let index = event.target.id;
        const LISTA = torol(kosar, index);
        return LISTA;
    })
  } */