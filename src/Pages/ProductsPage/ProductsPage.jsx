import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemsContext } from "../../Context/Context";
import CardItems from "../../Components/CardItems/CardItems";
import "./ProductsPage.css";

const ProductsPage = () => {
  const { getCategory, itemsCategory, setItemsCategory, itemsAll, itemsShop } =
    useContext(ItemsContext);

  const { categoryID } = useParams();

  useEffect(() => {
    if (categoryID === "all") {
      setItemsCategory(itemsAll);
    } else {
      getCategory(categoryID);
      console.log("itemsCategory", itemsCategory);
    }
  }, [itemsAll, categoryID]);

  return (
    <div className="categoriesContainer">
      <h1 className="productTitle">Productos</h1>
      <div className="categoryContainer">
        <Link to={`/productos/all`}>
          <button
            className={categoryID === "all" ? "category active" : "category"}
          >
            Todas las categorías
          </button>
        </Link>
        <Link to={`/productos/papeleria`}>
          <button
            className={
              categoryID === "papeleria" ? "category active" : "category"
            }
          >
            Papelería
          </button>
        </Link>
        <Link to={`/productos/arte`}>
          <button
            className={categoryID === "arte" ? "category active" : "category"}
          >
            Arte
          </button>
        </Link>

        <Link to={`/productos/detalles`}>
          <button
            className={
              categoryID === "detalles" ? "category active" : "category"
            }
          >
            Detalles
          </button>
        </Link>
      </div>

      <div className="products">
        {itemsCategory.map((item) => {
          if (itemsShop.length > 0) {
            itemsShop.map((itemShop) => {
              if (itemShop.id === item.id) {
                item.units = itemShop.units;
              }
            });
          } else {
            item.units = 0;
          }

          return (
            <CardItems
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              units={item.units}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
