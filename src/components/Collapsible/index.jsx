import React, { useState } from "react";
import '../../styles/collapsible.css'
import Arrow from '../../images/arrow.svg'

const Collapsible =(props)=>{
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div className="collapseBackground">
            <button onClick={toggle} className="collapseButton">
                <div className="collapseLabel">
                    {props.label} 
                    <img src={Arrow} alt="flèche" className={!open ? 'arrow arrow-up' : 'arrow arrow-down'}/>
                </div>
            </button>
            {open && (
                <div className="textBackground">
                    <div className="collapseText">
                        {props.children}
                    </div>
                </div>
            )}
        </div>
    )
}
export default Collapsible;