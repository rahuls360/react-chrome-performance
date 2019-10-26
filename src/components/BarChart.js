import React from 'react';
import { Bar } from 'react-chartjs-2';

import { chartColors } from '../constants';

function generateData(props) {
  const { xaxis, data, label } = props;

  const datasets = [];
  const randomIndex = Math.floor(Math.random() * chartColors.length)
  datasets.push({
    data,
    label,
    backgroundColor: chartColors[randomIndex],
    borderColor: chartColors[randomIndex],
    borderWidth: 1
  })

  return {
    labels: xaxis,
    datasets
  };
}

function generateOptions(props) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top'
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true
          },
          ticks: {
            beginAtZero: true
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  };
}

class BarChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: generateData(props),
      options: generateOptions(props)
    };
  }

  render() {
    const { data, options } = this.state;
    return (
      <Bar data={data} options={options} />
    )
  }
}

export default BarChart;
