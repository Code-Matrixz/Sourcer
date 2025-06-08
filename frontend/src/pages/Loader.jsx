import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="bg-gray-700 text-white flex justify-center justify-items-center h-screen">
            <div className="mt-50">
                <div>
                    <motion.svg animate={{x: [0,75,-75,0]}} transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}} width="200" height="200">
                        <circle cx="100" cy="187" r="8" stroke="white" stroke-width="2" fill="white" />
                    </motion.svg>
                </div>
                <svg className="w-40 h-1 ml-4" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="white" stroke-width="10"/>
                </svg>
                <div>
                    <h1 className="text-3xl font-bold text-white flex justify-center">Sourcer</h1>
                </div>
            </div>
        </div>
    )
}

export default Loader;