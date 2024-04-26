index.html : 
    Ez a fő oldala a programnak, itt jelennek meg a funkciók, termékek. Ez a kód egy egyszerű HTML dokumentumot készít, amely egy weboldalt strukturál.

style.css : 
    Ez a CSS kód stílusokat határoz meg az előzőleg bemutatott HTML kódban található elemekre.
    A css fájl az index.html-nek állít stílust. A főbb stíluselemek Bootstrap 5-ben lettek létrehozva.

main.js : 
    Függvények:
        init();
        Ez a fő függvénye az egész programnak. Ez a függvény fut le amikor elindítjuk a weboldalt, ide hívódik meg minden alfüggvény.
    
fuggvenyek.js : 
    Függvények:
        listaOsszeallit(lista);
        A függvény bemenete egy lista nevű tömb, amelynek elemei termékobjektumokat tartalmaznak. A függvény végigmegy a lista elemein egy for ciklussal, és mindegyik termékobjektumhoz létrehoz egy HTML kártya elemet <!-- (<div class="card">) --> a Bootstrap keretrendszer használatával.

        A gombra egy eseménykezelőt on("click") is hozzáad, amely meghívja a kosarhozAd() függvényt a megfelelő termékobjektummal, majd frissíti a kosár megjelenítését a kosarMegjelenit függvénnyel.

        kosarMegjelenit(kosar);
        A függvény bemenete egy kosar nevű tömb, amely a kosárban található termékobjektumokat tartalmazza.
        A függvény létrehoz egy üres kosarKartya nevű HTML elemet, amely egy konténert jelöl a kosár tartalmának megjelenítésére. Majd végigmegy a kosar tömb elemein, és mindegyik elemhez hozzáad egy nevet és árat tartalmazó HTML elemet.
        A kosar a basket.js-ből lett beimportálva, ami egy üres listát tartalmaz, és ebben lesznek eltárolva a kattintott termékek.