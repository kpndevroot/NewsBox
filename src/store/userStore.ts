// src/store/userStore.ts
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface WeatherData {
  timezone: string;
  sunrise: number;
  sunset: number;
  temp: number;
  pressure: number;
  humidity: number;
  windspeed: number;
  maininfo: string;
  description: string;
  status: number;
}

interface UserLocation {
  latitude: number;
  longitude: number;
  city: string;
  country: string;
}

interface UserPreferences {
  favCategories: string[];
  favLanguages: string[];
}

interface UserState {
  weather: WeatherData | null;
  location: UserLocation | null;
  preferences: UserPreferences;
  setWeather: (weather: WeatherData) => void;
  setLocation: (location: UserLocation) => void;
  setPreferences: (preferences: UserPreferences) => void;
}

const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        weather: null,
        location: null,
        preferences: {
          favCategories: [],
          favLanguages: [],
        },
        setWeather: (weather) => set({ weather }),
        setLocation: (location) => set({ location }),
        setPreferences: (preferences) => set({ preferences }),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

export default useUserStore;
