import React from "react";
import ProfileCard from "../ProfileCard/ProfileCard";

interface SelectedNewsCardProps {
  title: string;
  authorName: string;
  NewsTime: string;
  image: string;
  date: string;
  content: string;
}

const SelectedNewsCard: React.FC<SelectedNewsCardProps> = ({
  title,
  authorName,
  NewsTime,
  image,
  date,
  content,
}) => {
  // Random news data (for demonstration purposes)
  const randomNews: SelectedNewsCardProps = {
    title: "Breaking News: Lorem Ipsum",
    authorName: "Jane Doe",
    NewsTime: "10:30 AM",
    image: "https://picsum.photos/id/237/600/400",
    date: "June 21, 2024",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac feugiat quam, sed tempus lacus. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac feugiat quam, sed tempus lacus. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac feugiat quam, sed tempus lacus. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac feugiat quam, sed tempus lacus. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac feugiat quam, sed tempus lacus. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac feugiat quam, sed tempus lacus. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac feugiat quam, sed tempus lacus. In hac habitasse platea dictumst.",
  };

  return (
    <div className="flex flex-col w-3/4 h-auto px-3 py-4">
      <div className="w-full p-2 border-2 border-red-500 rounded-lg images">
        <img
          src={image || randomNews.image}
          className="w-full h-full"
          alt={title || randomNews.title}
        />
      </div>
      <div className="headingBox">
        <h2 className="text-3xl font-bold ">{title || randomNews.title}</h2>
      </div>
      <div className="authorBox">
        <ProfileCard
          name={authorName || randomNews.authorName}
          time={NewsTime || randomNews.NewsTime}
        />
      </div>
      <div className="text-justify describeBox">
        <p>{content || randomNews.content}</p>
      </div>
    </div>
  );
};

export default SelectedNewsCard;
