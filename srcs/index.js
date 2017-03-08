const { createStore } = require('redux');

let defaultState = 0;

//view setting
let displaySpan = document.createElement('span');
document.body.appendChild(displaySpan);
let upButton = document.createElement('button');
upButton.innerHTML = 'UP';
upButton.addEventListener('click', () => {
  store.dispatch({ type: 'UP' });
});
document.body.append(upButton);
let downButton = document.createElement('button');
downButton.innerHTML = 'DOWN';
downButton.addEventListener('click', () => {
  store.dispatch({ type: 'DOWN' });
});
document.body.appendChild(downButton);

//reducer :: don't change state value.
function reducer(state = defaultState, action) {
  switch (action.type) {
  case 'UP':
    return state + 1;
  case 'DOWN':
    return state - 1;
  default:
    return state;
  }
}

//create store.
let store = createStore(reducer);

//render
function render() {
  displaySpan.innerHTML = store.getState().toString();
}

//subscribe render
store.subscribe(render);

//init render
render();
