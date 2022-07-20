import './App.css';
import React from 'react';
import CircleImg from './components/CircleImg';
import Header from './components/Header';
import state from './state/app';


function App() {

  let circleImg = state.circle
    .map(i => <CircleImg class_block={i.class_name} path={i.img} />)

  return (
    <div>
      <div  className="App">
          {circleImg}
      </div>
      <div className="modal"></div>
    </div>
  );
}

export default App;
