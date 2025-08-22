import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import GetInTouch from "./GetInTouch";
import FindUs from "./FindUs";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/img_.png")' }}>
      <Header />
      
      <main>
        <GetInTouch />
        <FindUs />
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;