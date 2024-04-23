export const getImagen = async () => {
  try {
    const apiKey = "2wrNbPss1oZsMXIXvlz1iuW3aB4D0c2d";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    // console.error(error);
    return "No se encontro la imagen";
    // manejo del error
  }
};

// getImagen();
