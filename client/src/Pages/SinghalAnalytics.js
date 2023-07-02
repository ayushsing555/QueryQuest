import React from 'react';
import {Pie} from 'react-chartjs-2';
import {useParams} from 'react-router-dom';

import {Chart, ArcElement} from 'chart.js';
Chart.register(ArcElement);
const SinghalAnalytics = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'

    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 80],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(123,12,34)'
      ],
      hoverOffset: 2
    }]
  };
  // </block:setup>

  // <block:config:0>
  const config = {
    type: 'pie',
    data: data,
  };
  return (
    <div className='block m-auto' style={{width: '400px', height: '500px'}}>
      <Pie data={data} options={config} />
    </div>
  );
};

export default SinghalAnalytics;