import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface ProfileCardProps {
  nameTextSize?: string;
  timeTextSize?: string;
  name?: string;
  width?: string;
  publishedAt?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  nameTextSize = "12px",
  timeTextSize = "10px",
  name = "Name",
  publishedAt,
  width,
  // publishedAt = "2024-06-20T04:02:00Z",
}) => {
  // Function to convert ISO 8601 date string to Date object
  const parseISODate = (isoDateString: string): Date => {
    return new Date(isoDateString);
  };

  // Function to convert time difference to human-readable format
  const getTimeAgoString = (publishedAt: string): string => {
    const currentDate = new Date();
    const datePublished = parseISODate(publishedAt);

    // Calculate time difference in milliseconds
    const timeDifference = currentDate.getTime() - datePublished.getTime();

    // Convert milliseconds to seconds
    const seconds = Math.floor(timeDifference / 1000);

    // Calculate different time units
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hr${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} sec${seconds !== 1 ? "s" : ""} ago`;
    }
  };
  const truncateName = (name: string): string => {
    if (name?.length > 10) {
      return name.substring(name.length - 10) + "...";
    }
    return name;
  };

  // Render component
  return (
    <div
      className={`flex items-center gap-2 px-4 py-3 bg-white border-2 border-blue-500 rounded-lg shadow-md max-w-96 w-${
        width ? width : ""
      }`}
    >
      <div className="p-2 text-white bg-blue-500 rounded-full">
        <UserCircleIcon className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <p className={`text-sm text-gray-800  truncate text-justify`}>
          {truncateName(name)}
        </p>
        <p className={`text-xs text-gray-600`}>
          {publishedAt ? getTimeAgoString(publishedAt) : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
