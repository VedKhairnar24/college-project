
import Header from '@/components/Header';
import PrincipalMessage from '@/components/PrincipalMessage';
import CollegeFeatures from '@/components/CollegeFeatures';
import Courses from '@/components/Courses';
import Partners from '@/components/Partners';
import AboutContact from '@/components/AboutContact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PrincipalMessage />
        <CollegeFeatures />
        <Courses />
        <Partners />
        <AboutContact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
