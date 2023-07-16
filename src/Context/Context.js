import React, { useState, createContext, useEffect } from "react";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [itemsAll, setItemsAll] = useState([]);
  const [counter, setCounter] = useState(0);
  const [item, setItem] = useState([]);
  const [itemsCategory, setItemsCategory] = useState([]);
  const [itemsShop, setItemsShop] = useState([]);

  useEffect(() => {
    setItemsAll([]);
    const getItems = async () => {
      const q = query(collection(db, "items"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id, units: 0 });
      });
      setItemsAll(docs);
    };
    getItems();
  }, []);

  // Funciòn que trae el item por id
  const getItem = async (id) => {
    const q = query(collection(db, "items"), where(documentId(), "==", id));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id, units: 0 });
    });
    setItem(docs);

    if (itemsShop.length > 0) {
      itemsShop.map((itemShop) => {
        if (itemShop.id === item.id) {
          item.units = itemShop.units;
        }
      });
    }
  };

  // Funciòn que trae el item por categoria
  const getCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id, units: 0 });
    });
    setItemsCategory(docs);

    if (itemsShop.length > 0) {
      itemsShop.map((itemShop) => {
        if (itemShop.id === itemsCategory.id) {
          itemsCategory.units = itemShop.units;
        }
      });
    }
  }

  const addCart = (id, img, name, price, units) => {
    setCounter(counter + 1);
    const itemShopped = {
      id,
      img,
      name,
      price,
      units: units,
    };
    if (units === 0) {
      itemShopped.units++;
      setItemsShop(itemsShop.concat(itemShopped));
    } else if (units > 0) {
      itemsShop.map((item) => {
        if (item.id === id) {
          item.units++;
        }
      });
    }
  };

  const discountCart = (id, img, name, price, units) => {
    if (counter > 0) {
      setCounter(counter - 1);
      if (units === 1) {
        itemsShop.map((item) => {
          if (item.id === id) {
            item.units--;
          }
        });
        setItemsShop(itemsShop.filter((objeto) => objeto.id !== id));
      } else if (units > 1) {
        itemsShop.map((item) => {
          if (item.id === id) {
            item.units--;
          }
        });
      }
    }
  };

  const MatchingObjects = (itemsShop, id) => {
    return itemsShop.some((objeto) => objeto.id === id);
  };

  return (
    <ItemsContext.Provider
      value={{
        itemsAll,
        setItemsAll,
        counter,
        setCounter,
        item,
        getItem,
        getCategory,
        itemsCategory, 
        setItemsCategory,
        addCart,
        discountCart,
        itemsShop,
        setItemsShop,
        MatchingObjects
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
