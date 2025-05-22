
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
          <div className="flex gap-2 text-sm">
            <span>☎ (0240) 2552240</span>
          </div>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-institute-gold">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-institute-gold">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-white hover:text-institute-gold">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Banner with Institute Title */}
      <div className="relative bg-institute-blue h-[200px] md:h-[250px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-institute-blue bg-opacity-70"></div>
          <img 
            src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
            alt="Institute Building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto z-10 text-center px-4">
          <div className="flex items-center justify-center mb-2">
            <img 
              src="https://placehold.co/100x100/1E3A8A/FFFFFF?text=BGPS" 
              alt="Institute Logo" 
              className="h-16 w-16 mr-4"
            />
          </div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
            Bhartiya Gramin Punarrachna Sanstha's<br />
            <span className="text-2xl md:text-3xl lg:text-4xl">Hi-Tech Institute of Technology, Aurangabad</span>
          </h1>
          <p className="text-sm md:text-base text-white mt-2">A Pioneer to shape global Technocrats</p>
          <p className="text-xs md:text-sm text-white/80 mt-1">
            (Approved by AICTE, DTE Govt. of Maharashtra & Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad)
          </p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav 
        className={cn(
          "w-full py-2 bg-white shadow-md transition-all duration-300 z-20",
          isSticky ? "fixed top-0 left-0" : ""
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {isSticky && (
            <div className="flex items-center">
              <img 
                src="https://placehold.co/50x50/1E3A8A/FFFFFF?text=BGPS" 
                alt="Institute Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="font-bold text-institute-blue text-sm md:text-base">Hi-Tech Institute</span>
            </div>
          )}

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6">
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
            className="lg:hidden text-institute-blue p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t mt-2">
            <ul className="container mx-auto flex flex-col space-y-2 p-4">
              <li><a href="#" className="block py-2 text-institute-blue link-hover">Home</a></li>
              <li><a href="#about" className="block py-2 text-institute-blue link-hover">About</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">Admission</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">Department</a></li>
              <li><a href="#facilities" className="block py-2 text-institute-blue link-hover">Facilities</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">College Cells</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">NAAC</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">Gallery</a></li>
              <li><a href="#tnp" className="block py-2 text-institute-blue link-hover">T & P Cell</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">Downloads</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">NIRF</a></li>
              <li><a href="#" className="block py-2 text-institute-blue link-hover">Alumni</a></li>
              <li><a href="#contact" className="block py-2 text-institute-blue link-hover">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
