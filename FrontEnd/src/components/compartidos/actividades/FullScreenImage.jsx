import React from "react";

const FullScreenImage = ({ imageUrl, handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <button
        className="absolute top-4 right-4 text-white text-xl"
        onClick={handleClose}
      >
        X
      </button>
      <img
        className="max-w-full max-h-full"
        src={imageUrl}
        alt="FullScreenImage"
      />
    </div>
  );
};

export default FullScreenImage;
