import React from 'react';
import { motion } from 'framer-motion';

function HeroContactUs() {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-orange-500 font-semibold text-sm sm:text-base uppercase tracking-wide"
                >
                    our services
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Explore The Role Of Textiles
                </motion.h2>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden">
                <div className="p-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold text-gray-900 mb-6"
                    >
                        Have Questions? Get In Touch!
                    </motion.h2>
                    <form>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mb-4"
                        >
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-4"
                        >
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none"
                            >
                                <option value="">Service 1</option>
                                <option value="service2">Service 2</option>
                                <option value="service3">Service 3</option>
                            </select>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-6"
                        >
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            ></textarea>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <button
                                type="submit"
                                className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                            >
                                SUBMIT
                            </button>
                        </motion.div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default HeroContactUs;