import { Link } from 'react-router-dom'
import '../../styles/header.css'
import KasaLogo from '../../images/logoTop.svg';

function Header() {
    return (<div className='kasatop'>
        <img src={KasaLogo} alt="logo Kasa" className='topLogo'/>
        <nav className='kasanav'>
            <Link to="/" className='kasanav-home'>Accueil</Link>
            <Link to="/about" className='kasanav-about'>A propos</Link>
        </nav>
    </div>)
}

export default Header