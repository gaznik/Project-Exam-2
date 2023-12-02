import { accessToken } from '../../utils/localStorage';
import { useState, useEffect } from 'react';

function useDataRetrieval(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [throwError, setThrowError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setThrowError(false);

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`
                    },
                    body: JSON.stringify()
                });

                const result = await response.json();

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
