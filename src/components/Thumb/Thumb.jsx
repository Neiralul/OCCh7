import '../../styles/thumb.css'
import Data from "../data/data.json"
import { Link } from 'react-router-dom'

function Thumb() {
    return(
    Data.map( data =>{
        const bgImage = {
            backgroundImage: `url(${data.cover})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100%'
        }
        return(
        <div className="square" key={data.id}>
            <Link to={"/locations/"+data.id} className="locationLinks" >
            <div className="background" style={bgImage}>
                <div className="thumbText">{data.title}</div>
            </div>
            </Link>
        </div>
        )
    })
)}

export default Thumb;