import React from 'react';
import { motion } from 'framer-motion';
import { VscCloseAll } from 'react-icons/vsc';

const CustomAlert = ({ message, onClose }) => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 bg-gray-900 border border-gray-700 text-white p-4 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-[90%] sm:w-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-start">
        <p className="font-mono text-sm sm:text-lg whitespace-normal break-words flex-1">
          {message}
        </p>
        <VscCloseAll
          onClick={onClose}
          className="text-cyan-500 cursor-pointer text-xl sm:text-2xl hover:text-cyan-400 transition-transform transform hover:scale-105 ml-4"
        />
      </div>
    </motion.div>
  );
};

export default CustomAlert;
