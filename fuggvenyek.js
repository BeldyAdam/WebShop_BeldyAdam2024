
/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

export function listaOsszeallit(lista) {
    let szoveg = "";
    for (let index = 0; index < lista.length; index++) {
      szoveg+=`<div class="card" style="width: 18rem;">
      <img src="${lista[index].kep}" class="card-img-top" alt="${lista[index].nev}">
      <div class="card-body">
      <h5 class="card-title">${lista[index].nev}</h5>
      <p class="card-text">${lista[index].leiras}</p>
      <a href="#" class="btn btn-primary">Kosárba</a>
      </div>
      </div>`;
    }
    return szoveg;
}

export function listaMegjelenit(lista) {
    const termekekELEM = $(".termekek");
    termekekELEM.append(listaOsszeallit(lista));
}