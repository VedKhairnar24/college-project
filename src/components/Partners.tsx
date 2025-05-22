
const partners = [
  {
    name: 'Persistent',
    logo: 'https://placehold.co/200x80/ffffff/1E3A8A?text=Persistent'
  },
  {
    name: 'Quick Heal',
    logo: 'https://placehold.co/200x80/ffffff/1E3A8A?text=QuickHeal'
  },
  {
    name: 'Bentley',
    logo: 'https://placehold.co/200x80/ffffff/1E3A8A?text=Bentley'
  },
  {
    name: 'Winjit',
    logo: 'https://placehold.co/200x80/ffffff/1E3A8A?text=Winjit'
  },
  {
    name: 'Techno Vision',
    logo: 'https://placehold.co/200x80/ffffff/1E3A8A?text=TechnoVision'
  }
];

const Partners = () => {
  return (
    <section id="tnp" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our T&P Partners</h2>
        
        <div className="mt-8 overflow-hidden">
          <div className="flex space-x-8 animate-carousel">
            {partners.concat(partners).map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`} 
                className="flex-shrink-0 bg-white p-4 rounded-lg shadow-sm"
              >
                <img 
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
