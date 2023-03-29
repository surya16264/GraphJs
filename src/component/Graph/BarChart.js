import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import Header from '../Header';

function BarChart() {
    const [data, setData] = useState({
        labels: [
            "Aerospace & Defence", "Alternative Energy", "Automobiles & Parts", "Banks", "Beverages", "Biotechnology", "Chemicals", "Commercial Vehicles & Trucks", "Computer Hardware",
            "Computer Services", "Construction & Materials", "Electrical equipment", "Electricity", "Electronic & Electrical equipment", "Electronic Equipment", "Equity Investment Instruments", "Financial Services", "Fixed Line Telecommunications", "Food & Drug Retailers",
            "Food Producers", "Forestry & Paper", "Gas & Water", "General Industrials", "General Retailers"
        ],
        datasets: [
            {
                label: "Sum of Profits (€million)",
                data: [387409.19,
                    7448.61,
                    1272000.78,
                    734744.65,
                    270453.22,
                    -192361.37,
                    831481.68,
                    176.12,
                    278.72,
                    186.04,
                    547897.81,
                    -6388536.47,
                    375453.87,
                    87839.7,
                    881345,
                    501.16,
                    121156.6,
                    634079.03,
                    34696.08,
                    520213.44,
                    44341.52,
                    148021.42,
                    492844.22,
                    96992.93],
                backgroundColor: ['#78ADD2', '#A4D0A0'],
                borderColor: ['#0072AA', '#21AA47'],
                borderWidth: 2,
                barPercentage: 1,
                fill: true
            }
        ]
    });

    return (
       <>
        <div className="BarChart">
            <Header />
            <Bar data={data} />
        </div>
       </>
    );
  }
  
export default BarChart;