import { useEffect, useState } from "react";
import { fetchData } from "../utils/ApiHelper";

const useFetch = (url, limit) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetchData(url);
        setData(response);
        if (response && Array.isArray(response)) {
          setData(response);
        } else if (response && response.data && Array.isArray(response.data)) {
          setData(response.data);
        }
      } catch (err) {
        setError(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [url, limit]);

  return { data, loading, error };
};

export default useFetch;
