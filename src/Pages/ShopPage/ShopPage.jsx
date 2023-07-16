import React, { useState, useContext } from "react";
import { ItemsContext } from "../../Context/Context";
import CardItems from "../../Components/CardItems/CardItems";
import ShopForm from "../../Components/ShopForm/ShopForm";
import "./ShopPage.css";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const { itemsShop, setItemsShop, setCounter } = useContext(ItemsContext);
  const [showPurchases, setShowPurchases] = useState(false);

  const emptyCart = () => {
    setItemsShop([]);
    setCounter(0);
  };

  const totalizePrice = () => {
    let totalPrice = 0;
    itemsShop.map((item) => {
      totalPrice += Number(item.price * item.units);
    });
    return totalPrice.toLocaleString();
  };

  return (
    <div className="shop">
      <h1 className="titleShop">Tu carrito</h1>

      {itemsShop.length ? (
        <div className="shopContainer">
          <div className="shopItems">
            {itemsShop.map((item, i) => {
              return (
                <CardItems
                  key={i}
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                  units={item.units}
                />
              );
            })}
          </div>
          <div>
            <p>Total a pagar</p>
            <p> $ {totalizePrice()} </p>
            <div className="buttonShopContainer">
              {showPurchases ? (
                <ShopForm />
              ) : (
                <button
                  className="buttonShop finishShop"
                  onClick={() => setShowPurchases(!showPurchases)}
                >
                  Finalizar tu compra
                </button>
              )}
              <Link to="/productos">
                <button className="buttonShop continueShop">
                  Seguir comprando
                </button>
              </Link>

              <button className="emptyCart" onClick={() => emptyCart()}>
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="empthyCartText">Tu carrito está vacio</p>
      )}
    </div>
  );
};

export default ShopPage;
