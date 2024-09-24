import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedNavLink from "./AnimatedNavLinks";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <header className="bg-[#FFFF] text-slate-800">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#272B36] text-center py-2"
            >
                <p className="text-sm text-white">
                    This is a simple react router practice project with multi-page react application
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        className="flex-shrink-0 flex items-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-orange-500 uppercase font-extrabold underline">Thread</p>
                    </motion.div>

                    <nav className="hidden md:flex space-x-6">
                        <AnimatedNavLink to='/'>Home</AnimatedNavLink>
                        <AnimatedNavLink to='/services'>Services</AnimatedNavLink>
                        <AnimatedNavLink to='/about'>About</AnimatedNavLink>
                        <AnimatedNavLink to='/contact'>Contact</AnimatedNavLink>
                    </nav>

                    <motion.div
                        className="hidden md:flex items-center space-x-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaSearch className="text-xl cursor-pointer" />
                        </motion.div>
                    </motion.div>

                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="text-orange-500 focus:outline-none"
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={isOpen ? "close" : "open"}
                                    initial={{ opacity: 0, rotate: -180 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isOpen ? <IoClose className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-white border-t"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col space-y-2 p-4">
                            <AnimatedNavLink to='/'>Home</AnimatedNavLink>
                            <AnimatedNavLink to='/services'>Services</AnimatedNavLink>
                            <AnimatedNavLink to='/about'>About</AnimatedNavLink>
                            <AnimatedNavLink to='/contact'>Contact</AnimatedNavLink>
                            <motion.div
                                className="flex items-center space-x-6 mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                <FaSearch className="text-xl cursor-pointer" />
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;