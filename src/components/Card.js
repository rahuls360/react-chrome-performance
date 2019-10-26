import React from 'react';

const Card = ({ children }) => (
  <div style={styles.card}>
    {children}
  </div>
)

const styles = {
  card: {
    height: 250,
    border: '1px solid rgba(0, 0, 0, .125)',
    borderRadius: '.25rem',
    boxSizing: 'border-box',
    margin: 10,
    minWidth: 0,
    flex: 1,
  }
}

export default Card;