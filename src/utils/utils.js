import Axios from "axios";
export const getOpeningJobs = async () => {
  try {
    const { data } = await Axios.get(
      "https://esparkconsultants.com/old/wp-json/wp/v2/jober"
    );
    return data;
  } catch (error) {
    console.log("Data not Found: ", error);
  }
};

export const getSingleOpeningJobs = async (id) => {
  try {
    const { data } = await Axios.get(
      `https://esparkconsultants.com/old/wp-json/wp/v2/jober/${id}`
    );
    return data;
  } catch (error) {
    console.log("Data not Found: ", error);
  }
};

export const optionData = (data) => {
  const jobCategory = data.map((item) => {
    return item.acf.job_category;
  });
  const jobType = data.map((item) => {
    return item.acf.job_type;
  });
  const jobLocation = data.map((item) => {
    return item.acf.job_location;
  });

  const getMergeArrayCat = mergeArray(jobCategory);
  const getMergeArrayType = mergeArray(jobType);
  const getMergeArrayLoc = mergeArray(jobLocation);

  const OptionDataObject = {
    category: getMergeArrayCat,
    type: getMergeArrayType,
    location: getMergeArrayLoc,
  };

  return OptionDataObject;
};

const mergeArray = (jobCategory) => {
  const arrays = jobCategory;
  const finalArray = arrays.flat(1);

  let s = new Set(finalArray);
  let it = s.values();
  return Array.from(it);
};
