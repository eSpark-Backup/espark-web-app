import Axios from "axios";
export const getApiCall = async (page) => {
  try {
    const pageCount = page ? page : 1
    const { data, headers } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/posts?per_page=15&page=${pageCount}`
    );
    return { data: data, headers: headers };
  } catch (error) {
    console.log("API Error: ", error);
  }
};
export const getCategoriesApiCall = async () => {
  try {
    const { data } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/categories`
    );
    return data;
  } catch (error) {
    console.log("API Error: ", error);
  }
};
export const getTagsApiCall = async () => {
  try {
    const { data } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/tags`
    );
    return data;
  } catch (error) {
    console.log("API Error: ", error);
  }
};

export const getCatApiCall = async (id) => {
  try {
    const { data, headers } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/posts?categories=${id}`
    );
    return { data: data, headers: headers };
  } catch (error) {
    console.log("API Error: ", error);
  }
};
