import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Logo from '../../assets/logo.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-[#FFFF] text-slate-800">

            {/* top header */}
            <div className="bg-[#272B36] text-center py-2">
                <p className="text-sm text-white">
                    This is a simple react router practice project with multi-page react application
                </p>
            </div>

            {/* Main header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left Section: Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-10 mr-2"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-orange-500">
                            Home
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            Services <span className="ml-1"></span>
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            About <span className="ml-1"></span>
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            Contact
                        </a>
                    </div>

                    {/* Right Section: Icon (Search only) */}
                    <div className="hidden md:flex items-center space-x-6">
                        <FaSearch className="text-xl cursor-pointer" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-orange-500 focus:outline-none">
                            {isOpen ? <IoClose className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="flex flex-col space-y-2 p-4">
                        <a href="#" className="text-orange-500">
                            Home
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            Services <span className="ml-1"></span>
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            About <span className="ml-1"></span>
                        </a>
                        <a href="#" className="hover:text-orange-500">
                            Contact
                        </a>
                        {/* Right-side icon for mobile */}
                        <div className="flex items-center space-x-6 mt-4">
                            <FaSearch className="text-xl cursor-pointer" />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
