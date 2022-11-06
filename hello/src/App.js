import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './EventBind';
import ParentComponent from './ParentComponent';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import ParentComponents from './components/ParentComponents';
import RefsDemo from './components/RefsDemo';
import FRParentinput from './components/FRParentinput';


class App extends Component {

  render() {
    return(
      <div className="App">
        <FRParentinput></FRParentinput>
        {/*<RefsDemo></RefsDemo>
        <ParentComponents></ParentComponents>*/}
       </div>
    );
  }
}

export default App;
