import { Link } from 'react-router-dom'
import '../../styles/error.css'

function Error () {
    return (
    <div className="ErrorCenter">
        <span className="ErrorNumber">404</span>
        <span className="ErrorText">Oups! La page que vous demandez n'existe pas.</span>
        <Link to="/" className="ErrorRedirect">Retourner sur la page d’accueil</Link>
    </div>)
}

export default Error