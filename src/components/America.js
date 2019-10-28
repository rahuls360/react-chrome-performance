import React from 'react';
import DoughnutChart from './DoughnutChart';
import Card from './Card';

const xaxisData1 = ['a', 'b', 'c', 'd'];
const xaxisData2 = ['u', 'v', 'w', 'x'];
const xaxisData3 = ['r', 's', 't', 'u'];

class America extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      doughnutData1: [],
      doughnutData2: [],
      doughnutData3: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    this.callAPI()
  }

  callAPI = () => {
    let doughnutData1 = [];
    let doughnutData2 = [];
    let doughnutData3 = [];

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        const data = json.slice(8, 12);
        data.forEach(item => {
          doughnutData1.push(item.body.length);
          doughnutData2.push(item.name.length);
          doughnutData3.push(item.email.length);
        });
        this.setState({ doughnutData1, doughnutData2, doughnutData3, isLoaded: true })
      })
  }

  render(){
    const { doughnutData1, doughnutData2, doughnutData3, isLoaded } = this.state;
    if(isLoaded){
      return (
        <div>
          <div style={styles.container}>
            <Card>
              <DoughnutChart data={doughnutData1} xaxis={xaxisData1} />
            </Card>
            <Card>
              <DoughnutChart data={doughnutData2} xaxis={xaxisData2} />
            </Card>
            <Card>
              <DoughnutChart data={doughnutData3} xaxis={xaxisData3} />
            </Card>
          </div>
          <div style={styles.container}>
            <Card>
              <DoughnutChart data={doughnutData1} xaxis={xaxisData1} />
            </Card>
            <Card>
              <DoughnutChart data={doughnutData2} xaxis={xaxisData2} />
            </Card>
            <Card>
              <DoughnutChart data={doughnutData3} xaxis={xaxisData3} />
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

export default America;