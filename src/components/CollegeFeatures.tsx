
import { Book, Building, Computer, Utensils, Bed, Bus } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: 'Central Library',
    icon: Book,
  },
  {
    title: 'Central Workshop',
    icon: Building,
  },
  {
    title: 'Computer Center',
    icon: Computer,
  },
  {
    title: 'Central Canteen',
    icon: Utensils,
  },
  {
    title: 'Hostel',
    icon: Bed,
  },
  {
    title: 'Transportation',
    icon: Bus,
  }
];

const CollegeFeatures = () => {
  return (
    <section id="facilities" className="py-10 sm:py-12 md:py-14 lg:py-16 bg-gray-100">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="section-title">College Features</h2>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className={cn(
                "bg-white rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center card-hover",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 border-2 border-institute-blue">
                <feature.icon size={24} className="text-institute-blue sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-institute-blue text-center">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeFeatures;
