import React from 'react';
import Logo from '../assets/logo.png';

class Header extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <img src={Logo} alt="logo" style={styles.image} />
        <div style={styles.container2}>
          <img src="https://avatarfiles.alphacoders.com/693/69306.jpg" alt="avatar" style={styles.avatar}/>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#444'
  },
  container2: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    maxHeight: 75
  },
  avatar: {
    maxHeight: 50,
    borderRadius: 50,
    cursor: 'pointer'
  }
}

export default Header;