import { useState } from "react";
import { ElementoLista } from "./ElementoLista";

export const Lista = (props) => {
  const { elementosLista, setElementosLista } = props;
  const printLista = elementosLista.map((elementoLista) => (
    <li className="p-5 mt-3 d-flex align-items-center justify-content-between">
      <ElementoLista
        key={elementoLista.id}
        elementosLista={elementosLista}
        setElementosLista={setElementosLista}
        elementoLista={elementoLista.elemento}
        elementoListaId={elementoLista.id}
      />
    </li>
  ));
  return (
    <>
      <ul>{printLista}</ul>
    </>
  );
};
