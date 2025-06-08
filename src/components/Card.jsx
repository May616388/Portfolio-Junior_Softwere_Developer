import { motion } from "motion/react";
const Card = ({ style, text, image}) => {
  return image && !text ? (
    <motion.img
      className="w-15"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
    />
  ) : (
    <motion.div
      className="px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem]"
      style={style}
      whileHover={{ scale: 1.05 }}
    >
      {text}
    </motion.div>
  );
};

export default Card;
