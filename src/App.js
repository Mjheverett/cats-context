import React, { useReducer } from 'react';
import { StateProvider } from './context';
import Demo from './components/DemoComponent';

function App() {
  const initialState = {
    name: "Guster",
    activity: "napping",
  };

  const reducer = (state, action) => {
    const { name, activity } = action;
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
      case "SET_ACTIVITY":
        return {
          ...state,
          activity,
        }
      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <h1>Context Cats</h1>
        <Demo />
      </StateProvider>
    </div>
  );
}

export default App;
