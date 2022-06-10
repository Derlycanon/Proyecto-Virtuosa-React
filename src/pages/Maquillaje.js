import Header from '../components/header/header';
import Home from '../components/home/home';
import Slide from '../components/bodymkppal/App';
import Modals from './subMaquillaje/Modals';
import Footer from '../components/footer/footer';


function Maquillaje() {
    return(
        <div>
            <Header />
            <Home />
            <Slide />
            <Modals />
            <Footer />
        </div>
    )
}

export default Maquillaje;