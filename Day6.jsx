import React from "react";

// Reusable component with props
const ProfileCard = ({ name, role, bio, image }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform">
      {/* Profile Image */}
      <img
        className="w-24 h-24 mx-auto rounded-full border-4 border-teal-400"
        src={image}
        alt={name}
      />

      {/* Name and Role */}
      <h2 className="text-xl font-bold mt-4 text-gray-800">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>

      {/* Bio */}
      <p className="mt-3 text-gray-600">{bio}</p>

      {/* Action Button */}
      <button className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
        Connect
      </button>
    </div>
  );
};

export default ProfileCard;
