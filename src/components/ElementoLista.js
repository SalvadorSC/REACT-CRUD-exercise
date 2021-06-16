import { useState } from "react";
export const ElementoLista = (props) => {
  const { elementoLista, elementoListaId, elementosLista, setElementosLista } =
    props;
  const [showEditar, setShowEditar] = useState(true);
  const [editedElementoLista, setEditedElementoLista] = useState(elementoLista);

  let borrarElementoLista = (id) => {
    const nuevaListaElementos = elementosLista.filter(
      (elemento) => elemento.id !== id
    );
    setElementosLista(nuevaListaElementos);
  };
  const editarElementosLista = () => {
    let newLista = elementosLista;
    newLista[elementoListaId - 1] = {
      id: elementoListaId,
      elemento: editedElementoLista,
    };
    console.log(newLista);
    setElementosLista(newLista);
    setShowEditar(!showEditar);
  };
  return (
    <>
      {showEditar ? (
        <p className="mb-0">{editedElementoLista}</p>
      ) : (
        <input
          type="text"
          value={editedElementoLista}
          onChange={(e) => setEditedElementoLista(e.target.value)}
          className="form-control"
          id="cosaDeBanyo"
          placeholder="Escribe que cosa nueva tienes en el baño"
        />
      )}

      <div className="d-flex">
        <button
          onClick={editarElementosLista}
          className="btn d-flex align-items-center justify-content-center button-editar ml-3"
        >
          {showEditar ? "Editar" : "Guardar"}
        </button>
        <button
          onClick={() => borrarElementoLista(elementoListaId)}
          className="btn d-flex align-items-center justify-content-center button-delete ml-3"
        >
          X
        </button>
      </div>
    </>
  );
};
