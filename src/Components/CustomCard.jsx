import React from "react";
import { motion } from "framer-motion";

const CustomCard = ({
  title = "yeh jawani hai dewani",
  ratings = "4.5 stars",
  onClick = () => {},
}) => {
  return (
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
      <div className="w-full h-full bg-red-50"></div>
      <div className="relative p-4">
        <div className="absolute bottom-10 left-4">
          <p>{title}</p>
          <p>{ratings}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomCard;
