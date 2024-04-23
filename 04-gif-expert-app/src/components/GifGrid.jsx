const GifGrid = ({ category }) => {
  const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2wrNbPss1oZsMXIXvlz1iuW3aB4D0c2d&q=${category}&limit=20`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data);
  };

  getGifs();
  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo!</p>
    </>
  );
};

export default GifGrid;
