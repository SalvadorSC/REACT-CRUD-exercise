import { Lista } from "./components/Lista";
import { Header } from "./components/Header";
import { useState } from "react";
function App() {
  const [elementosLista, setElementosLista] = useState([
    { id: 1, elemento: "Cepillo de dientes" },
    { id: 2, elemento: "Champú" },
    { id: 3, elemento: "Peine" },
  ]);
  return (
    <>
      <div className="container">
        <Header
          elementosLista={elementosLista}
          setElementosLista={setElementosLista}
        />
        <Lista
          elementosLista={elementosLista}
          setElementosLista={setElementosLista}
        />
      </div>
    </>
  );
}

export default App;
