import { useState } from "react";
import {} from "../../App";

import { Item } from "../../types/Item";
import "./styles.css";

type Props = {
  item: Item;
};

export function ItemLista({ item }: Props) {
  const [check, setIsCheck] = useState(item.feito);

  return (
    <div className="itemLista" feito={check}>
      <input
        type="checkbox"
        checked={check}
        onChange={(event) => setIsCheck(event.target.checked)}
      />
      <label>{item.nome}</label>
    </div>
  );
}
