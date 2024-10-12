import { useEffect, useState } from 'react';

export default function useJsonFetch(url, isEdit = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`${response.url} ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

    }, [url, isEdit]);

    return [data, loading, error];
}