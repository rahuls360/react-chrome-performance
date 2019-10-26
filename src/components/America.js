import React from 'react';
import DoughnutChart from './DoughnutChart';
import Card from './Card';

const barData1 = [1, 2, 3, 4];
const barData2 = [2, 5, 3, 1];
const barData3 = [7, 8, 2, 5];
const xaxisData1 = ['a', 'b', 'c', 'd'];
const xaxisData2 = ['u', 'v', 'w', 'x'];
const xaxisData3 = ['r', 's', 't', 'u'];

class America extends React.Component {
  render(){
    return (
      <div>
        <div style={styles.container}>
          <Card>
            <DoughnutChart data={barData1} xaxis={xaxisData1} />
          </Card>
          <Card>
            <DoughnutChart data={barData2} xaxis={xaxisData2} />
          </Card>
          <Card>
            <DoughnutChart data={barData3} xaxis={xaxisData3} />
          </Card>
        </div>
        <div style={styles.container}>
          <Card>
            <DoughnutChart data={barData1} xaxis={xaxisData1} />
          </Card>
          <Card>
            <DoughnutChart data={barData2} xaxis={xaxisData2} />
          </Card>
          <Card>
            <DoughnutChart data={barData3} xaxis={xaxisData3} />
          </Card>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '20px'
  }
}

export default America;