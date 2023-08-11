import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';

const About = () => {
    return (
        <div>
            <Navbar currentPage='about'/>
            <AboutContent />
            <Footer />
        </div>
    )
}

export default About;