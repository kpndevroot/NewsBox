import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface WeatherState {
  timezone: string;
  sunrise: number;
  sunset: number;
  temp: number;
  pressure: number;
  humidity: number;
  windspeed: number;
  mainInfo: string;
  description: string;
  getData: () => void;
  updateData: (newData: Partial<WeatherState>) => void;
}

const useWeatherStore = create<WeatherState>()(
  devtools(
    persist(
      (set) => ({
        timezone: "",
        sunrise: 0,
        sunset: 0,
        temp: 0,
        pressure: 0,
        humidity: 0,
        windspeed: 0,
        mainInfo: "",
        description: "",
        getData: () => {
          const storedData = JSON.parse(
            localStorage.getItem("weather-storage") || "{}"
          );
          set(storedData);
        },
        updateData: (newData) => set((state) => ({ ...state, ...newData })),
      }),
      {
        name: "weather-storage", // Name of the item in the storage
        getStorage: () => localStorage,
      }
    )
  )
);

export default useWeatherStore;
