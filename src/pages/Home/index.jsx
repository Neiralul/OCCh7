import React from "react"

import data from "../../components/data/data.json"

function Home(){
const newdata= data.map( (data) =>{
    return (
        <li>
            {data.title}
        </li>
    )
})
}
export default Home