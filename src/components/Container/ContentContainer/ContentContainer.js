import React from 'react'
import './ContentContainer.scss'

function ContentContainer({children}) {
    return (
        <div className="ContentContainer">
            {children}
        </div>
    )
}

export default ContentContainer
