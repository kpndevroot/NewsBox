import React from "react";
import viteLogo from "/vite.svg";

interface ProfileCardProps {
  nameTextSize?: string;
  timeTextSize?: string;
  name?: string;
  time?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  nameTextSize = "12px",
  timeTextSize = "10px",
  name = "Name",
  time = "1 hr ago",
}) => {
  return (
    <div className="flex items-center justify-start w-auto gap-2 px-4 py-3 bg-white border-2 border-red-500 w-max-96">
      <div className="p-3 bg-green-400 rounded-full dpBox">
        <img src={viteLogo} className="w-4 logo" alt="Vite logo" />
      </div>
      <div className="aboutBox">
        <p className={`text-[${nameTextSize}] text-gray-600`}>{name}</p>
        <p className={`text-[${timeTextSize}] text-gray-500`}>{time}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
