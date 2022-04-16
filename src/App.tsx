import { useEffect, useState } from "react";
import "./App.css";
import { ItemLista } from "./Components/ItemLista";
import { Item } from "./types/Item";
import { AddArea } from "./Components/AddArea";

function App() {
  const [listaUrgente, setListaUrgente] = useState<Item[]>([
    { id: 1, nome: "comprar paão", feito: false },
    { id: 2, nome: "comprar paão", feito: true },
  ]);

  function HandleAddTarefa(tarefaNome: string) {
    let novaLista = [...listaUrgente];
    novaLista.push({
      id: listaUrgente.length + 1,
      nome: tarefaNome,
      feito: false,
    });
    setListaUrgente(novaLista);
  }

  return (
    <div className="organizador">
      <h1>Organizador de tarefas</h1>
      <hr />

      <AddArea onEnter={HandleAddTarefa} />

      {listaUrgente.map((item, index) => (
        <div>
          <ItemLista key={index} item={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
