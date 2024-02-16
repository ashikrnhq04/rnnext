import { useState, useEffect, useCallback } from "react";

export default function useNewsQuery(query) {
  let URL = `${import.meta.env.VITE_DATA_FETCH_URL}${
    query.type === "query" && query.term != ""
      ? "?category=" + query.term.trim()
      : ""
  }`;

  if (query.type === "search" && query.term.trim() != "") {
    URL = `${import.meta.env.VITE_DATA_SEARCH_URL}${query.term}`;
  }

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState({
    status: true,
    message: "",
  });
  const [error, setError] = useState("");

  const fetchNews = useCallback(async (endPoint) => {
    try {
      setLoading((load) => ({
        ...load,
        status: true,
        message: "Fetching News...",
      }));

      const response = await fetch(endPoint);

      if (!response.ok) {
        throw new Error(
          `Error fetching news data. Response code : ${response.status}`
        );
      }
      const data = await response.json();
      setNews(data.articles || data.result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading((load) => ({
        ...load,
        status: false,
        message: "",
      }));
    }
  }, []);

  useEffect(() => {
    fetchNews(URL);
  }, [URL, fetchNews]);

  return [news, error, loading];
}
