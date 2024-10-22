import { ApiGet } from "../api/Api";

export const fetchData = async (url) => {
  try {
    const response = await ApiGet(url);
    return response.data;
  } catch (error) {
    return null;
  }
};


