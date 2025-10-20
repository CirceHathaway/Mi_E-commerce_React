import { useCartContext } from "../../context/CartContext/useCartContext";
import { Item } from "../Item/Item";

export const ItemDetail = ({detail}) => {
    const {addItem} = useCartContext();

    return (
        //Si ustedes deciden NO reutilizar el componente Item y aca hacer
        //una seccion totalmente nueva, pueden despreocuparse del Link en ItemList.

        //En el caso de optar por la NO reutilizacion, pueden colocar el Link envolviendo el <article>
        //en Item y dejar como estaba el ItemList, sin modificaciones
        <Item {...detail}>
            <button onClick={()=>addItem(detail)}>Enviar al carrito</button>
        </Item>
    );
};