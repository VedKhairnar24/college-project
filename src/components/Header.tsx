
import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Separator } from '@/components/ui/separator';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdowns, setActiveDropdowns] = useState<Record<string, boolean>>({});

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

  const toggleMobileDropdown = (key: string) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Navigation content organized by dropdown
  const navigationData = {
    about: {
      title: "About",
      items: [
        { label: "Principal's Message", href: "#principal" },
        { label: "Secretary's Message", href: "#secretary" },
        { label: "Governance", href: "#governance" }
      ]
    },
    department: {
      title: "Department",
      items: [
        { label: "First Year Department", href: "#first-year" },
        { label: "Civil Engineering Department", href: "#civil" },
        { label: "Mechanical Engineering Department", href: "#mechanical" },
        { label: "Computer Science Department", href: "#cs" },
        { label: "AIML", href: "#aiml" }
      ]
    },
    facilities: {
      title: "Facilities",
      items: [
        { label: "Central Library", href: "#library" },
        { label: "Central Workshop", href: "#workshop" },
        { label: "Computer Center", href: "#computer-center" },
        { label: "Central Canteen", href: "#canteen" },
        { label: "Hostel", href: "#hostel" },
        { label: "Transportation", href: "#transportation" }
      ]
    },
    cells: {
      title: "College Cells",
      items: [
        { label: "Anti-Ragging Cell", href: "#anti-ragging" },
        { label: "Grievance Redressal Cell", href: "#grievance" },
        { label: "Women Grievance Cell", href: "#women-grievance" },
        { label: "Internal Complaint Cell", href: "#complaint" },
        { label: "SC/ST Cell", href: "#scst" },
        { label: "Online Grievance Form", href: "#grievance-form" },
        { label: "BC", href: "#bc" },
        { label: "IC", href: "#ic" }
      ]
    },
    naac: {
      title: "NAAC",
      items: [
        { label: "IQAC", href: "#iqac" },
        { label: "SSR", href: "#ssr" },
        { label: "NAAC Peer Visit", href: "#peer-visit" },
        { label: "IIQA", href: "#iiqa" },
        { label: "DWV", href: "#dwv" }
      ]
    },
    downloads: {
      title: "Downloads",
      items: [
        { label: "Academic Calendar", href: "#calendar" },
        { label: "AQAR", href: "#aqar" },
        { label: "EOAS", href: "#eoas" },
        { label: "Project List", href: "#projects" },
        { label: "Best Practices", href: "#practices" },
        { label: "Distinctiveness", href: "#distinctiveness" }
      ]
    }
  };

  // Simple menu items that don't have dropdowns
  const simpleMenuItems = [
    { label: "Home", href: "#" },
    { label: "Admission", href: "#admission" },
    { label: "Gallery", href: "#gallery" },
    { label: "T & P Cell", href: "#tnp" },
    { label: "NIRF", href: "#nirf" },
    { label: "Alumni", href: "#alumni" },
    { label: "Contact", href: "#contact" }
  ];

  // Navigation menu content for desktop
  const renderDesktopNavItem = (key: string, data: typeof navigationData.about) => (
    <NavigationMenuItem key={key}>
      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-institute-gold text-institute-blue font-medium text-sm xl:text-base">
        {data.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="bg-white rounded-md shadow-md p-2 min-w-[200px]">
        <ul className="grid gap-1">
          {data.items.map((item, index) => (
            <li key={`${key}-${index}`}>
              <NavigationMenuLink asChild>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm rounded-md hover:bg-[#E0F2FE] hover:text-institute-gold transition-colors duration-200"
                >
                  {item.label}
                </a>
              </NavigationMenuLink>
              {index < data.items.length - 1 && <Separator className="my-1" />}
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );

  // Simple menu item for desktop
  const renderDesktopSimpleItem = (item: { label: string, href: string }, index: number) => (
    <NavigationMenuItem key={`simple-${index}`}>
      <NavigationMenuLink asChild>
        <a href={item.href} className="font-medium text-institute-blue hover:text-institute-gold transition-colors duration-200 text-sm xl:text-base">
          {item.label}
        </a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );

  // Dropdown menu for mobile
  const renderMobileDropdown = (key: string, data: typeof navigationData.about) => (
    <li key={key} className="border-b border-gray-100">
      <button
        className="flex justify-between items-center w-full py-2 text-institute-blue"
        onClick={() => toggleMobileDropdown(key)}
        aria-expanded={activeDropdowns[key]}
      >
        {data.title}
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-200",
            activeDropdowns[key] ? "rotate-180" : ""
          )}
        />
      </button>
      {activeDropdowns[key] && (
        <ul className="pl-4 py-1 space-y-1 bg-gray-50 rounded-md mb-2">
          {data.items.map((item, idx) => (
            <li key={`mobile-${key}-${idx}`}>
              <a
                href={item.href}
                className="block py-1.5 text-sm text-institute-blue hover:text-institute-gold transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

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

          {/* Desktop Navigation with dropdown menus */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-3 xl:space-x-5">
              {/* Simple menu items */}
              {simpleMenuItems.slice(0, 2).map(renderDesktopSimpleItem)}

              {/* Dropdown menu items */}
              {renderDesktopNavItem("about", navigationData.about)}
              {renderDesktopNavItem("department", navigationData.department)}
              {renderDesktopNavItem("facilities", navigationData.facilities)}
              {renderDesktopNavItem("cells", navigationData.cells)}
              {renderDesktopNavItem("naac", navigationData.naac)}
              
              {/* Rest of simple menu items */}
              {simpleMenuItems.slice(2, 5).map(renderDesktopSimpleItem)}
              
              {renderDesktopNavItem("downloads", navigationData.downloads)}
              
              {/* Last simple menu items */}
              {simpleMenuItems.slice(5).map(renderDesktopSimpleItem)}
            </NavigationMenuList>
          </NavigationMenu>

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
              {/* Simple menu items */}
              {simpleMenuItems.slice(0, 2).map((item, idx) => (
                <li key={`mobile-simple-${idx}`}>
                  <a href={item.href} className="block py-2 text-institute-blue hover:text-institute-gold">
                    {item.label}
                  </a>
                </li>
              ))}

              {/* Dropdown menu items */}
              {renderMobileDropdown("about", navigationData.about)}
              {renderMobileDropdown("department", navigationData.department)}
              {renderMobileDropdown("facilities", navigationData.facilities)}
              {renderMobileDropdown("cells", navigationData.cells)}
              {renderMobileDropdown("naac", navigationData.naac)}
              
              {/* Rest of simple menu items */}
              {simpleMenuItems.slice(2, 5).map((item, idx) => (
                <li key={`mobile-simple-mid-${idx}`}>
                  <a href={item.href} className="block py-2 text-institute-blue hover:text-institute-gold">
                    {item.label}
                  </a>
                </li>
              ))}
              
              {renderMobileDropdown("downloads", navigationData.downloads)}
              
              {/* Last simple menu items */}
              {simpleMenuItems.slice(5).map((item, idx) => (
                <li key={`mobile-simple-end-${idx}`}>
                  <a href={item.href} className="block py-2 text-institute-blue hover:text-institute-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
