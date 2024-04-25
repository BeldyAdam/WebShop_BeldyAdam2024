import { kosarhozAd } from "./basket.js";
import { kosar } from "./basket.js";
import { osszErtek } from "./basket.js";
/* import { torolEsemeny } from "./main.js"; */

export function szures(lista, keresoSzoveg) {
  const szurtLista = lista.filter(function(termek){
      return termek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLista;
}

export function listaOsszeallit(lista) {
  console.log(lista);
    /* let szoveg = ""; */
    const termekekELEM = $(".termekek");
    for (let index = 0; index < lista.length; index++) {
      let kartya = $(`<div class="card" style="width: 18rem;"></div>`);
      let kep = $(`<img src="${lista[index].kep}" class="card-img-top" alt="${lista[index].nev}">`);
      let kartyaBody = $(`<div class="card-body"></div>`);
      let kartyaCim = $(`<h5 class="card-title">${lista[index].nev}</h5>`);
      let kartyaAr = $(`<p>${lista[index].ar}Ft</p>`)
      let kartyaLeiras = $(`<p class="card-text">${lista[index].leiras}</p>`);
      let kartyaGombb = $(`<button class="btn btn-primary">Kosárba</button>`);
      kartyaGombb.on("click", function(){
          kosarhozAd(lista[index]);
          kosarMegjelenit(kosar);
          console.log(kosar);
      });
      kartya.append(kep);
      kartyaBody.append([kartyaCim, kartyaLeiras, kartyaAr, kartyaGombb]);
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
    return kosar;
}


export function kosarMegjelenit(kosar) {
  const kosarELEM = $(".kosar");
  const vegosszegELEM = $("#vegosszeg");
  let ar = 0;
/*   let szoveg = ""; */
  let kosarKartya = $(`<div class="kosarKartya border border-primary"></div>`);
  kosar.forEach((element,index) => {
    let kosarKartyaAr = $(`<p class="border">${element.ar}Ft</p>`)
    let kosarKartyaNev = $(`<p class="border">${element.nev}</p>`)
    let torlesGombb = $(`<button id="${index}" class="torlesGombb border border-danger danger">Törlés</button>`)
    kosarKartya.append([kosarKartyaNev, kosarKartyaAr, torlesGombb])
/*     szoveg += element.ar
    szoveg += "<br>"; */
    ar += element.ar;
  });
  kosarELEM.html(kosarKartya);
  let ft = " - Ft"
  vegosszegELEM.html([ar, ft]);
  let torlesGombbok = $(".torlesGombb");
  torlesGombbok.on("click", function(event){
    let index = event.target.id;
    torol(kosar, index);
    kosarMegjelenit(kosar);
  })
/*   return kosarELEM; */
}

export function torol(lista, index){
  lista.splice(index, 1);
  return lista;
}

/* export function listaMegjelenit(szoveg) {
    const termekekELEM = $(".termekek");
    termekekELEM.append(szoveg);
} */

export function rendez(lista, kulcs, rIrany) {
  const rlista = lista.sort(function(t1,t2) {
      return t1[kulcs]<t2[kulcs]?-1*rIrany:1*rIrany;
  });
  return rlista;
}

export function rendezEsemeny(lista){
  return listaOsszeallit(rendez(lista, "ar", 1));
}

