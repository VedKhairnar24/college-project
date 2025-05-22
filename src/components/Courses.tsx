
const courses = [
  {
    title: 'Civil Engineering',
    icon: '/engineering-civil.png',
  },
  {
    title: 'Mechanical Engineering',
    icon: '/engineering-mechanical.png',
  },
  {
    title: 'Computer Science & Engineering',
    icon: '/engineering-cse.png',
  },
  {
    title: 'Computer Science and Engineering (AI & ML)',
    icon: '/engineering-ai.png',
  }
];

const Courses = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={course.title}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:border-institute-blue hover:shadow-lg transition-all duration-200 flex items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mr-4 flex-shrink-0 bg-gray-100 rounded-full flex items-center justify-center">
                <img 
                  src={course.icon || "https://placehold.co/100x100/1E3A8A/FFFFFF?text=Icon"}
                  alt={`${course.title} icon`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-institute-blue">{course.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
