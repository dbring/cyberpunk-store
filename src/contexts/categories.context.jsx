import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
import { getLexicaArt } from "../utils/lexica/lexica.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     setCategoriesMap(categoryMap);
  //   };
  //   getCategoriesMap();

  // }, []);

  // THe shape of the lexical data here is an array of objects, edit the context default, same with the useState
  // we could perhaps reduce the array in the util file to try and get it into a similar format?

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getLexicaArt();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
