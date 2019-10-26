import React from 'react';
import Header from './Header';

const tabData = [
  {
    value: 0,
    id: "asia",
    name: "Asia"
  },
  {
    value: 1,
    id: "europe",
    name: "Europe"
  },
  {
    value: 2,
    id: "america",
    name: "America"
  },
]

class Home extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      tab: 0
    }
  }

  handleTab = (value, id) => {
    this.setState({tab: value})
  }

  render(){
    return (
      <div>
        <Header />
        <ul style={styles.ul}>
          {tabData.map(tab => (
            <li onClick={() => this.handleTab(tab.value, tab.id)} style={styles.li}>{tab.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  ul: {
    display: "flex",
    listStyle: 'none',
  },
  li: {
    marginRight: 10,
    cursor: 'pointer'
  }
}

export default Home;