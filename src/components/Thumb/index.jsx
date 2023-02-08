import '../../styles/thumb.css'
import Data from "../data/data.json"

function Thumb() {
    return(
    Data.map( data =>{
        return(<div className="square" key={data.id}>
        <img src={data.cover} className="background"/>
        <div className="thumbText">
            {data.title}
        </div>
    </div>)
    })
)}

export default Thumb;