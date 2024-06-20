import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  AlertWidget,
  CategoriesSelector,
  DateWidget,
  Footer,
  Nav,
  Navbar,
  NavbarThird,
  NewsCard,
  ProfileCard,
  SelectedNewsCard,
  StatWidget,
  StatusWidget,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <CategoriesSelector />

      <div className="flex flex-row justify-between flex-grow widgetGroup">
        <DateWidget />
        <StatusWidget />
        <StatWidget />
        <AlertWidget />
      </div>
      <ProfileCard />
      <SelectedNewsCard />
      <NewsCard />
      <Footer />
      {/* <h1 className="text-3xl font-bold text-red-400 underline">Newsbox</h1> */}
    </>
  );
}

export default App;
