export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAIL = "FETCH_CATEGORIES_FAIL",
}

export type CategoryItem = {
  id: string;
  src: string;
  name: string;
  price: number;
  prompt: string;
};

export type Category = CategoryItem & { category: string };

export type CategoryMap = {
  [key: string]: Category[];
};
