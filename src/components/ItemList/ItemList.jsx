import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ lista }) => {
  return (
    <div className="item-list"> {/* Agrego solo esta linea para manejar los item en CSS y se vean en fila de 3 */}
      {lista.length ? (
        lista.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id} className="item-link">
            <Item {...prod} />
          </Link>
        ))
      ) : (
        <p>No hay productos</p>
      )}
    </div>
  );
};