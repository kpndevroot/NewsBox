// src/App.tsx
import React, { useEffect, useState } from "react";
import { CategoriesSelector, NewsCard, SelectedNewsCard } from "./components";
import useUserLocation from "./hooks/useUserLocation";
import useNewsStore from "./store/newsStore";
import "./App.css";
import { Navbar, WeatherGroup, ProfileCard, Footer } from "./components";
import useFetchNews from "./hooks/useFetchNews";
const App = () => {
  const { filters, setFilters, articles } = useNewsStore();
  const { category } = filters;
  const { newsLoading, newsError, newsArticleData, refetchNews } =
    useFetchNews();
  const [selectedArticle, setSelectedArticle] = useState(0); // Initialize with null

  useEffect(() => {
    console.log({ articles: articles }); // Corrected placement of useEffect's console.log
    setSelectedArticle(articles[0]);
  }, [category, articles]); // Corrected placement of dependency array

  useUserLocation(); // Assuming this hook is for fetching user location

  const handleArticleSelect = (index) => {
    setSelectedArticle(articles[index]);
  };

  if (newsLoading) return <div>Loading...</div>;
  if (newsError) return <div>Error: {newsError.message}</div>;

  return (
    <>
      <Navbar />
      <CategoriesSelector />
      <div className="flex flex-row w-screen gap-4">
        <div className="flex flex-col w-1/2 gap-4 md:w-3/4 bg-slate-50">
          {selectedArticle && <SelectedNewsCard {...selectedArticle} />}
        </div>
        <div className="flex flex-col w-1/2 gap-4 md:w-1/4">
          {articles?.map((article, index) => (
            <NewsCard
              key={index}
              heading={article.title}
              authorName={article.author}
              authorTime={article.publishedAt}
              image={article.urlToImage || ""}
              onClick={() => {
                alert("Clicked on article: " + article.title);
                handleArticleSelect(index);
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
