import "./ShopForm.css";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig"
import MessageSuccess from "../MessageSuccess/MessageSuccess"

const initialState = {
  name: "",
  lastName: "",
  email: "",
  city: "",
};

const ShopForm = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "purchasesCollection"), {
      values
    });
    setPurchaseID(docRef.id);

    setValues(initialState);
  };

  return (
    <div>
      <p>¡Completa los datos para finalizar tu compra!</p>
      <form className="formContainer" onSubmit={onSubmit}>
        <input
          type="text"
          className="formControl"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Nombre"
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <input
          type="text"
          className="formControl"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Apellido"
          name="lastName"
          value={values.lastName}
          onChange={handleOnChange}
        />
        <input
          type="email"
          className="formControl"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleOnChange}
        />
        <input
          type="text"
          className="formControl"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Ciudad"
          name="city"
          value={values.city}
          onChange={handleOnChange}
        />
        <button
          className="formButton"
          type="submit"
        >
          Ir a pagar
        </button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default ShopForm;
