import { useState } from "react";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball Z"]);
  console.log(categories);
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de Gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};

export default GifExpertApp;
