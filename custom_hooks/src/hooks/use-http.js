import { useCallback, useState } from "react";

const useHttp = (applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                method: requestConfig.method ?? 'GET',
                headers: requestConfig.headers ?? {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, [applyData]);

    return {
        isLoading,
        error,
        sendRequest
    }
};

export default useHttp;