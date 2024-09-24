import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CiCircleChevRight } from "react-icons/ci";
import Img1 from '../../../assets/HeroCarousel/img-1.jpg';
import Img2 from '../../../assets/HeroCarousel/img-2.jpg';
import Img3 from '../../../assets/HeroCarousel/img-3.jpg';


const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, amount: 0.5 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [end, duration, inView]);

    return <span ref={nodeRef}>{count}+</span>;
};

const HeroAboutUs = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 py-8 sm:py-12"
        >
            <motion.div variants={itemVariants} className="mb-8">
                <span className="text-orange-500 font-semibold text-sm sm:text-base">ABOUT US</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4">We Bringing A Change In The Textile</h2>
                <p className="text-gray-600 text-sm sm:text-base">
                    Textiles are materials made from fibers or yarn, and they are used to create widetst range of products such as clothing and industrial goods.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                    <div className="flex items-start mb-6">
                        <div className="bg-orange-100 p-2 sm:p-3 rounded-full mr-4 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Textiles Materials</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Textile services refer to businesses that provide various textile-related services as laundering washed with water.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="bg-orange-100 p-2 sm:p-3 rounded-full mr-4 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">Create Your Design</h3>
                            <p className="text-gray-600 text-sm sm:text-base">Dry Cleaning Services: Dry cleaning services use specialized solvents to clean textiles washed with water.</p>
                        </div>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white mt-8 sm:mt-10 font-bold py-2 px-4 rounded flex items-center text-sm sm:text-base"
                    >
                        READ MORE
                        <CiCircleChevRight className="ml-2" />
                    </motion.button>
                </motion.div>


                <motion.div variants={itemVariants} className="relative mt-8 md:mt-0">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        <img src={Img2} alt="Textile 2" className="rounded-lg mt-4 sm:mt-8 w-full h-[200px]" />
                        <img src={Img3} alt="Textile 3" className="rounded-lg w-full h-auto" />
                        <img src={Img3} alt="Textile 6" className="rounded-lg w-full h-auto" />
                        <img src={Img1} alt="Textile 4" className="rounded-lg w-full h-auto" />
                        <img src={Img2} alt="Textile 5" className="rounded-lg mt-4 sm:mt-8 w-full h-auto" />
                        <img src={Img1} alt="Textile 1" className="rounded-lg w-full h-auto" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F5F5F5] rounded-sm p-4 sm:p-6 md:p-8 shadow-lg">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">
                            <CountUp end={26} />
                        </span>
                        <p className="text-center mt-1 sm:mt-2 text-xs sm:text-sm">Year Experience Working</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HeroAboutUs;