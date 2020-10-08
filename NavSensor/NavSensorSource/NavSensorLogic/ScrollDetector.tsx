import React, {FC, useState} from 'react'
import ScrollSensor from "./ScrollSensor";
import NavSensor from "../NavSensorUI";

const ScrollDetector:FC = (props) => {
    const {
        children
    } = props

    const [tempSection, setTempSection] = useState(0);

    return (
        <div>
            <NavSensor tempSection={tempSection} setTempSection={setTempSection} array={React.Children.toArray(children)}/>
            {React.Children.map(children,
                (child, index) => {
                    return (
                        <ScrollSensor
                            selfIndex={index}
                            key={index}
                            scrollFunc={setTempSection}
                            boundaries={[200, -200]}
                        >
                            {child}
                        </ScrollSensor>
                    )
            })}
        </div>
    )
}

export default ScrollDetector