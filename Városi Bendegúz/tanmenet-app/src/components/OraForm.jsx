import { useState } from "react";

const OraForm = ({onOraHozzaad}) => {
  const [cim, setCim] = useState("");
  const [leiras, setLeiras] = useState("");

  function handleFormSubmit(e) {
<<<<<<< HEAD
    e.preventDefault()

    const newOra = {
      cim,
      leiras
    }

    onOraHozzaad(newOra)

    setCim("")
    setLeiras("")
=======
    e.preventDefault();
    const newOra = {
      cim,
      leiras,
    };
     onOraHozzaad(newOra);
    setCim("");
    setLeiras("");
>>>>>>> cfabe0f7161a34446e9983d5835f668304b44da3
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="col">
        <input
          type="text"
          placeholder="Cím"
          value={cim}
          onChange={(e) => setCim(e.target.value)}
        />
        <textarea
          placeholder="Leírás"
          rows="5"
          value={leiras}
          onChange={(e) => setLeiras(e.target.value)}
        ></textarea>
      </div>
      <aside className="col">
        <button className="btn">Hozzáadás</button>
<<<<<<< HEAD
        <button className="btn outline">Mégsem</button>
=======
        {/*<button className="btn outline">Mégsem</button>*/}
>>>>>>> cfabe0f7161a34446e9983d5835f668304b44da3
      </aside>
    </form>
  );
};

export default OraForm;