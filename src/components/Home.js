import React from 'react';
import { Switch, Route, withRouter, Redirect} from 'react-router-dom';
import Header from './Header';
import Asia from './Asia';
import Europe from './Europe';

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

  componentDidMount(){
    const { location} = this.props;

    const path = location.pathname.slice(1);
    tabData.forEach(tab => {
      if (path === tab.id){
        this.handleTab(tab.value, tab.id)
      }
    })
  }

  handleTab = (value, id) => {
    const { history } = this.props;

    this.setState({tab: value}, () => {
      history.push(id)
    })
  }

  render(){
    return (
      <div>
        <Header />
        <ul style={styles.ul}>
          {tabData.map(tab => (
            <li onClick={() => this.handleTab(tab.value, tab.id)} style={styles.li} className={this.state.tab === tab.value && 'active'}>{tab.name}</li>
          ))}
        </ul>

        <Switch>
          <Route path="/asia" component={Asia}/>
          <Route path="/europe" component={Europe}/>
          <Route path="/america" render={() => <div>America</div>}/>
          <Redirect from="/" to="/asia" />
        </Switch>
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

export default withRouter(Home);