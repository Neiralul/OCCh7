import React from "react"
import Thumb from "../../components/Thumb/Thumb"
import "../../styles/home.css"

function Home(){
    return (
        <div className="homePage">
            <div className="homeBanner">
                <div className="bannerText">
                    <span className="abc">Chez vous, partout et ailleurs</span>
                </div>
            </div>
            <div className="thumbDisplay">
                <Thumb />
            </div>
        </div>
    )
}

export default Home