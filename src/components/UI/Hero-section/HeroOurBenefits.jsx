import React from 'react';
import { motion } from 'framer-motion';

const HeroOurBenefits = () => {
    return (
        <div className="bg-gray-900 text-white">
            {/* Content */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-36 py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-lg mx-auto lg:mx-0"
                    >
                        <p className="text-orange-500 font-semibold mb-2 text-sm sm:text-base">OUR BENEFITS</p>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">From Handcrafted Textiles To Mass</h1>
                        <p className="mb-6 text-sm sm:text-base">Textiles are materials made from fibers or Fabrication services provide both sewn and organizations with custom-designed and they are used to create whatever they are used.</p>
                        <motion.button
                            className="bg-orange-500 text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            READ MORE →
                        </motion.button>
                    </motion.div>

                    {/* Right column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6 mt-8 lg:mt-0"
                    >
                        {/* Fabric Treatment */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Fabric Treatment</h3>
                            <ul className="space-y-1 text-sm sm:text-base">
                                <li>✓ Fabric products and Accessories</li>
                                <li>✓ Textiles Trends and Forecasts</li>
                                <li>✓ such as organic using recycled</li>
                                <li>✓ services use solvents clean</li>
                            </ul>
                        </div>

                        {/* Rapid Productions */}
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Rapid Productions</h3>
                            <ul className="space-y-1 text-sm sm:text-base">
                                <li>✓ Fabric products and Accessories</li>
                                <li>✓ Textiles Trends and Forecasts</li>
                                <li>✓ such as organic using recycled</li>
                                <li>✓ services use solvents clean</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroOurBenefits;