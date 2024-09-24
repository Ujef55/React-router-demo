import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import Img1 from '../../../assets/HeroCarousel/img-1.jpg';
import Img2 from '../../../assets/HeroCarousel/img-2.jpg';
import Img3 from '../../../assets/HeroCarousel/img-3.jpg';

const HerocarouselContent = [
    {
        welcome: "Welcome to Thread",
        title: "We have a great time during the process as well",
        image: Img1
    },
    {
        welcome: "Discover Innovation",
        title: "Bringing Ideas to Life Through Technology",
        image: Img2
    },
    {
        welcome: "Join Our Journey",
        title: "Creating the Future, One Project at a Time",
        image: Img3
    }
];

const Herocarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HerocarouselContent.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + HerocarouselContent.length) % HerocarouselContent.length);
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex}
                    src={HerocarouselContent[currentIndex].image}
                    alt={HerocarouselContent[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 bg-black bg-opacity-50" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <motion.span
                    key={`welcome-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-orange-500 uppercase tracking-wider mb-2 text-sm sm:text-base"
                >
                    {HerocarouselContent[currentIndex].welcome}
                </motion.span>
                <motion.h1
                    key={`title-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
                >
                    {HerocarouselContent[currentIndex].title}
                </motion.h1>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded inline-flex items-center text-sm sm:text-base"
                >
                    READ MORE
                    <CiCircleChevRight className="ml-2" />
                </motion.button>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-20"
                aria-label="Previous slide"
            >
                <CiCircleChevLeft size={24} className="sm:w-8 sm:h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors z-20"
                aria-label="Next slide"
            >
                <CiCircleChevRight size={24} className="sm:w-8 sm:h-8" />
            </button>
        </div>
    );
};

export default Herocarousel;