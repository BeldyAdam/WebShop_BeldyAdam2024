import { LISTA } from "./adatLista.js";
import { listaOsszeallit } from "./fuggvenyek.js";
import { listaMegjelenit } from "./fuggvenyek.js";

init();

function init() {
    listaMegjelenit(listaOsszeallit(LISTA));
}