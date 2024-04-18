import { kosarhozAd } from "./basket.js";
import { kosar } from "./basket.js";

export function listaOsszeallit(lista) {
  console.log(lista);
    /* let szoveg = ""; */
    const termekekELEM = $(".termekek");
    for (let index = 0; index < lista.length; index++) {
      let kartya = $(`<div class="card" style="width: 18rem;"></div>`);
      let kep = $(`<img src="${lista[index].kep}" class="card-img-top" alt="${lista[index].nev}">`);
      let kartyaBody = $(`<div class="card-body"></div>`);
      let kartyaCim = $(`<h5 class="card-title">${lista[index].nev}</h5>`);
      let kartyaLeiras = $(`<p class="card-text">${lista[index].leiras}</p>`);
      let kartyaGombb = $(`<button class="btn btn-primary">Kosárba</button>`);
      kartyaGombb.on("click", function(){
          kosarhozAd(lista[index]);
          console.log(kosar);
      });
      kartya.append(kep);
      kartyaBody.append([kartyaCim, kartyaLeiras, kartyaGombb]);
      kartya.append(kartyaBody);
      termekekELEM.append(kartya);
/*       szoveg+=`<div class="card" style="width: 18rem;">
      <img src="${lista[index].kep}" class="card-img-top" alt="${lista[index].nev}">
      <div class="card-body">
      <h5 class="card-title">${lista[index].nev}</h5>
      <p class="card-text">${lista[index].leiras}</p>
      <a href="#" class="btn btn-primary">Kosárba</a>
      </div>
      </div>`; */
    }
    /* return szoveg; */
}

/* export function listaMegjelenit(szoveg) {
    const termekekELEM = $(".termekek");
    termekekELEM.append(szoveg);
} */
