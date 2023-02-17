import React, { useState, useEffect } from "react";
import Collapsible from '../../components/Collapsible/Collapsible'
import Carousel from '../../components/Carrousel/Carrousel'
import { useParams } from "react-router-dom"
import Data from "../../components/data/data.json"
import '../../styles/location.css'

function Location() {
    const currentId = useParams('id').id;
    const currentLocation = Data.filter(data => data.id === currentId);
    const [Slides, setSlides] = useState([]);
    useEffect(() => {
        const currentLocation = Data.filter(data => data.id === currentId);
        setSlides(currentLocation[0].pictures);
    })
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
            <img src={currentLocation[0].host.picture} className="OwnerPicture"/>
        </div>
        <div className="LocationTags Part">
            {currentLocation[0].tags.map((tag, index) => {
                return (<span className="Tags" key={index}>{tag}</span>)
                }
            )}
        </div>
        <div className="LocationRating Part">
            {currentLocation[0].rating}
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
    )}

export default Location;