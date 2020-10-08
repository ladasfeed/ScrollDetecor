import React from 'react'
import './style.css'
import ScrollDetector from "./NavSensorSource/NavSensorLogic/ScrollDetector";

const NavSensorTest: React.FC = () => {


    return (
        <div>
            <ScrollDetector>
                <section className="section_1"/>
                <section className="section_2"/>
                <section className="section_3"/>
                <section className="section_4"/>
            </ScrollDetector>
        </div>
    )
}
export default NavSensorTest