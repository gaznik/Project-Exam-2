import { useState, useEffect } from "react";

function useUpdateVenue(url, options) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        setThrowError(false);

        const response = await fetch(url, options);
        const result = await response.json();

        setData(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setThrowError(true);
        console.log(error);
      }
    }

    getData();
  }, [url, options]);

  return { data, loading, throwError };
}

export default useUpdateVenue;
