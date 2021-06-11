import React from 'react'
import './Container.scss'

function Container({children}) {
    return (
        <div className="Container">
            {children}
        </div>
    )
}

export default Container
