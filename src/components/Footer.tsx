
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-institute-blue text-white">
      <div className="container mx-auto py-8 sm:py-10 md:py-12 px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Institute Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Hi-Tech Institute of Technology</h3>
            <p className="text-gray-300 mb-2 text-xs sm:text-sm md:text-base">
              P-119, Bajajnagar, MIDC Waluj, Aurangabad,<br/>
              Maharashtra, India - 431136
            </p>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
              ☎ (0240) 2552240, 2553494, 2553496
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
              <a href="#" className="text-white hover:text-institute-gold">
                <Facebook size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-white hover:text-institute-gold">
                <Twitter size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
              <a href="#" className="text-white hover:text-institute-gold">
                <Linkedin size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
              <a href="#" className="hover:text-institute-gold transition-colors">Home</a>
              <a href="#" className="hover:text-institute-gold transition-colors">About</a>
              <a href="#" className="hover:text-institute-gold transition-colors">Admission</a>
              <a href="#" className="hover:text-institute-gold transition-colors">Departments</a>
              <a href="#" className="hover:text-institute-gold transition-colors">Facilities</a>
              <a href="#" className="hover:text-institute-gold transition-colors">NAAC</a>
              <a href="#" className="hover:text-institute-gold transition-colors">T&P Cell</a>
              <a href="#" className="hover:text-institute-gold transition-colors">Contact</a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <form>
              <div className="mb-2 sm:mb-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm bg-white/10 border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <div className="mb-2 sm:mb-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm bg-white/10 border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <div className="mb-2 sm:mb-3">
                <textarea 
                  placeholder="Message" 
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm bg-white/10 border border-white/30 text-white placeholder:text-gray-300"
                  rows={3}
                ></textarea>
              </div>
              <button type="submit" className="bg-white text-institute-blue px-3 sm:px-4 py-1.5 sm:py-2 rounded hover:bg-institute-gold transition-colors text-xs sm:text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20 text-center text-xs sm:text-sm text-gray-300">
          <p>Since 2001</p>
          <p className="mt-1 sm:mt-2">
            Approved by AICTE, DTE Govt. of Maharashtra & Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad
          </p>
          <p className="mt-3 sm:mt-4">&copy; {new Date().getFullYear()} Hi-Tech Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
