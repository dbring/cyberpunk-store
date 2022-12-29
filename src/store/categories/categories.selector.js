const CATEGORIES = ["cityscapes", "androids", "genesis", "security", "punks"];

export const selectCategoriesMap = (state) => {
  const arrayOfImages = state.categories.categories;
  const categoriesMap = {};

  for (const imageObject of arrayOfImages) {
    imageObject.price = Math.floor(Math.random() * 100);
    imageObject.category =
      CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
    imageObject.name = imageObject.prompt.split(" ").slice(0, 2).join(" ");

    if (!categoriesMap[imageObject.category])
      categoriesMap[imageObject.category] = [];

    categoriesMap[imageObject.category].push(imageObject);
  }

  return categoriesMap;
};
