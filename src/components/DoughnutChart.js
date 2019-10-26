import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { chartColors } from '../constants';

function generateData(props) {
  const { xaxis, data } = props;

  const randomIndex = Math.floor(Math.random() * (chartColors.length - 20));

  return {
    labels: xaxis,
    datasets: [
      {
        data,
        backgroundColor: chartColors.slice(randomIndex),
        hoverBackgroundColor: chartColors.slice(randomIndex)
      }
    ]
  };
}

const options = {
  legend: {
    display: true,
    position: 'top'
  },
  elements: {
    arc: {
      borderWidth: 0  
    }
  },
  maintainAspectRatio: false
};

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateData(props)
    };
  }

  render() {
    const { data } = this.state;
    return <Doughnut data={data} options={options} />;
  }
}

export default DoughnutChart;
