import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

interface SelectedNewsCardProps {
  title: string;
  author: string;
  publishedAt: string;
  urlToImage: string;
  description: string;
  content: string;
}

const SelectedNewsCard: React.FC<SelectedNewsCardProps> = ({
  title,
  author,
  publishedAt,
  urlToImage,
  description,
  content,
}) => {
  return (
    <div className="flex flex-col w-full h-auto px-4 py-6 mx-auto bg-white rounded-lg shadow-lg md:flex-col ">
      {/* Image Section */}
      <div className="w-full md:w-full">
        <img
          src={urlToImage}
          className="object-cover w-full h-64 rounded-lg md:h-full"
          alt={title}
        />
      </div>

      {/* Content Section */}
      <div className="w-full mt-4 md:w-full md:ml-0 md:mt-4">
        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
          {title}
        </h2>

        {/* Author and Published Date */}
        <div className="flex items-center mb-4">
          <ProfileCard width={"full"} name={author} publishedAt={publishedAt} />
        </div>

        {/* Description */}
        <p className="mb-4 text-justify text-gray-600 ">{description}</p>

        {/* Content */}
        <div className="text-justify text-gray-800">{content}</div>
      </div>
    </div>
  );
};

export default SelectedNewsCard;
