import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RANDOM = "RANDOM";

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RANDOM:
      return (state = Math.floor(Math.random() * 201) - 100);
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counter);

export default store;
