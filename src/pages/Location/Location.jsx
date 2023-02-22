import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Collapsible from '../../components/Collapsible/Collapsible'
import Carousel from '../../components/Carrousel/Carrousel'
import redStar from '../../images/redStar.svg'
import greyStar from '../../images/greyStar.svg'
import { useParams } from "react-router-dom"
import Data from "../../components/data/data.json"
import '../../styles/location.css'

function Location() {
    const currentId = useParams('id').id;
    const currentLocation = Data.filter(data => data.id === currentId);
    const navigate = useNavigate()
    useEffect(() =>{
        if(currentLocation.length === 0) {
            return(
                navigate("/page-introuvable")
            )
        }
    })
    if (currentLocation.length !==0) {
    return (
        Appartement()
    )
    }
}

export function Appartement() {
    const currentId = useParams('id').id;
    const currentLocation = Data.filter(data => data.id === currentId);
    const [Slides, setSlides] = useState([]);
    useEffect(() => {
        const currentLocation = Data.filter(data => data.id === currentId);
        setSlides(currentLocation[0].pictures);
    }, [currentId])

    return(
    <div className="LocationPage">
        <Carousel Slides={Slides}/>
        <div className="LocationMiddle">
            <div className="LocationInfo Part" >
                <span className="LocationTitle">{currentLocation[0].title}</span>
                <span>{currentLocation[0].location}</span>
            </div>
            <div className="LocationOwner Part">
                <span className="OwnerName">{currentLocation[0].host.name}</span>
                <img src={currentLocation[0].host.picture} className="OwnerPicture" alt={currentLocation[0].host.name}/>
            </div>
            <div className="LocationTags Part">
                {currentLocation[0].tags.map((tag, index) => {
                    return (<span className="Tags" key={index}>{tag}</span>)
                    }
                )}
            </div>
            <div className="LocationRating Part">
                {[...Array(5)].map((rating, index) => {
                    const ratingValue = currentLocation[0].rating;
                    return (
                        <img key={index} src={ratingValue <= currentLocation[0].rating ? redStar : greyStar} alt="étoile" className="rating"/>
                    )
                })}
            </div>
        </div>
        <div className="LocationBot">
            <div className="LocationCollapses">
                <Collapsible label="Description">
                    {currentLocation[0].description}
                </Collapsible>
            </div>
            <div className="LocationCollapses">
                <Collapsible label="Equipements">
                    {currentLocation[0].equipments.map((equipment, index) => {
                        return (<span className="Equipments" key={index}>{equipment}</span>)
                    })}
                </Collapsible>
            </div>
        </div>
    </div>
    )
                }
export default Location;