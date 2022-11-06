import React, { Component } from 'react'
import PureComponents from './PureComponents'
import RegularComponent from './RegularComponent'

 class ParentComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Meena'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Meena'
            })
        },2000)
    }
  render() {
    console.log('------Parent Component -------')
    return (
        <div>
      <div>ParentComponent</div>
      <RegularComponent name={this.state.name}></RegularComponent>
      <PureComponents name={this.state.name}></PureComponents>
      </div>
    )
  }
}

export default ParentComponents