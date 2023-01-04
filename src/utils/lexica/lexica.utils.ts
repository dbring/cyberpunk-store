import { Category } from "../../store/categories/categories.types";

export const getLexicaArt = async (): Promise<Category[]> => {
  const response = await fetch("https://lexica.art/api/v1/search?q=cyberpunk");
  const data = await response.json();

  return data.images;
};
