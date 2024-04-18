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
