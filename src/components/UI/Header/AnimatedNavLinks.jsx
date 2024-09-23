import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const AnimatedNavLink = ({ to, children }) => {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <motion.div
                    className={`${isActive ? 'text-orange-500' : 'hover:text-orange-500'} relative`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {children}
                    {isActive && (
                        <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500"
                            layoutId="underline"
                        />
                    )}
                </motion.div>
            )}
        </NavLink>
    );
};



export default AnimatedNavLink;