import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import './PieChart.scss'

const data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: [35,20,45,12],
      backgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A1FB'],
    }
  ]
};



function PieChart() {
    return (
        <div className="PieChart">
            <Doughnut data={data}/>
            <div className="PieChart__Center">
                <p>230,990</p>
                <p>Sales</p>
            </div>
        </div>
    )
}

export default PieChart
