import Axios from "axios";
export const getApiCall = async () => {
    try {
        let postparams = "";
        const { data } = await Axios.get("https://esparkconsultants.com/old/wp-json/wp/v2/posts " + postparams);
        return data;

    } catch (error) {
        console.log("API Error: ", error);
    }
};
export const getCategoriesApiCall = async () => {
    try {
        let categoriesparams = "";
        const { data } = await Axios.get("https://esparkconsultants.com/old/wp-json/wp/v2/categories" + categoriesparams);
        return data;

    } catch (error) {
        console.log("API Error: ", error);
    }
};
export const getTagsApiCall = async () => {
    try {
        let tagsparams = "";
        const { data } = await Axios.get("https://esparkconsultants.com/old/wp-json/wp/v2/tags" + tagsparams);
        return data;

    } catch (error) {
        console.log("API Error: ", error);
    }
};
