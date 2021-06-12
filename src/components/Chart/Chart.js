import React from 'react'
import { Line } from 'react-chartjs-2'


const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      lineTension: 0.4,
    },
    // {
    //   label: "Second dataset",
    //   data: [33, 25, 35, 51, 54, 76],
    //   fill: false,
    //   borderColor: "#742774"
    // }
  ]
};

// const colors = ["#78ce90", "#b977ce", "#fac76e", "#de4d4d"];
// const data = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "My First dataset",
//       fill: false,
//       // lineTension: 0.1,
//       backgroundColor: colors,
//       borderColor: "rgba(75,192,192,1)",
//       // borderCapStyle: "butt",
//       // borderDash: [],
//       // borderDashOffset: 0.0,
//       // borderJoinStyle: "miter",
//       // pointBorderColor: "rgba(75,192,192,1)",
//       // pointBackgroundColor: "#fff",
//       // pointBorderWidth: 1,
//       // pointHoverRadius: 5,
//       // pointHoverBackgroundColor: "rgba(75,192,192,1)",
//       // pointHoverBorderColor: "rgba(220,220,220,1)",
//       // pointHoverBorderWidth: 2,
//       // pointRadius: 1,
//       // pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     },
//     // {
//     //   data: [78, 51, 95, 40, 5, 55, 20],
//     //   fill: false
//     // }
//   ]
// };

const getOptions = {
    // legend: {
    //   display: true,
    //   position: "right"
    // },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true
          },
          ticks: {
            display: true ,
            minRotation: 0
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            display: true,
            minRotation: 90
          }
        }
      ]
    }
};

function Chart() {
    return (
        <div className="LineChart">
            <Line data={data} options={getOptions}/>
        </div>
    )
}

export default Chart
