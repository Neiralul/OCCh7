import '../../styles/thumb.css'
import Data from "../data/data.json"
import { Link } from 'react-router-dom'

function Thumb() {
    return(
    Data.map( data =>{
        return(<div className="square" key={data.id}>
        <Link to={"/locations/"+data.id} className="locationLinks">
        <img src={data.cover} className="background"/>
        <div className="thumbText">
            {data.title}
        </div>
        </Link>
    </div>)
    })
)}

export default Thumb;