import { kosarhozAd } from "./basket.js";
import { kosar } from "./basket.js";
import { osszErtek } from "./basket.js";

export function szures(lista, keresoSzoveg) {
  const szurtLista = lista.filter(function(termek){
      return termek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLista;
}

export function listaOsszeallit(lista) {
    /* console.log(lista); */
    const termekekELEM = $(".termekek");
    for (let index = 0; index < lista.length; index++) {
      let kartya = $(`<div class="card" style="width: 18rem; position: relative;"></div>`);
      let kep = $(`<img src="${lista[index].kep}" class="card-img-top" alt="${lista[index].nev}">`);
      let kartyaBody = $(`<div class="card-body"></div>`);
      let kartyaCim = $(`<h5 class="card-title">${lista[index].nev}</h5>`);
      let kartyaAr = $(`<p style="margin-bottom: 50px;">${lista[index].ar}Ft</p>`)
      let kartyaLeiras = $(`<p class="card-text">${lista[index].leiras}</p>`);
      let kartyaGombb = $(`<button class="kosarbaGombb btn btn-primary style="position: absolute; bottom: 0; right: 0;">Kosárba</button>`);
      kartyaGombb.on("click", function(){
          kosarhozAd(lista[index]);
          kosarMegjelenit(kosar);
          /* console.log(kosar); */
      });
      kartya.append(kep);
      kartyaBody.append([kartyaCim, kartyaLeiras, kartyaAr, kartyaGombb]);
      kartya.append(kartyaBody);
      termekekELEM.append(kartya);
    }
    /* return kartya; */
}

export function kosarMegjelenit(kosar) {
  const kosarELEM = $(".kosar");
  const vegosszegELEM = $("#vegosszeg");
  let ar = 0;
  let mennyiseg = 0;
/*   kosar.forEach(element => {
    if(element.nev === kosar[element]){
      mennyiseg++;
    }
  }); */
  for (let index = 0; index < kosar.length; index++) {
    if(kosar[index].nev === kosar[index].nev){
      mennyiseg++;
    }
  }
  console.log(mennyiseg);
  let kosarKartya = $(`<div class="kosarKartya border border-primary"></div>`);
  mennyiseg += "db<br>";
  kosar.forEach((element,index) => {
    let kosarKartyaAr = $(`<h6 class="border">${element.ar}Ft</h6>`);
    let kosarKartyaNev = $(`<h4 class="border">${element.nev}</h4>`);
/*     let torlesGombb = $(`<button id="${index}" class="torlesGombb border border-danger danger">Törlés</button>`); */
    let torlesGombb = $(`<button id="${index}" class="torlesGombb btn btn-outline-danger">Törlés</button>`);
    kosarKartya.append([kosarKartyaNev, kosarKartyaAr, mennyiseg, torlesGombb]);
    ar += element.ar; // basket js osszar meghivasa
  });
  kosarELEM.html(kosarKartya);
  let ft = " - Ft"
  vegosszegELEM.html([ar, ft]);
  let torlesGombbok = $(".torlesGombb");
  torlesGombbok.on("click", function(event){
    let index = event.target.id;
/*     console.log(index); */
    torol(kosar, index);
    kosarMegjelenit(kosar);
  })
}

export function torol(lista, index){
  lista.splice(index, 1);
  return lista;
}

export function rendezArSzerint(lista, rIrany) {
  const rendezettLista = lista.sort(function(termek1, termek2) {
    return termek1.ar - termek2.ar;
  });
  if (rIrany == -1) {
    rendezettLista.reverse();
  }
  return rendezettLista;
}

export function rendezettListaMegjelenitese(rendezettLista) {
  const termekekELEM = $(".termekek");
  termekekELEM.empty();
  rendezettLista.forEach(function(termek) {
    let kartya = $(`<div class="card" style="width: 18rem; position:relative;">
    <img src="${termek.kep}" class="card-img-top" alt="${termek.nev}">
    <div class="card-body">
      <h5 class="card-title">${termek.nev}</h5>
      <p class="card-text">${termek.leiras}</p>
      <p>${termek.ar}Ft</p>
      <button class="btn btn-primary" style="position: absolute; bottom: 0; right: 0;">Kosárba</button>
    </div>
  </div>
`);
/* const kosarbaGombb = $(".kosarbaGombb"); */
/* kosarbaGombb.on("click", function(){) */
kartya.find("button").on("click", function(){
  kosarhozAd(termek);
  kosarMegjelenit(kosar);
});
termekekELEM.append(kartya);
});
}

/* export function rendez(lista) {
  const rendezArSzerintGOMB = $("#rendezArSzerint");
  rendezArSzerintGOMB.on("click", function(){
    let rIrany = 1;
      rendezettListaMegjelenitese(rendezArSzerint(lista, rIrany));
      rIrany*=-1;
  })
} */

export function rendez(lista) {
  const rendezArSzerintGOMB = $("#rendezArSzerint");
  let rIrany = 1;

  rendezArSzerintGOMB.on("click", function() {
    rIrany *= -1;
    const rendezettLista = rendezArSzerint(lista, rIrany);
    rendezettListaMegjelenitese(rendezettLista);
  });
}

export function rendezNevSzerint(lista) {
  const rendezesNevSzerintGOMBB = $("#rendezesNevSzerint");
  let rIrany = 1;

  rendezesNevSzerintGOMBB.on("click", function() {
    rIrany *= -1;

    const rendezettLista = lista.sort((a, b) => {
      const nevA = a.nev.toUpperCase();
      const nevB = b.nev.toUpperCase();

      if (nevA < nevB) {
        return -1 * rIrany;
      }
      if (nevA > nevB) {
        return 1 * rIrany;
      }
    });
    rendezettListaMegjelenitese(rendezettLista);
  });
}

export function szuresKeresesMezo(lista, keresoSzoveg) {
  const szurtLista = lista.filter(function (termek) {
    return termek.nev.toUpperCase().includes(keresoSzoveg.toUpperCase());
  });
  return szurtLista;
}

export function szuresEsemeny(lista) {
  const szuroELEM = $("#kereses");
/*   const keresesGOMBB = $("#keresesGombb"); */
  szuroELEM.on("keyup", function () {
    let szoveg = szuroELEM.val();
    rendezettListaMegjelenitese(szuresKeresesMezo(lista, szoveg));
    if (szuroELEM.val() === " ") {
      rendezettListaMegjelenitese(lista);
    }
  });
}

//kereses
//keresesGombb
