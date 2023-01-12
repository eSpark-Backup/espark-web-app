import Axios from "axios";
export const getApiCall = async () => {
    try {
        const { data } = await Axios.get("https://esparkconsultants.com/old/wp-json/wp/v2/posts");
        return data;

    } catch (error) {
        console.log("API Error: ", error);
    }
};
