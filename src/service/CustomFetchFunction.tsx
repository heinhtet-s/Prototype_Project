import { useState, useEffect } from "react";
import axios from "axios";
interface FetchResult<T> {
  data: T | [];
  error: string | null;
  isLoading: boolean;
}
export default function useFetch<T>(
  url: string,
  depen: any[] = []
): FetchResult<T> {
  const [data, setData] = useState<T | []>([]);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { VITE_APP_DOMAIN } = import.meta.env;
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${VITE_APP_DOMAIN}${url}`);

        setData(response.data);
      } catch {
        setError("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      setData([]);
    };
  }, [...depen]);

  return { data, error, isLoading };
}
