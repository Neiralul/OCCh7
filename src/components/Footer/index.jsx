import '../../styles/footer.css'
import KasaLogo from '../../images/logoBot.svg';

function Footer() {
    return (<div className='kasabot'>
        <img src={KasaLogo} alt="logo Kasa" className='botLogo'/>
        <span className='kasabot-text'> © 2020 Kasa. All rights reserved </span>
    </div>)
}

export default Footer