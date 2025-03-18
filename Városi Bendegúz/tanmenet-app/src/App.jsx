import OraCard from "./components/OraCard";
import Oraszam from "./components/Oraszam";
import Temakorok from "./components/Temakorok";
import OraForm from "./components/OraForm";
import { useState } from "react";




const App = /*Nyíl fügyvény=>*/() => {
  const [orak,setOrak]=useState([
    {
      cim: "Bevezetés a webfejlesztésbe",
      leiras: "Weboldalak működése és HTML áttekintés."
    },
    {
      cim: "Fejlesztői környezetek",
      leiras: "Az online és a professzionális fejlesztői eszközök áttekintése. A Visual Studio Code telepítése és alapvető használatának bemutatása."
    },
    {
      cim: "Alapvető HTML tagek",
      leiras: "Legfontosabb tagek használata: h1-h6, p, img, a."
    },
    {
      cim: "HTML attribútumok és szövegformázás",
      leiras: "Attribútumok: id, class, és szövegformázás."
    },
    {
      cim: "HTML listák és táblázatok",
      leiras: "Listaelemek (ul, ol) és táblázatok (table)."
    },
    {
      cim: "Weboldal-struktúra kialakítása",
      leiras: "HTML5 tagek: div, header, footer, nav."
    },
    {
      cim: "HTML5 új elemei",
      leiras: "Section, article, figure, figcaption használata."
    },
    {
      cim: "Űrlapok létrehozása HTML-ben",
      leiras: "Input, textarea, select, és button bemutatása."
    },
    {
      cim: "Űrlap attribútumok és validálás",
      leiras: "Form validálás HTML eszközökkel."
    },
    {
      cim: "Beágyazott média",
      leiras: "Video, audio, és iframe használata weboldalakon."
    },
    {
      cim: "Egyszerű weboldal létrehozása",
      leiras: "HTML segítségével egy alap oldal készítése."
    },
    {
      cim: "Weboldal hierarchikus szerkezete",
      leiras: "HTML tagek strukturált elhelyezése."
    },
    {
      cim: "Hibakeresési technikák",
      leiras: "Hiányzó tagek és hibák azonosítása."
    },
    {
      cim: "Mini projekt: személyes oldal",
      leiras: "Személyes bemutatkozó oldal létrehozása."
    },
    {
      cim: "HTML számonkérés",
      leiras: "Tudás ellenőrzése és visszajelzés."
    },
    {
      cim: "CSS alapjai",
      leiras: "Inline, internal, és external CSS bemutatása."
    },
    {
      cim: "Színek és háttérképek",
      leiras: "Színek, árnyalatok, és háttérképek használata."
    },
    {
      cim: "Betűtípusok és szövegformázás",
      leiras: "Font-family, font-size, és text-align."
    },
    {
      cim: "Box modell",
      leiras: "Szegélyek, margók, és padding használata."
    },
    {
      cim: "CSS pozicionálás",
      leiras: "Relatív, abszolút, és fix pozicionálás."
    },
    {
      cim: "CSS szelektorok",
      leiras: "Alap és haladó szelektorok bemutatása."
    },
    {
      cim: "Reszponzív tervezés alapjai",
      leiras: "Média lekérdezések használata reszponzív tervezéshez."
    },
    {
      cim: "Bootstrap alapok",
      leiras: "Bootstrap grid rendszer bemutatása."
    },
    {
      cim: "Bootstrap komponensek",
      leiras: "Gombok, kártyák, és más elemek használata."
    },
    {
      cim: "Haladó CSS",
      leiras: "Animációk és átmenetek készítése."
    },
    {
      cim: "Weboldalak validálása",
      leiras: "CSS hibák azonosítása és javítása."
    },
    {
      cim: "Mini projekt: reszponzív oldal",
      leiras: "Reszponzív portfólió oldal készítése."
    },
    {
      cim: "Záró gyakorlati feladat",
      leiras: "Reszponzív weboldal tervezése Bootstrap segítségével."
    },
    {
      cim: "CSS számonkérés",
      leiras: "Tudás ellenőrzése és visszajelzés."
    },
    {
      cim: "Bevezetés a JavaScript-be",
      leiras: "JavaScript alapok bemutatása és használata."
    },
    {
      cim: "„Hello World!” program",
      leiras: "Első JavaScript kód írása és futtatása."
    },
    {
      cim: "Változók és adattípusok",
      leiras: "Változók deklarálása és adattípusok kezelése."
    },
    {
      cim: "Műveletek és operátorok",
      leiras: "Alapvető matematikai és logikai műveletek."
    },
    {
      cim: "Események kezelése",
      leiras: "Kattintások és más események figyelése."
    },
    {
      cim: "Függvények",
      leiras: "Függvények létrehozása és paraméterek használata."
    },
    {
      cim: "Feltételek és ciklusok",
      leiras: "If-else szerkezetek és for/while ciklusok."
    },
    {
      cim: "Objektumok és tömbök",
      leiras: "Adatok strukturált tárolása JavaScript-ben."
    },
    {
      cim: "DOM manipuláció",
      leiras: "Weboldalelemek módosítása JavaScript segítségével."
    },
    {
      cim: "Form validáció",
      leiras: "Űrlapok ellenőrzése JavaScript használatával."
    },
    {
      cim: "JavaScript hibakeresés",
      leiras: "Konzol használata hibák keresésére."
    },
    {
      cim: "Mini projekt: kalkulátor",
      leiras: "Egyszerű kalkulátor készítése JavaScript-tel."
    },
    {
      cim: "Záró feladat",
      leiras: "Interaktív weboldal létrehozása."
    },
    {
      cim: "JavaScript számonkérés",
      leiras: "Tudás ellenőrzése és visszajelzés."
    },
    {
      cim: "Projekttervezés",
      leiras: "Célok meghatározása és projekt előkészítése."
    },
    {
      cim: "Verziókezelés alapok",
      leiras: "Git alapvető parancsok és használat."
    },
    {
      cim: "Távoli repository kezelése",
      leiras: "GitHub és távoli verziókezelés bemutatása."
    },
    {
      cim: "Projekt setup",
      leiras: "Alapvető weboldal struktúra kialakítása."
    },
    {
      cim: "Reszponzív design",
      leiras: "Bootstrap alapok integrálása a projektbe."
    },
    {
      cim: "Interaktív elemek hozzáadása",
      leiras: "JavaScript-tel funkciók integrálása."
    },
    {
      cim: "Hibakeresés",
      leiras: "Hibák azonosítása és javítása fejlesztőeszközökkel."
    },
    {
      cim: "Csoportmunka",
      leiras: "Feladatok megosztása és együttműködés GitHub-on."
    },
    {
      cim: "Mini projekt",
      leiras: "Egyszerű projekt csoportmunkában történő kidolgozása."
    },
    {
      cim: "Dokumentáció",
      leiras: "Projekt dokumentációjának elkészítése."
    },
    {
      cim: "Projekt tesztelése",
      leiras: "Tesztelési technikák bemutatása."
    },
    {
      cim: "Egyéni projekt bemutatása",
      leiras: "Tanult technikák alkalmazása egyéni munkában."
    },
    {
      cim: "Csoportos projekt bemutatása",
      leiras: "Csoportmunka és együttműködés értékelése."
    },
    {
      cim: "Záró felkészülés",
      leiras: "Prezentációk előkészítése és gyakorlása."
    },
    {
      cim: "Záró bemutató",
      leiras: "Projektek bemutatása és visszajelzés."
    },
    {
      cim: "Végső értékelés",
      leiras: "Tanultak összegzése és kiértékelés."
    }
  ])
  return (
    <main>
    <h1>Bevezetés a programozásba</h1>
    
    <Oraszam orakATanmenetben={orak.length} />
    <Temakorok></Temakorok>
    <hr />

    <OraForm onOraHozzaad={(newOra) => setOrak((prev) => [...prev, newOra])} />

    <section className="ora-grid">
  {orak.map((ora, index)/*Nyíl fügvény*/ => (
    <OraCard
      key={index}
      oraSzam={`${index + 1}. óra`}
      cim={ora.cim}
      onKartyaTorles={() =>
        setOrak((prev) => prev.filter((ora, i) => i !== index))
      }
    >
      {ora.leiras}
      
    </OraCard>
  ))}
</section>
    </main>
)
}


export default App;
