
const AboutContact = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About & Map */}
          <div>
            <h2 className="text-2xl font-bold text-institute-blue mb-6">About us</h2>
            <div className="mb-6">
              <h3 className="text-xl font-medium text-institute-blue mb-2">Hi-Tech Institute of Technology</h3>
              <p className="text-gray-700">
                P-119, Bajajnagar, MIDC Waluj, Aurangabad, Maharashtra, India - 431136<br />
                ☎ (0240) 2552240, 2553494, 2553496
              </p>
            </div>
            
            {/* Google Map */}
            <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2123178247186!2d75.2004893!3d19.8621602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDUxJzQzLjgiTiA3NcKwMTInMDEuNiJF!5e0!3m2!1sen!2sin!4v1622018752072!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Hi-Tech Institute of Technology location"
              ></iframe>
            </div>
          </div>
          
          {/* Right Column - Quick Links & College Cells */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-institute-blue mb-4">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">AICTE</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">DTE</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Fees Regulating Authority</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Dr. B.A.T.U Lonere</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Dr. B.A.M.U A'Bad</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Government Of Maharashtra</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Scholarship</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Mandatory Disclosure</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Board of Governors</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">AICTE Feedback</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">ICT Initiatives of MHRD</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">NIRF</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">National Digital Library(NDL)</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Delnet</a></li>
              </ul>
            </div>
            
            {/* College Cells */}
            <div>
              <h3 className="text-xl font-bold text-institute-blue mb-4">COLLEGE CELLS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Women Grievance Cell</a></li>
                <li><a href="#" className="text-institute-blue hover:text-institute-gold transition-colors">Grievance Cell</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
