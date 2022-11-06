import React from 'react'
import './myStyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
    <h1 className={className}>Meena</h1>
    </div>
  );
}

export default StyleSheet