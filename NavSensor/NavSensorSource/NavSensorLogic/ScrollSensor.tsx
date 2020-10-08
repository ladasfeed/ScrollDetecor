import React, { useRef, useEffect } from 'react'


type ScrollSensorType = {
    children: any,
    scrollFunc:(value: number)=>void,
    boundaries:[number,number],
    selfIndex: number
}

const ScrollSensor:React.FC<ScrollSensorType> = (props) => {
    const {
        children,
        scrollFunc,
        boundaries,
        selfIndex
    } = props

    /* state */
    const ref = useRef<HTMLDivElement>(null)

    /* methods */
    const checkSection = () => {
        let data = ref.current?.getBoundingClientRect().top;
        if (data!==undefined && (data < boundaries[0]) && (data > boundaries[1])) {
            scrollFunc(selfIndex)
        }
    }

    /* effects */
    useEffect(() => {
        checkSection()
        document.addEventListener('scroll', checkSection)
        return () => document.removeEventListener('scroll', checkSection)
    }, [])


    return (
        <div id={`sec_${selfIndex}`} ref={ref}>
            {children} 
        </div>
    )
}

export default ScrollSensor;