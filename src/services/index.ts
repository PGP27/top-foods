import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export const searchFoodByName = (name: string): Promise<AxiosResponse<any>> => {
  return api.get(`search.php?s=${name}`);
};

export const foodDetailsById = (id: number): Promise<AxiosResponse<any>> => {
  return api.get(`lookup.php?i=${id}`);
};

export const foodCategories = (): Promise<AxiosResponse<any>> => {
  return api.get('categories.php');
};

export const foodAreas = (): Promise<AxiosResponse<any>> => {
  return api.get('list.php?a=list');
};

export const filterFoodByCategory = (category: string): Promise<AxiosResponse<any>> => {
  return api.get(`filter.php?c=${category}`);
};

export const filterFoodByArea = (category: string): Promise<AxiosResponse<any>> => {
  return api.get(`filter.php?a=${category}`);
};
