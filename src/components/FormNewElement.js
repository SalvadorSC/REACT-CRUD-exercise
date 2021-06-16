import { useState } from "react";
export const FormNewElement = (props) => {
  const {
    elementosLista,
    setElementosLista,
    formClass,
    setFormClass,
    showForm,
    setShowForm,
  } = props;

  const [newElementoLista, setNewElementoLista] = useState("");
  const submitElementoLista = (e) => {
    e.preventDefault();
    setElementosLista([
      ...elementosLista,
      { id: elementosLista.length + 1, elemento: newElementoLista },
    ]);
    setShowForm(!showForm);
    showForm ? setFormClass("hide-form") : setFormClass("show-form");
    setNewElementoLista("");
  };
  return (
    <>
      <form className={formClass} onSubmit={submitElementoLista}>
        <div className="form-group">
          <label htmlFor="elementoLista">Cosa de Baño</label>
          <div className="d-flex">
            <input
              type="text"
              value={newElementoLista}
              onChange={(e) => setNewElementoLista(e.target.value)}
              className="form-control"
              id="elementoLista"
              placeholder="Escribe que cosa nueva tienes en el baño"
            />
            <button type="submit" className="btn button-guardar ml-4">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
