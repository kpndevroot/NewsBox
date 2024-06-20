import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

interface SelectedNewsCardProps {
  title: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  date: string;
  content: string;
  description;
}

const SelectedNewsCard: React.FC<SelectedNewsCardProps> = ({
  title,
  author,
  publishedAt,
  urlToImage,
  date,
  description,
  content,
}) => {
  return (
    <div className="flex flex-col px-3 py-4 md:w-3/4">
      <div className="w-full p-2 border-2 border-red-500 rounded-lg images">
        <img src={urlToImage} className="w-full h-full" alt={title} />
      </div>
      <div className="headingBox">
        <h2 className="text-3xl font-bold text-red-500">{title}</h2>
      </div>
      <div className="authorBox">
        <ProfileCard name={author} time={publishedAt} />
      </div>
      <div className="text-justify describeBox">
        <p className="text-gray-600"> {description}</p>
      </div>
      <br />
      <div className="text-justify describeBox">
        <p className="text-gray-600"> {content}</p>
      </div>
    </div>
  );
};

export default SelectedNewsCard;
