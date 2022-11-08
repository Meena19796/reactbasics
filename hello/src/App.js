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
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import Counter2 from './components/Counter2';
import HoverCounter2 from './components/HoverCounter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';


class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Counter2> 
        {(count,incrementCount) => (<ClickCounter2 count = {count} incrementCount = {incrementCount} />
         )}
          </Counter2>
      <Counter2>
         {(count,incrementCount) => (<HoverCounter2 count = {count} incrementCount = {incrementCount} />
         )}
         </Counter2> */}
        <UserProvider value ="Meena">
          <ComponentC></ComponentC>
        </UserProvider>
      </div>
    );
  }
}

export default App;
