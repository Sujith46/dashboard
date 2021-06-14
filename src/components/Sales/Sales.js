import React from 'react'
import PieChart from '../PieChart/PieChart'

import { Sales as SalesData } from '../../config/SalesData'

import './Sales.scss'

function Sales() {
    return (
        <div className="Sales BoxShadow">
            <h3 className="Sales__Header">Sales Distribution</h3>
            <PieChart />
            <div className="Sales__Data">
                <ul className="Sale">
                    {SalesData.map((value, index )=> <li className={`Sale__${index}`} key={index}><div>{value.name}</div><span>{value.value}</span></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Sales
