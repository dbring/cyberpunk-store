export const getLexicaArt = async () => {
  try {
    const response = await fetch(
      "https://lexica.art/api/v1/search?q=cyberpunk"
    );
    const data = await response.json();

    return data.images;
  } catch (error) {
    console.log(error);
  }
};
