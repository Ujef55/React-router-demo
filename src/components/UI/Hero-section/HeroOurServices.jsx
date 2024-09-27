import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Img1 from '../../../assets/HeroCarousel/img-1.jpg';
import Img2 from '../../../assets/HeroCarousel/img-2.jpg';
import Img3 from '../../../assets/HeroCarousel/img-3.jpg';
import ServicesSection from './ServicesSection';

const services = [
    { id: 'fabric-dyeing', title: 'Fabric Dyeing', content: 'Textiles that cannot resist dyer or washed with water. These serve typically used wide range of products for delicate', image: Img1 },
    { id: 'digital-printing', title: 'Digital Printing', content: 'Digital printing is a method where digital-based images are printed directly onto a variety of mediums, including textile materials.', image: Img2 },
    { id: 'satin-weaving', title: 'Satin Weaving', content: 'Satin is a type of weave that produces a smooth, lustrous surface. It is commonly used in clothing, home furnishings, and industrial applications.', image: Img3 },
    { id: 'fabric-treatment', title: 'Fabric Treatme', content: 'Fabric treatment is the process of applying various chemicals to fabrics to enhance their physical and chemical properties.', image: Img1 },
];

const HeroOurServices = () => {
    const [activeService, setActiveService] = useState(services[0]);

    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
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
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto"
                    >
                        Textiles are materials made from fibers or yarn, and they are used to create a wide range of products such as clothing and industrial goods.
                    </motion.p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="col-span-2">
                        <motion.div
                            layout
                            className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md mx-auto"
                        >
                            <motion.img
                                key={activeService.image}
                                src={activeService.image}
                                alt={activeService.title}
                                className="w-full h-48 object-cover"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className="p-4">
                                <motion.h3
                                    layout="position"
                                    className="text-xl font-bold text-gray-900 mb-2"
                                >
                                    {activeService.title}
                                </motion.h3>
                                <motion.p
                                    layout="position"
                                    className="text-sm text-gray-600 mb-4"
                                >
                                    {activeService.content}
                                </motion.p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-orange-500 font-medium"
                                >
                                    Read more
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>

                    <div className='mt-8'>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <button
                                        onClick={() => setActiveService(service)}
                                        className={`w-full text-[30px] text-left py-2 transition-colors ${activeService.id === service.id
                                            ? 'text-orange-500 font-medium'
                                            : 'text-gray-700 hover:text-orange-500'
                                            }`}
                                    >
                                        {service.title}
                                    </button>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <ServicesSection />
        </div>
    );
};

export default HeroOurServices;