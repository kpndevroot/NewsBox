import { useQuery } from "@tanstack/react-query";
import useNewsStore from "../store/newsStore";
import React from "react";
import { REACT_APP_NEWS_API_KEY } from "../../config";

const fetchNews = async ({ queryKey }) => {
  const [, { date, searchQuery, language, category, country }] = queryKey;
  console.log({ MYDATE: date });
  const apiKey = REACT_APP_NEWS_API_KEY;
  if (!apiKey) {
    throw new Error("News API key is not defined in environment variables.");
  }

  const url = new URL("https://newsapi.org/v2/top-headlines");
  url.searchParams.append("language", language);
  url.searchParams.append("country", country);
  url.searchParams.append("apiKey", apiKey);

  // Optional parameters based on filters
  if (date) url.searchParams.append("from", date);
  if (searchQuery) url.searchParams.append("q", searchQuery);
  if (category !== "all") url.searchParams.append("category", category);

  const response = await fetch(url.toString());
  console.log({ REQURL: url });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useFetchNews = () => {
  const { filters, setFilters, setArticles } = useNewsStore();

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
      setArticles(newsArticleData.articles);
    }
  }, [newsArticleData, setArticles]);

  const resetFilters = () => {
    setFilters({
      searchQuery: "",
      category: "all",
      date: "", // Ensure date is reset to an empty string
      language: "en",
      country: "us",
    });
  };

  // Handle date change and refetch news
  const handleDateChange = (newDate) => {
    console.log({ handleChangeDate: newDate });
    setFilters({
      ...filters,
      date: newDate, // Format date as yyyy-MM-dd
    });
  };

  return {
    newsLoading,
    newsError,
    newsArticleData,
    refetchNews,
    resetFilters,
    handleDateChange,
  };
};

export default useFetchNews;
