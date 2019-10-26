import React from 'react';
import BarChart from './BarChart';
import Card from './Card';

const barData1 = [1, 2, 3, 4];
const barData2 = [2, 5, 3, 1];
const barData3 = [7, 8, 2, 5];
const xaxisData1 = ['a', 'b', 'c', 'd'];
const xaxisData2 = ['u', 'v', 'w', 'x'];
const xaxisData3 = ['r', 's', 't', 'u'];
const label1 = "Detail 1";
const label2 = "Detail 2";
const label3 = "Detail 3";

class Europe extends React.Component {
  render(){
    return (
      <div>
        <div style={styles.container}>
          <Card>
            <BarChart data={barData1} xaxis={xaxisData1} label={label1} />
          </Card>
          <Card>
            <BarChart data={barData2} xaxis={xaxisData2} label={label2} />
          </Card>
          <Card>
            <BarChart data={barData3} xaxis={xaxisData3} label={label3} />
          </Card>
        </div>
        <div style={styles.container}>
          <Card>
            <BarChart data={barData1} xaxis={xaxisData1} label={label1} />
          </Card>
          <Card>
            <BarChart data={barData2} xaxis={xaxisData2} label={label2} />
          </Card>
          <Card>
            <BarChart data={barData3} xaxis={xaxisData3} label={label3} />
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

export default Europe;