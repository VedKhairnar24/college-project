
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Tab = 'principal' | 'secretary' | 'vision' | 'mission';

const PrincipalMessage = () => {
  const [activeTab, setActiveTab] = useState<Tab>('principal');

  return (
    <section className="container mx-auto py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Principal's Message */}
        <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in">
          <div className="prose max-w-none">
            <p className="text-gray-700">
              It gives me great pleasure in welcoming you to Hi-Tech Institute of Technology (HIT), 
              Aurangabad—an established and leading engineering institute from the Marathwada
              region of Maharashtra State, India. Currently, the institute offers B.E. degree programs of
              the Dr. Babasaheb Ambedkar Marathwada University, Aurangabad, in four disciplines: Civil,
              Computer Science & Engineering, Mechanical.
            </p>
            <button className="primary-button mt-4">
              Read More
            </button>
          </div>
        </div>

        {/* Right Column - News Flow */}
        <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h3 className="text-xl font-bold mb-4 bg-institute-blue text-white p-2 text-center">NEWS FLOW</h3>
          <div className="relative pl-8">
            {/* Timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-institute-blue"></div>

            {/* News Item 1 */}
            <div className="mb-6 relative">
              <div className="absolute left-[-25px] w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
              <a href="#" className="block text-red-500 font-medium hover:underline">Test Link</a>
            </div>

            {/* News Item 2 */}
            <div className="mb-6 relative">
              <div className="absolute left-[-25px] w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
              <a href="#" className="block text-red-500 font-medium hover:underline">MEETING LINK</a>
            </div>

            {/* News Item 3 */}
            <div className="mb-6 relative">
              <div className="absolute left-[-25px] w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
              <div>
                <span className="block text-gray-600">11/12/2024</span>
                <a href="#" className="block text-red-500 font-medium hover:underline">
                  FRA FEES PROPOSAL A.Y. 2025-26 (ENGG. STREAM)
                </a>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="mb-6 relative">
              <div className="absolute left-[-25px] w-5 h-5 rounded-full bg-red-500 border-2 border-white"></div>
              <div>
                <span className="block text-gray-600">22/10/2024</span>
                <a href="#" className="block text-red-500 font-medium hover:underline">
                  First Year Engineering Final Merit List-For Extended Date 22-10-2024
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap mt-8 border-b">
        <button 
          className={cn(
            "py-2 px-4 font-medium", 
            activeTab === 'principal' 
              ? "text-white bg-institute-blue" 
              : "text-institute-blue border border-institute-blue hover:bg-gray-50"
          )}
          onClick={() => setActiveTab('principal')}
        >
          Principal's Message
        </button>
        <button 
          className={cn(
            "py-2 px-4 font-medium", 
            activeTab === 'secretary' 
              ? "text-white bg-institute-blue" 
              : "text-institute-blue border border-institute-blue hover:bg-gray-50"
          )}
          onClick={() => setActiveTab('secretary')}
        >
          Secretary's Desk
        </button>
        <button 
          className={cn(
            "py-2 px-4 font-medium", 
            activeTab === 'vision' 
              ? "text-white bg-institute-blue" 
              : "text-institute-blue border border-institute-blue hover:bg-gray-50"
          )}
          onClick={() => setActiveTab('vision')}
        >
          Vision
        </button>
        <button 
          className={cn(
            "py-2 px-4 font-medium", 
            activeTab === 'mission' 
              ? "text-white bg-institute-blue" 
              : "text-institute-blue border border-institute-blue hover:bg-gray-50"
          )}
          onClick={() => setActiveTab('mission')}
        >
          Mission
        </button>
      </div>
    </section>
  );
};

export default PrincipalMessage;
