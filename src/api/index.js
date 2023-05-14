const fetchApi = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL).then((res) => res.text());
  return response;
};

export default fetchApi;
