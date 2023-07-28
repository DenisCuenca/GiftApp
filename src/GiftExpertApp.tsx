import { useState } from "react";

// import { AddCategory } from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";

import {AddCategory, GifGrid} from "./components"


function GiftExpertApp() {
  const [categories, setCategories] = useState(["ecuador"]);

  const addCategorie = (value: any) => {
    if (categories.includes(value)) {
      return;
    }

    setCategories([value, ...categories]);
  };
  return (
    <>
      <h1>Gifts apps</h1>
      <AddCategory
        onNewCategory={(value: any) => {
          addCategorie(value);
        }}
      />

      {categories.map((categorie) => (
        <GifGrid key={categorie} category={categorie} />
      ))}
    </>
  );
}

export default GiftExpertApp;
