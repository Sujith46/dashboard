import React from 'react'
import Chart from '../Chart/Chart'

import './Statistics.scss'

function Statistics() {
    return (
        <div className="Statistics">
            <div className="Statistics__Header">
                <h3>Statistics</h3>
                <select className="DateOption">
                    <option selected value="last 6 months">Last 6 months</option>
                </select>
            </div>
            <div className="LineChart">
                <Chart/>
            </div>
        </div>
    )
}

export default Statistics
