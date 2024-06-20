import { useState, useEffect } from "react";

function useDateAndGreeting() {
  const [dateString, setDateString] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("Good Night");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString(undefined, options);
    setDateString(formattedDate);

    const hours = date.getHours();
    if (hours >= 5 && hours < 12) setGreeting("Good Morning");
    else if (hours >= 12 && hours < 17) setGreeting("Good Afternoon");
    else if (hours >= 17 && hours < 21) setGreeting("Good Evening");
    else setGreeting("Good Night");
  }, []);

  return { dateString, greeting };
}

export default useDateAndGreeting;
