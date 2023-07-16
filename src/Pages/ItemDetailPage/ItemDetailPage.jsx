import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemsContext } from "../../Context/Context";
import "./ItemDetailPage.css";

const ItemDetailPage = () => {
  const { getItem, item, addCart, discountCart, itemsShop, MatchingObjects } =
    useContext(ItemsContext);

  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, [id, itemsShop]);

  let shopped = MatchingObjects(itemsShop, id);

  item &&
    item.map((item) => {
      if (itemsShop.length > 0) {
        itemsShop.map((itemShop) => {
          if (itemShop.id === item.id) {
            item.units = itemShop.units;
          }
        });
      } else {
        item.units = 0;
      }
    });

  if (item.length > 0) {
    return (
      <div className="itemDetailContainer">
        {item[0].img && (
          <img className="itemDetailImg" src={item[0].img} alt="img detail" />
        )}
        <div className="detailTextAndButton">
          <div className="itemDetailText">
            {item[0].name && <h5 className="detailName">{item[0].name}</h5>}
            <p className="descriptionDetail">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              facilisis nibh nec diam placerat, vitae ultricies enim
              consectetur. Duis vulputate non dolor sed tempor. Aliquam ut
              venenatis purus. Donec mauris lorem, vulputate in semper at,
              feugiat ut odio. Vivamus iaculis, purus sed sodales placerat.{" "}
            </p>
            {item[0].price && (
              <p>
                <b>Precio: ${item[0].price.toLocaleString()}</b>
              </p>
            )}
          </div>
          <div>
            {shopped ? (
              <div className="buttonQuantityContainer">
                <button
                  className="buttonQuantity"
                  onClick={() =>
                    discountCart(
                      id,
                      item[0].img,
                      item[0].name,
                      item[0].price,
                      item[0].units
                    )
                  }
                >
                  -
                </button>
                <p>{item[0].units} unid.</p>
                <button
                  className="buttonQuantity"
                  onClick={() =>
                    addCart(
                      id,
                      item[0].img,
                      item[0].name,
                      item[0].price,
                      item[0].units
                    )
                  }
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="buttonCard"
                onClick={() =>
                  addCart(
                    id,
                    item[0].img,
                    item[0].name,
                    item[0].price,
                    item[0].units
                  )
                }
              >
                Añadir
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ItemDetailPage;
