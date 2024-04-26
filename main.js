import { LISTA } from "./adatLista.js";
import { listaOsszeallit } from "./fuggvenyek.js";
import { kosar } from "./basket.js";
import { kosarMegjelenit } from "./fuggvenyek.js";
/* import { rendez } from "./fuggvenyek.js"; */
import { rendezArSzerint } from "./fuggvenyek.js";
import { rendezettListaMegjelenitese } from "./fuggvenyek.js";
import { rendez } from "./fuggvenyek.js";

init();
console.log(LISTA);
rendez(LISTA);

function init() {
    console.log(LISTA)
    listaOsszeallit(LISTA);
} 

