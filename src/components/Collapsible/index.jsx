import React, { useState } from "react";
import '../../styles/collapsible.css'

const Collapsible =(props)=>{
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div className="collapseBackground">
            <button onClick={toggle} className="collapseButton">{props.label}</button>
            {open && (
                <div className="collapseText">
                    {props.children}
                </div>
            )}
        </div>
    )
}
export default Collapsible;