import React from "react";
import { motion } from "framer-motion";

const CustomCard = ({ title, image, ratings, onClick = () => {} }) => {
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        className="bg-white w-[90vw] md:w-[330px] h-[500px] md:h-[490px] rounded-2xl overflow-hidden relative"
        style={{
          boxShadow: "4px 4px 8px -2px rgba(16, 24, 40, 0.08)",
        }}
        role="button"
        onClick={onClick}
      >
        <div className="w-full h-full">
          <img
            src={`${process.env.REACT_APP_POSTER_URL}${image}`}
            alt={title}
            className="w-full h--full object-cover"
          />
        </div>
      </motion.div>
      <div className="mt-3 w-[90vw] md:w-[330px]">
        <div className="">
          <p className="text-white font-semibold text-base max-w-[90%] truncate">
            {title}
          </p>
          <div className="flex items-center gap-x-2">
            <img src="/ratings.svg" className="w-5 h-5" alt="ratings" />
            <p className="text-white font-medium text-base">
              {ratings.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
