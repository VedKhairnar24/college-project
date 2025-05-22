
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-institute-blue text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Institute Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hi-Tech Institute of Technology</h3>
            <p className="text-gray-300 mb-2">
              P-119, Bajajnagar, MIDC Waluj, Aurangabad,<br/>
              Maharashtra, India - 431136
            </p>
            <p className="text-gray-300">
              ☎ (0240) 2552240, 2553494, 2553496
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-institute-gold">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-institute-gold">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-institute-gold">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
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
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/30 text-white placeholder:text-gray-300"
                />
              </div>
              <div className="mb-3">
                <textarea 
                  placeholder="Message" 
                  className="w-full px-3 py-2 rounded bg-white/10 border border-white/30 text-white placeholder:text-gray-300"
                  rows={3}
                ></textarea>
              </div>
              <button type="submit" className="bg-white text-institute-blue px-4 py-2 rounded hover:bg-institute-gold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-gray-300">
          <p>Since 2001</p>
          <p className="mt-2">
            Approved by AICTE, DTE Govt. of Maharashtra & Affiliated to Dr. Babasaheb Ambedkar Technological University, Lonere, Raigad
          </p>
          <p className="mt-4">&copy; {new Date().getFullYear()} Hi-Tech Institute of Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
