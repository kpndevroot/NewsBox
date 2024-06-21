import React, { useEffect, useState } from "react";
import {
  CategoriesSelector,
  NewsCard,
  SelectedNewsCard,
  Navbar,
  WeatherGroup,
  Footer,
} from "./components";
import useUserLocation from "./hooks/useUserLocation";
import useNewsStore from "./store/newsStore";
import useFetchNews from "./hooks/useFetchNews";
import "./App.css";

const App = () => {
  const { filters, articles } = useNewsStore();
  const { newsLoading, newsError, refetchNews } = useFetchNews();
  const [selectedArticle, setSelectedArticle] = useState(articles[0] || null);

  useEffect(() => {
    refetchNews();
  }, [filters, refetchNews]);

  useUserLocation();

  const handleArticleSelect = (index) => {
    setSelectedArticle(articles[index]);
  };

  // Display up to 5 articles
  if (newsLoading) return <div>Loading...</div>;
  if (newsError) return <div>Error: {newsError.message}</div>;

  return (
    <>
      <Navbar />
      <CategoriesSelector />
      <WeatherGroup />
      <div className="flex flex-row w-full gap-4 px-2 py-2 mx-auto overflow-x-hidden max-w-full-lg">
        <div className="flex flex-col w-full gap-2 md:w-2/3">
          {selectedArticle && <SelectedNewsCard {...selectedArticle} />}
        </div>
        <div className="flex flex-col w-full md:w-1/3 max-h-[calc(100vh+230px)] overflow-y-auto">
          <div className="sticky top-16">
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                urlToImage={article.urlToImage || ""}
                heading={article.title}
                authorName={article.author}
                authorTime={article.publishedAt}
                image={article.urlToImage || ""}
                onClick={() => handleArticleSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
