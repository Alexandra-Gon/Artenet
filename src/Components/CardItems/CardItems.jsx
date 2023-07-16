import * as React from "react";
import "./CardItems.css";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../Context/Context";
import { useContext } from "react";

const CardItems = ({ id, img, name, price, units }) => {
  const { addCart, discountCart, itemsShop, MatchingObjects } =
    useContext(ItemsContext);
  let shopped = MatchingObjects(itemsShop, id);

  return (
    <div className="CardItemsContainer">
      <div className="card">
        <Link className="cardLink" to={`/detail/${id}`}>
          <div className="imgCardContainer">
            <img className="imgCard" src={img} alt="Image"></img>
          </div>
          <div className="textCardContainer">
            <h5 className="textCard">{name}</h5>
          </div>

          <p className="priceCard"> ${price.toLocaleString()} </p>
        </Link>
      </div>

      {shopped ? (
        <div className="buttonQuantityContainer">
          <button
            className="buttonQuantity"
            onClick={() => discountCart(id, img, name, price, units)}
          >
            -
          </button>
          <p>{units} unid.</p>
          <button
            className="buttonQuantity"
            onClick={() => addCart(id, img, name, price, units)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="buttonCard"
          onClick={() => addCart(id, img, name, price, units)}
        >
          Añadir
        </button>
      )}
    </div>
  );
};

export default CardItems;
