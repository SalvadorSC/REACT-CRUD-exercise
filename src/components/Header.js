import { FormNewElement } from "./FormNewElement";
import { useState } from "react";

export const Header = (props) => {
  const { elementosLista, setElementosLista } = props;
  const [showForm, setShowForm] = useState(false);
  const [formClass, setFormClass] = useState("hide-form");
  const displayForm = () => {
    setShowForm(!showForm);
    showForm ? setFormClass("hide-form") : setFormClass("show-form");
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center ">
        <h1 className="my-5">Lista de cosas que tengo en el baño</h1>
        <button onClick={displayForm} className="btn button-add">
          Añadir cosa
        </button>
      </div>
      {
        <FormNewElement
          setElementosLista={setElementosLista}
          elementosLista={elementosLista}
          formClass={formClass}
          showForm={showForm}
          setShowForm={setShowForm}
          setFormClass={setFormClass}
        />
      }
    </>
  );
};
