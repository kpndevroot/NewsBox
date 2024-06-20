import React from "react";
import viteLogo from "/vite.svg";
import ProfileCard from "../ProfileCard/ProfileCard";

interface NewsCardProps {
  heading: string;
  authorName?: string;
  authorTime?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  heading = "new heading is there",
  authorName = "Unknown Author",
  authorTime = "Time not available",
}) => {
  return (
    <div className="flex w-1/4 gap-2 border-2 border-red-500 h-1/5 bg-slate-700">
      <div className="w-1/4 h-full ">
        <div className="w-full h-auto p-2 rounded-lg imageBox">
          <img src={viteLogo} className="w-full h-full logo" alt="Vite logo" />
        </div>
      </div>
      <div className="flex flex-col w-3/4 gap-1 right">
        <div className="headBox">
          <h3 className="font-bold text-left text-md">{heading}</h3>
        </div>
        <ProfileCard name={authorName} time={authorTime} />
      </div>
    </div>
  );
};

export default NewsCard;
