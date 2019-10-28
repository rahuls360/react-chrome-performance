import React from 'react';
import BarChart from './BarChart';
import Card from './Card';

// const barData1 = [1, 2, 3, 4];
// const barData2 = [2, 5, 3, 1];
// const barData3 = [7, 8, 2, 5];
const xaxisData1 = ['a', 'b', 'c', 'd'];
const xaxisData2 = ['u', 'v', 'w', 'x'];
const xaxisData3 = ['r', 's', 't', 'u'];
const label1 = "Detail 1";
const label2 = "Detail 2";
const label3 = "Detail 3";

class Europe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      barData1: [],
      barData2: [],
      barData3: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    this.callAPI()
  }

  callAPI = () => {
    let barData1 = [];
    let barData2 = [];
    let barData3 = [];

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        const data = json.slice(4, 8);
        data.forEach(item => {
          barData1.push(item.body.length);
          barData2.push(item.name.length);
          barData3.push(item.email.length);
        });
        this.setState({ barData1, barData2, barData3, isLoaded: true })
      })
  }

  render(){
    const { barData1, barData2, barData3, isLoaded } = this.state;
    if(isLoaded){
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
    return <div>Loading...</div>
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