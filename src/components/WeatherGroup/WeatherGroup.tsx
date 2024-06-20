import React from "react";
import DateWidget from "../DateWidget/DateWidget";
import StatusWidget from "../Weather/StatusWidget";
import StatWidget from "../Weather/StatWidget";
import AlertWidget from "../Weather/AlertWidget";
import useFetchWeather from "../../hooks/useFetchWeather";
import useUserStore from "../../store/userStore";

function WeatherGroup() {
  const { weatherData, weatherError, weatherLoading } = useFetchWeather();
  const { location, weather } = useUserStore();
  if (weatherError) return <div>Errors: {weatherError.message}</div>;
  if (weatherLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-row justify-between flex-grow widgetGroup">
      <DateWidget />
      {weatherError ? null : (
        <>
          <StatusWidget
            status={weather?.status}
            temperature={weather?.temp}
            description={weather?.description}
          />
          <StatWidget
            wind={weather?.windspeed}
            humidity={weather?.humidity}
            pressure={weather?.pressure}
          />
          {/* <AlertWidget /> */}
        </>
      )}
    </div>
  );
}

export default WeatherGroup;
