import React, { Component } from 'react';
import Calendar from "./components/Calendar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <span>React Calendar</span>
       <div>
         <main>
         <Calendar />
         </main>
       </div>
      </div>
    );
  }
}

export default App;
