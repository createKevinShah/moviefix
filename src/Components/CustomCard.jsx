import React from "react";
import { motion } from "framer-motion";

const CustomCard = ({
  title,
  image,
  description,
  ratings,
  onClick = () => {},
}) => {
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        className="bg-white w-[317px] h-[317px] rounded-2xl overflow-hidden relative"
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
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
      <div className="mt-3 w-[317px]">
        <div className="">
          <p className="text-white font-semibold text-base max-w-[90%] truncate">
            {title}
          </p>
          <p className="text-white font-medium text-base">{ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
