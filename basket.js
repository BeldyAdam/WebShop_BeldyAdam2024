export const kosar = [];

export function kosarhozAd(termek) {
    //ha a kosárban már van az adott termék, akkor termek.db=1
    /* kosar.forEach(element => ) */
    let ar = osszErtek();
    let db = 0;
/*     kosar.forEach(element => {
        if(element.nev != termek.nev){
            console.log(element.nev);
        }else{
            kosar.push(termek);
        }
    }); */
    kosar.push(termek);
}

export function osszErtek(){
    let vegosszeg;
    kosar.forEach(element => {
        vegosszeg+=element.ar;
    });
    return vegosszeg;
}

/* export function torlesKosarbol(lista, index){
    let torlesGombb = $("#torlesGombb");
    lista.forEach((element,index) => {
        torlesGombb.on("click", function(){
            element[index].remove();
        });
    });
} */
