import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

interface NewsCardProps {
  heading: string;
  authorName?: string;
  authorTime?: string;
  urlToImage?: string;
  onClick: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({
  heading = "New heading is there",
  authorName = "Unknown Author",
  authorTime = "Time not available",
  urlToImage,
  onClick,
}) => {
  return (
    <div
      className="flex w-full overflow-hidden bg-white border-2 rounded-lg shadow-md "
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative w-1/3 h-auto">
        <div className="w-full h-full p-2">
          <img
            src={urlToImage}
            className="object-cover w-full h-full rounded-lg"
            alt="image"
          />
        </div>
      </div>

      {/* Text and Profile Section */}
      <div className="flex flex-col w-2/3 p-4">
        {/* Heading Section */}
        <div className="mb-4">
          <h4 className="font-bold text-left text-gray-700 text-md">
            {heading}
          </h4>
        </div>

        {/* Profile Card Section */}
        <div className="mt-auto">
          <ProfileCard name={authorName} publishedAt={authorTime} />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
