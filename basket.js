export const kosar = [];

export function kosarhozAd(termek) {
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
