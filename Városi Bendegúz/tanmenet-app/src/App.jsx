import OraCard from "./components/OraCard";
import Oraszam from "./components/Oraszam";
import Temakorok from "./components/Temakorok";
import OraForm from "./components/OraForm";
import { useState } from "react";

const App = () => {
  const [orak, setOrak] = useState([

    {
      
      "cim": "Bevezetés a webfejlesztésbe",
      "leiras": "Weboldalak működése és HTML áttekintés."
    },
    {
      
      "cim": "Fejlesztői környezetek",
      "leiras": "Az online és a professzionális fejlesztői eszközök áttekintése. A Visual Studio Code telepítése és alapvető használatának bemutatása."
    },
    {
      
      "cim": "Alapvető HTML tagek",
      "leiras": "Legfontosabb tagek használata: h1-h6, p, img, a."
    },
    {
      
      "cim": "HTML attribútumok és szövegformázás",
      "leiras": "Attribútumok: id, class, és szövegformázás."
    },
    {
      
      "cim": "HTML listák és táblázatok",
      "leiras": "Listaelemek (ul, ol) és táblázatok (table)."
    },
    {
      
      "cim": "Weboldal-struktúra kialakítása",
      "leiras": "HTML5 tagek: div, header, footer, nav."
    },
    {
      
      "cim": "HTML5 új elemei",
      "leiras": "Section, article, figure, figcaption használata."
    },
    {
      
      "cim": "Űrlapok létrehozása HTML-ben",
      "leiras": "Input, textarea, select, és button bemutatása."
    },
    {
      
      "cim": "Űrlap attribútumok és validálás",
      "leiras": "Form validálás HTML eszközökkel."
    },
    {
      
      "cim": "Beágyazott média",
      "leiras": "Video, audio, és iframe használata weboldalakon."
    },
  ])
  
  return (
    <main>
    <h1>Bevezetés a programozásba</h1>
    
    <Oraszam orakATanmenetben={orak.length} />
    <Temakorok />
    <hr />

    <OraForm onOraHozzaad={(ujOra) => setOrak((prev) => [...prev, ujOra])} />

    <section className="ora-grid">
  {orak.map((ora, index) => (
    <OraCard key={ora.oraSzam} oraSzam={`${index}. óra`} cim={ora.cim}
    onKartyaTorles={() =>
      setOrak((prev) => prev.filter((ora, i) => i !== index))}
      >
      {ora.leiras}
    </OraCard>
  ))}
  
</section>
    </main>
)
      }

export default App
