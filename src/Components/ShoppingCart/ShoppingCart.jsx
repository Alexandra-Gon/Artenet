import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ShoppingCart.css";
import { ItemsContext } from "../../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { counter, setCounter } = useContext(ItemsContext);

  return (
    <Link to="/shop">
      <div className="ShoppingCart">
        <ShoppingCartIcon />
        <p className="counterNumber"> {counter} </p>
      </div>
    </Link>
  );
};

export default ShoppingCart;
