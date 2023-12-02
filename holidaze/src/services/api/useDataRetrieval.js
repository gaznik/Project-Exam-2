import apiRequest from './apiRequest';
import { useEffect, useState } from 'react';

function useDataRetrieval(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [throwError, setThrowError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setThrowError(false);

                const result = await apiRequest(url, 'GET');
                setData(result);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setThrowError(true);
                console.log(error);
            }
        }
        fetchData();
    }, [url]);

    return { data, loading, throwError };
}

export default useDataRetrieval;
