// src/store/newsStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Article {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface Filters {
  date: string;
  searchQuery: string;
  language: string;
  category: string;
  country: string;
}

interface NewsState {
  articles: Article[];
  filters: Filters;
  setArticles: (articles: Article[]) => void;
  setFilters: (filters: Partial<Filters>) => void;
}

const useNewsStore = create<NewsState>()(
  devtools(
    persist(
      (set) => ({
        articles: [],
        filters: {
          date: "",
          searchQuery: "",
          language: "en",
          category: "general",
          country: "us",
        },
        setArticles: (articles) => set({ articles }),
        setFilters: (filters) =>
          set((state) => ({
            filters: { ...state.filters, ...filters },
          })),
      }),
      {
        name: "news-storage",
        getStorage: () => localStorage,
      }
    )
  )
);

export default useNewsStore;
