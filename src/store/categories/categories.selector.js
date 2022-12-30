import { createSelector } from "reselect";

const CATEGORIES = ["cityscapes", "androids", "genesis", "security", "punks"];

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (arrayOfImages) => {
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
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
