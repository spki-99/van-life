import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeContent from '../components/HomeContent';

const Home = () => {
    return (
        <div>
            <Navbar currentPage='home'/>
            <HomeContent />
            <Footer />
        </div>
    )
}

export default Home;