import React from 'react';
import { motion } from 'framer-motion';
import { CiCircleChevRight } from "react-icons/ci";

const services = [
    {
        title: 'Fabric Products And Accessories',
        description: 'Textiles are materials made from fibers or yarns, and may range of products range',
        icon: '🧵'
    },
    {
        title: 'Innovations In Textile Technology Smart',
        description: 'The textile industry is a major global Technology with rapid taking place',
        icon: '🔬'
    },
    {
        title: 'Sustainable Production Textile Balancing',
        description: 'Laundering services can be provided types commercial test alterations provide',
        icon: '♻️'
    },
    {
        title: 'Extiles And Culture Exploring Role Textiles',
        description: 'Textile production can have both positive and negative impacts environment',
        icon: '🏛️'
    },
    {
        title: 'The Future Of Textiles Trends And Forecasts',
        description: 'In addition to clothing and household items textiles are used other applications',
        icon: '🔮'
    }
];

const ServiceCard = ({ title, description, icon, index }) => (
    <motion.div
        className="bg-white p-6 border border-gray-200 flex flex-col items-center text-center hover:bg-orange-500 hover:text-white group transition-colors duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 group-hover:text-white">{description}</p>
    </motion.div>
);

const ServicesSection = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Provide Best Solution Take Look
                    </h2>
                    <p className="mt-2 text-xl text-gray-600">
                        Into Our Best Services
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
                <div className="text-center mt-12">
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
            </div>
        </div>
    );
};

export default ServicesSection;