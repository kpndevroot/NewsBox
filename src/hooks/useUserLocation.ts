import { useEffect } from "react";
import useUserStore from "../store/userStore";

const useUserLocation = () => {
  const setLocation = useUserStore((state) => state.setLocation);

  useEffect(() => {
    function handleLocationClick() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          success,
          error // This is the error handling function
        );
      } else {
        console.log("Geolocation not supported");
      }
    }

    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Reverse geocode response:", data);
          setLocation({
            latitude,
            longitude,
            city: data.city,
            country: data.countryName,
          });
        })
        .catch((error) => {
          console.error("Error fetching reverse geocode data:", error);
        });
    }

    function error(error) {
      console.log("Error getting geolocation:", error);
    }

    handleLocationClick();
  }, [setLocation]);

  return null; // or any cleanup function if necessary
};

export default useUserLocation;
