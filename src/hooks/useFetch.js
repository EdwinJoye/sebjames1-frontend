import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(process.env.REACT_APP_API_URL + url, {
        headers: {
          Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
        },
      });
      setData(response.data.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return { data, loading, error };
};
export default useFetch;
