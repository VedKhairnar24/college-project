
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
    <section id="facilities" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">College Features</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className={cn(
                "bg-white rounded-lg p-6 flex flex-col items-center card-hover",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4 border-2 border-institute-blue">
                <feature.icon size={40} className="text-institute-blue" />
              </div>
              <h3 className="text-xl font-medium text-institute-blue">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeFeatures;
