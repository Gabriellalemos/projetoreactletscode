import { useState, KeyboardEvent } from "react";
import "./styles.css";

type Props = {
  onEnter: (taskName: string) => void;
};

export function AddArea({ onEnter }: Props) {
  const [addTarefa, setAddTarefa] = useState("");

  function HandleKeyUp(event: KeyboardEvent) {
    if (event.code === "Enter" && addTarefa !== "") {
      onEnter(addTarefa);
      setAddTarefa("");
    }
  }
  return (
    <div id="addArea">
      <div className="image">➕</div>
      <input
        id="adiciona-tarefa"
        type="text"
        placeholder="Adicione uma tarefa"
        value={addTarefa}
        onChange={(event) => setAddTarefa(event.target.value)}
        onKeyUp={HandleKeyUp}
      />
    </div>
  );
}
