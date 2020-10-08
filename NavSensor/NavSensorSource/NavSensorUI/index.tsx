import React from 'react'
import './style.css'

type NavSensorType = {
    tempSection:number,
    setTempSection:(value:number)=>void,
    array:Array<React.ReactNode>,
}

const NavSensor = (props:NavSensorType) => {
    const {
        tempSection,
        setTempSection,
        array
    } = props

    return (
        <div className="NavSensor">
            {array.map((item, index)=>{
                return (
                    <a
                        key={index}
                        href={`#sec_${index}`}
                        onClick={()=>setTempSection(index)}
                        className={`NavSensor__item ${tempSection==index && 'NavSensor__item--active'}`}>
                    </a>
                )
            })}
        </div>
    )
}
export default NavSensor