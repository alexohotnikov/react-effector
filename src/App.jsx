import React from 'react';
import { useStore } from 'effector-react';
import { store, addCount, removeCount } from './store';
import './App.scss';

const Controls = () => (
  <div className="Controls">
    <button type="button" className="add_input" onClick={addCount}> add </button>
    <button type="button" className="remove_input" onClick={removeCount}> remove </button>
  </div>
);

const CountView = () => (
  <>
    <div className="Couner">
      Счетчик эффектора:
      <span className="counter_id">{useStore(store).value}</span>
    </div>
  </>
);


const App = () => (
  <>
    <CountView />
    <Controls />
  </>
);

export default App;
