import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import About from "./About";
import OwnedBy from "./OwnedBy";
import Vision from "./Vision";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/img_.png")' }}>
      <Header />
      
      <main className="pb-12 sm:pb-28">
        <About />
        <Vision />
        <OwnedBy />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;