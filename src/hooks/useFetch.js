import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState();

  useEffect(() => {
    const fetchDataHandler = async () => {
      setisLoading(true);
      try {
        const response = await axios.get(
          `https://api.currencyfreaks.com/latest?apikey=${process.env.REACT_APP_API_KEY}`
        );
        setData(response.data.rates);
        setisLoading(false);
      } catch (error) {
        setisLoading(false);
      }
    };
    fetchDataHandler();
  }, []);

  return { data, isLoading };
};
