import { LISTA } from "./adatLista.js";
import { listaOsszeallit } from "./fuggvenyek.js";
import { kosar } from "./basket.js";
import { kosarMegjelenit } from "./fuggvenyek.js";
/* import { rendez } from "./fuggvenyek.js"; */
import { rendezArSzerint } from "./fuggvenyek.js";
import { rendezettListaMegjelenitese } from "./fuggvenyek.js";
import { rendez, rendezNevSzerint } from "./fuggvenyek.js";
import { szuresEsemeny, szuresKeresesMezo } from "./fuggvenyek.js";

init();
console.log(LISTA);
rendez(LISTA);
rendezNevSzerint(LISTA);
szuresEsemeny(LISTA);
/* szuresEsemeny(szuresKeresesMezo(LISTA)); */

function init() {
    console.log(LISTA)
    listaOsszeallit(LISTA);
} 
