import React from 'react';
import LineChart from './LineChart';
import Card from './Card';

const lineData1 = [1, 2, 3, 4];
const lineData2 = [2, 5, 3, 1];
const lineData3 = [7, 8, 2 ,5];
const xaxisData1 = ['a', 'b', 'c', 'd'];
const xaxisData2 = ['u', 'v', 'w', 'x'];
const xaxisData3 = ['r', 's', 't', 'u'];
const label1 = "Detail 1";
const label2 = "Detail 2";
const label3 = "Detail 3";

class Asia extends React.Component {
  render(){
    return (
      <div>
        <div style={styles.container}>
          <Card>
            <LineChart data={lineData1} xaxis={xaxisData1} label={label1} />
          </Card>
          <Card>
            <LineChart data={lineData2} xaxis={xaxisData2} label={label2} />
          </Card>
          <Card>
            <LineChart data={lineData3} xaxis={xaxisData3} label={label3} />
          </Card>
        </div>
        <div style={styles.container}>
          <Card>
            <LineChart data={lineData1} xaxis={xaxisData1} label={label1} />
          </Card>
          <Card>
            <LineChart data={lineData2} xaxis={xaxisData2} label={label2} />
          </Card>
          <Card>
            <LineChart data={lineData3} xaxis={xaxisData3} label={label3} />
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

export default Asia;