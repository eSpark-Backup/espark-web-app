import Axios from "axios";
export const getOpeningJobs = async () => {
  try {
    const { data } = await Axios.get(
      "https://esparkconsultants.com/old/wp-json/wp/v2/awsm_job_openings"
    );
    return data;
  } catch (error) {
    console.log("Data not Found: ", error);
  }
};

export const getSingleOpeningJobs = async (id) => {
  try {
    const { data } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/awsm_job_openings/${id}`
    );
    return data;
  } catch (error) {
    console.log("Data not Found: ", error);
  }
};
