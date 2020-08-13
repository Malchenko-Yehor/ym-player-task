const fetchLocalJSON = async (url) => {
  try {
    const response = await fetch(`./data/${url}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchLocalJSON;
