import axios from 'axios';

const fetchApi = async () => {
  const response = await axios(process.env.REACT_APP_API_URL);
  return response.data;
};

export default fetchApi;
