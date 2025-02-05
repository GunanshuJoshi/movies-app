import React from "react";

const HeroCard = ({ randowImages }) => {

  const url1 = `https://image.tmdb.org/t/p/w500/${randowImages[0]}`;
  const url2 = `https://image.tmdb.org/t/p/w500/${randowImages[1]}`;
  const url3 = `https://image.tmdb.org/t/p/w500/${randowImages[2]}`;
  return (
    <div className="flex items-center justify-center p-4 sm:p-8 w-full max-w-2xl mx-auto">
      <div className="relative flex items-center justify-center gap-2 sm:gap-4">
        <div className="absolute w-full h-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-xl rounded-full" />
        <img
          className="w-24 sm:w-32 md:w-40 -rotate-12 mt-4 sm:mt-8 transition-transform hover:scale-110 hover:-rotate-6"
          src={url1 ? url1 : "/not-found.webp"}
          alt="Left image"
        />
        <img
          className="w-24 sm:w-32 md:w-40 z-10 scale-110 transition-transform hover:scale-125"
          src={url2 ? url2 : "/not-found.webp"}
          alt="Center image"
        />
        <img
          className="w-24 sm:w-32 md:w-40 rotate-12 mt-4 sm:mt-8 transition-transform hover:scale-110 hover:rotate-6"
          src={url3 ? url3 : "/not-found.webp"}
          alt="Right image"
        />
      </div>
    </div>
  );
};

export default HeroCard;
