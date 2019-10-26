import React from 'react';
import { Line } from 'react-chartjs-2';
import { chartColors } from '../constants';


const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false
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

function generateData(props) {
  const { data, xaxis, label } = props;

  const datasets = [];
  const randomIndex = Math.floor(Math.random() * chartColors.length)
  datasets.push({
    data,
    label,
    fill: false,
    borderColor: chartColors[randomIndex],
    pointHoverBackgroundColor: chartColors[randomIndex],
  })


  return {
    labels: xaxis,
    datasets
  };
}

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateData(props)
    };
  }

  render() {
    const { data } = this.state;
    return <Line data={data} options={options} />;
  }
}

export default LineChart;