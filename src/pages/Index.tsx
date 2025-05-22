
import Header from '@/components/Header';
import PrincipalMessage from '@/components/PrincipalMessage';
import CollegeFeatures from '@/components/CollegeFeatures';
import Courses from '@/components/Courses';
import Events from '@/components/Events';
import Partners from '@/components/Partners';
import AboutContact from '@/components/AboutContact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PrincipalMessage />
        <CollegeFeatures />
        <Courses />
        <Events />
        <Partners />
        <AboutContact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
