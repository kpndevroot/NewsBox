import { useQuery } from "@tanstack/react-query";
import useUserStore from "../store/userStore";
import { WeatherData, WeatherInfo } from "../types/weather";
import { REACT_APP_OPENWEATHER_API_KEY } from "../../config";
import axios from "axios";

const fetchWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherData> => {
  const apiKey = REACT_APP_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    console.log({ doc: response.data });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Network response was not ok");
  }
};

const useFetchWeather = () => {
  const location = useUserStore((state) => state.location);
  const setWeather = useUserStore((state) => state.setWeather);

  const {
    isPending: weatherLoading,
    error: weatherError,
    data: weatherData,
  } = useQuery({
    queryKey: ["regions", location?.latitude, location?.longitude],
    queryFn: (data) =>
      fetchWeather(location!.latitude, location!.longitude).then((data) => {
        setWeather({
          timezone: data.timezone,
          status: data.main.feels_like,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          maininfo: data.weather[0].main,
          description: data.weather[0].description,
        });
        return data;
      }),
  });
  console.log({ weatherData: weatherData });
  console.log(weatherError);
  return { weatherData, weatherError, weatherLoading };
};
export default useFetchWeather;
