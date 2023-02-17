import React, { useState } from "react";
import CarouselArrow from '../../images/carouselArrow.svg'
import '../../styles/carrousel.css'


export default function Carousel({Slides}) {
    const [currentState, setCurrentState]= useState(0);
    const bgImageStyle = {
        backgroundImage: `url(${Slides[currentState]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    }
    const Next = () => { setCurrentState(currentState +1);
    if (currentState === Slides.length -1)
        setCurrentState(0);
    }

    const Previous = () => { setCurrentState(currentState -1);
    if (currentState === 0)
        setCurrentState(Slides.length -1);
    }

    return (
        <div className="carousel">
            <div className="carousel-picture" style={bgImageStyle}>
                {Slides.length >1 &&
                    <div className="pictureChange">
                        <img className="arrowPrevious" src={CarouselArrow} alt="Previous Picture" onClick={Previous} />
                        <span className="pictureNumber"> {currentState+1}/{Slides.length}</span>
                        <img className="arrowNext" src={CarouselArrow} alt="Next Picture" onClick={Next} />
                    </div>
                }
            </div>
        </div>
    )
}
