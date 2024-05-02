export const kosar = [];

export function kosarhozAd(termek) {
    //ha a kosárban márb van az adott termél, akkor termek.db=1
    /* kosar.forEach(element => ) */
    kosar.push(termek);
    let ar = osszErtek();
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
