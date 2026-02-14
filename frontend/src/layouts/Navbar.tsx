// ToDo:
// Create a boolean state for isOpen, isScrolled and isDropdown
// handle scroll for glassmorphism effect

import { useEffect, useState } from "react";
import { NavigationLink } from "../types/Navigation";
import { ChevronDown, Home, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);

    // Hanlde scroll for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <header>
            <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 background-blur-md border-b border-gray-100 py-3'
                : 'bg-transparent py-6'
                }`}>
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center ">
                        {/* Logo */}
                        <div className="flex flex-shrink-0 cursor-pointer">
                            <span className="text-2xl font-bold text-orange-500 tracking-tighter">nirvena<span className="text-yellow-500">.</span></span>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-10">
                            <a href="#" className="text-gray-600 hover:text-orange-500 font-semibold transition-colors">Articles</a>

                            {/* DropDown Menu */}
                            <div className="relative group">
                                <button onClick={() => setIsDropdown(!isDropdown)}
                                    className="flex items-center text-gray-600 group-hover:text-orange-500 transition-colors font-semibold">
                                    Who We Help <ChevronDown className={`ml-1 h-4 w-4 transition duration-300 ${isDropdown ? 'rotate-180' : ''}`} />
                                </button>
                                <div className="absolute left-0 mt-4 w-72 bg-white rounded-[2rem] shadow-2xl border border-gray-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-4">
                                    <div className="bg-white rounded-2xl shadow-xl border border-secondary p-2">
                                        {NavigationLink.map((item, id) => (
                                            <a href={item.href} key={id} className="flex items-center p-3 rounded-lg hover:bg-secondary/20 transition-colors">
                                                {item.icon && <item.icon className="h-5 w-5 text-primary mr-3" />}
                                                <span className="text-sm text-primary font-medium">{item.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-primary hover:text-primary font-medium transition-colors">Our Professionals</a>
                        </div>
                        {/* CTA Buttons */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-gray-500 font-bold px-4 hover:text-gray-800">Log In</button>
                            <button className="bg-[#FF7D00] hover:bg-[#e67000] text-white px-8 py-3 rounded-full font-extrabold shadow-md hover:shadow-orange-200 transition-all transform hover:-translate-y-0.5">Book a Session</button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => (setIsOpen(!isOpen))} className="text-primary p-2">
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                        {/* Mobile Menu Overlay */}
                        <div className={`md:hidden fixed inset-0 top-20 z-40 bg-primary-main transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                            }`}>
                            <div className="pt-24 pb-6 px-6 space-y-6">
                                <a href="#" className="flex items-center text-xl text-primary-text"><Home className="h-6 w-6 text-primary mr-4" />What we do</a>
                                <div className="space-y-4">
                                    <p className="text-xs font-bold text-primary/60 uppercase tracking-widest">Who We Help</p>
                                    {NavigationLink.map((item, key) => (
                                        <a key={key} href={item.href} className="flex items-center text-xl text-primary">
                                            {item.icon && <item.icon className="h-6 w-6 text-primary mr-4" />}{item.name}
                                        </a>
                                    ))}
                                </div>
                                <hr className="border-secondary/50" />
                                <div className="flex flex-col space-y-4">
                                    <button className="w-full bg-primary-cta text-white py-4 rounded-2xl font-bold text-xl">Book a Session</button>
                                    <button className="w-full text-primary py-4 font-bold text-xl border-2 border-primary/20 rounded-2xl">Log In</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;