
import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative">
      {/* Top Contact Bar */}
      <div className="bg-black text-white p-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-2 text-xs sm:text-sm">
            <span>☎ (0240) 2552240</span>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-institute-gold">
              <Facebook size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-institute-gold">
              <Twitter size={14} className="sm:w-4 sm:h-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-institute-gold">
              <Linkedin size={14} className="sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Banner with Institute Title */}
      <div className="relative bg-institute-blue h-[150px] sm:h-[180px] md:h-[220px] lg:h-[250px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-institute-blue bg-opacity-70"></div>
          <img 
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
            alt="Institute Building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto z-10 text-center px-2 sm:px-4">
          <div className="flex items-center justify-center mb-1 sm:mb-2">
            <img 
              src="https://placehold.co/100x100/1E3A8A/FFFFFF?text=BGPS" 
              alt="Institute Logo" 
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 mr-2 sm:mr-3 md:mr-4"
            />
          </div>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight">
            Bhartiya Gramin Punarrachna Sanstha's<br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Hi-Tech Institute of Technology, Aurangabad</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white mt-1 sm:mt-2">A Pioneer to shape global Technocrats</p>
          <p className="text-[8px] xs:text-[10px] sm:text-xs md:text-sm text-white/80 mt-1">
            (Approved by AICTE, DTE Govt. of Maharashtra & Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad)
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav 
        className={cn(
          "w-full py-1 sm:py-2 bg-white shadow-md transition-all duration-300 z-20",
          isSticky ? "fixed top-0 left-0" : ""
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-2 sm:px-4">
          {isSticky && (
            <div className="flex items-center">
              <img 
                src="https://placehold.co/50x50/1E3A8A/FFFFFF?text=BGPS" 
                alt="Institute Logo" 
                className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 mr-1 sm:mr-2"
              />
              <span className="font-bold text-institute-blue text-xs sm:text-sm md:text-base">Hi-Tech Institute</span>
            </div>
          )}

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-3 xl:space-x-6 text-sm xl:text-base">
            <li><a href="#" className="font-medium text-institute-blue link-hover">Home</a></li>
            <li><a href="#about" className="font-medium text-institute-blue link-hover">About</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">Admission</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">Department</a></li>
            <li><a href="#facilities" className="font-medium text-institute-blue link-hover">Facilities</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">College Cells</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">NAAC</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">Gallery</a></li>
            <li><a href="#tnp" className="font-medium text-institute-blue link-hover">T & P Cell</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">Downloads</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">NIRF</a></li>
            <li><a href="#" className="font-medium text-institute-blue link-hover">Alumni</a></li>
            <li><a href="#contact" className="font-medium text-institute-blue link-hover">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-institute-blue p-1 sm:p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-1 sm:mt-2">
            <ul className="container mx-auto flex flex-col space-y-1 sm:space-y-2 p-2 sm:p-4 text-sm">
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">Home</a></li>
              <li><a href="#about" className="block py-1 sm:py-2 text-institute-blue link-hover">About</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">Admission</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">Department</a></li>
              <li><a href="#facilities" className="block py-1 sm:py-2 text-institute-blue link-hover">Facilities</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">College Cells</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">NAAC</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">Gallery</a></li>
              <li><a href="#tnp" className="block py-1 sm:py-2 text-institute-blue link-hover">T & P Cell</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">Downloads</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">NIRF</a></li>
              <li><a href="#" className="block py-1 sm:py-2 text-institute-blue link-hover">Alumni</a></li>
              <li><a href="#contact" className="block py-1 sm:py-2 text-institute-blue link-hover">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
