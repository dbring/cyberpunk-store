const CATEGORIES = ["cityscapes", "androids", "genesis", "security", "punks"];

export const getLexicaArt = async () => {
  try {
    const response = await fetch(
      "https://lexica.art/api/v1/search?q=cyberpunk"
    );
    const data = await response.json();
    const arrayOfImages = data.images;
    const categoryMap = {};
    for (const imageObject of arrayOfImages) {
      imageObject.price = Math.floor(Math.random() * 100);
      imageObject.category =
        CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
      imageObject.name = imageObject.prompt.split(" ").slice(0, 2).join(" ");

      if (!categoryMap[imageObject.category])
        categoryMap[imageObject.category] = [];
      categoryMap[imageObject.category].push(imageObject);
    }

    return categoryMap;
  } catch (error) {
    console.log(error);
  }
};
