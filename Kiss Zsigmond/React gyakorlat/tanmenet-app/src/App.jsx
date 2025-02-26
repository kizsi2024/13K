import OraCard from "./components/OraCard";

const App = () => {
  return (
   <main>
    <h1>Bevezetés a programozásba</h1>
    <section className="ora-grid">
      <article className="ora">
        <header>
          <h3>1. óra</h3>
          <button className="icon-button">📝</button>
          <button className="icon-button">🗑️</button>
        </header>
        <h4>Bevezetés a webfejlesztésbe</h4>
        <p>Weboldalak működése és HTML áttekintés.</p>
      </article>
    </section>
  </main>
   

    
)
};

export default App;


<OraCard oraSzam="1. óra" cim="Bevezetés a webfejlesztésbe">
  Weboldalak működése és HTML áttekintés.
</OraCard>;