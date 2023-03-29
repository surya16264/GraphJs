import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import Header from '../Header';


function LineChart() {
    const [data, setData] = useState({
        labels: [
            "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019" ,"2020"
        ],
        datasets: [
            {
                label: "Sum of Sales (€million)",
                data: [13894163, 15710758, 16854413, 16723019, 17972595, 17686790, 17910320, 18448033, 20351620, 21018395, 18952091],
                backgroundColor: 'rgb(0, 114, 170, 0.5)',
                borderColor: '#0072AA',
                fill: true
            }
        ]
    });
    return (
        <div className="LineChart">
            <Header />
            <Line data={data} />
        </div>
    );
  }
  
export default LineChart;