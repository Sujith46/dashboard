import React from 'react'
import './OverviewContainer.scss'   

function OverviewContainer({children}) {
    return (
        <div className="OverviewContainer">
            {children}
        </div>
    )
}

export default OverviewContainer
