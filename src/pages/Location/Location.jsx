import Collapsible from '../../components/Collapsible/Collapsible'
import Data from "../../components/data/data.json"
import '../../styles/location.css'

function Location() {
    return(
    <div className="LocationPage">
        <div className="Carrousel">
            Image Ici
        </div>
        <div className="LocationMiddle">
        <div className="LocationInfo Part" >
        <h3>Nom Location</h3>
        Lieu location
        </div>
        <div className="LocationOwner Part">
            Nom bailleur 
            Img
        </div>
        <div className="LocationDescription Part">
            Description
        </div>
        <div className="LocationRating Part">
            Rating
        </div>
        </div>
        <div className="LocationBot">
            <div className="LocationCollapses">
            <Collapsible label="Description">
            </Collapsible>
            </div>
            <div className="LocationCollapses">
            <Collapsible label="Equipements">
            </Collapsible>
            </div>
        </div>
    </div>
)}

export default Location;