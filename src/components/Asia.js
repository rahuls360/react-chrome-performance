import React from 'react';
import LineChart from './LineChart';
import Card from './Card';

const xaxisData1 = ['a', 'b', 'c', 'd'];
const xaxisData2 = ['u', 'v', 'w', 'x'];
const xaxisData3 = ['r', 's', 't', 'u'];
const label1 = "Detail 1";
const label2 = "Detail 2";
const label3 = "Detail 3";

class Asia extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      lineData1: [],
      lineData2: [],
      lineData3: [],
      isLoaded: false
    }
  }

  componentDidMount(){
    this.callAPI()
  }

  callAPI = () => {
    let lineData1 = [];
    let lineData2 = [];
    let lineData3 = [];

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        const data = json.slice(0, 4);
        data.forEach(item => {
          lineData1.push(item.body.length);
          lineData2.push(item.name.length);
          lineData3.push(item.email.length);
        });
        this.setState({ lineData1, lineData2, lineData3, isLoaded: true })
      })
  }

  render(){
    const { lineData1, lineData2, lineData3, isLoaded} = this.state;
    if(isLoaded){
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
    return <div>Loading ...</div>
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