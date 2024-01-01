import Axios from "axios";
export const getOpeningJobs = async () => {
  try {
    const data = await Axios.get(
      "https://hasnitube.com/old/wp-json/wp/v2/jober"
    );
    if(typeof data?.data === 'string'){
      return [];
    }
    else{
      return data?.data;
    }
  } catch (error) {
    console.log("Data not Found: ", error);
  }
};

export const getSingleOpeningJobs = async (id) => {
  try {
    const { data } = await Axios.get(
      `https://hasnitube.com/old/wp-json/wp/v2/jober/${id}`
    );
    return data;
  } catch (error) {
    console.log("Data not Found: ", error);
  }
};

export const optionData = (data) => {
  const jobCategory = data?.map((item) => {
    if (item?.acf?.job_category && item.acf.job_category.length > 0) {
      return item.acf.job_category[0];
    }
    return null; // Return null for undefined or empty job_category
  }).filter(category => category !== null); 
  const jobType = data?.map((item) => {
    return item?.acf?.job_type;
  });
  const jobLocation = data?.map((item) => {
    if(item?.acf){
      return item?.acf?.job_location[0];
    }
    // return jobLocation;
  });

  const getMergeArrayCat = mergeArray(jobCategory);
  const getMergeArrayType = mergeArray(jobType);
  const getMergeArrayLoc = mergeArray(jobLocation);

  const OptionDataObject = {
    category: [...getMergeArrayCat, "All"].sort(),
    type: [...getMergeArrayType].splice(1, 2).sort(),
    location: [...getMergeArrayLoc].sort(),
  };
  return OptionDataObject;
};

const mergeArray = (jobCategory) => {
  const arrays = jobCategory;
  const finalArray = arrays?.flat(1);
  let s = new Set(finalArray);
  let it = s.values();
  return Array.from(it);
};
