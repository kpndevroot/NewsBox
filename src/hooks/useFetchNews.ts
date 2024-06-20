import { useQuery } from "@tanstack/react-query";
import useNewsStore from "../store/newsStore";
import React from "react";
import { REACT_APP_NEWS_API_KEY } from "../../config";
const fetchNews = async ({ queryKey }) => {
  const [, { date, searchQuery, language, category, country }] = queryKey;

  const apiKey = REACT_APP_NEWS_API_KEY;
  if (!apiKey) {
    throw new Error("News API key is not defined in environment variables.");
  }

  const url = new URL("https://newsapi.org/v2/top-headlines");
  if (date) url.searchParams.append("from", date);
  if (searchQuery) url.searchParams.append("q", searchQuery);
  url.searchParams.append("language", language);
  url.searchParams.append("category", category);
  url.searchParams.append("country", country);
  url.searchParams.append("apiKey", apiKey);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useFetchNews = () => {
  const { filters, setArticles } = useNewsStore();

  const {
    isLoading: newsLoading,
    isError: newsError,
    data: newsArticleData,
    refetch: refetchNews,
  } = useQuery({
    queryKey: ["news", filters],
    queryFn: fetchNews,
  });

  // Update articles whenever newsArticleData changes
  React.useEffect(() => {
    if (newsArticleData) {
      console.log({ T: newsArticleData.articles });
      setArticles(newsArticleData.articles);
    }
  }, [newsArticleData, setArticles]);

  return { newsLoading, newsError, newsArticleData, refetchNews };
};

export default useFetchNews;
