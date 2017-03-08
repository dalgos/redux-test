const { createStore } = require('redux');

class Counter {
  constructor(root) {
    this.store = createStore(this.reducer);

    this.render = () => {
      console.log(this);
      this.displaySpan.innerHTML = this.store.getState().toString();
    };
    this.store.subscribe(this.render);

    this.container = document.createElement('div');

    this.displaySpan = document.createElement('span');
    this.container.appendChild(this.displaySpan);

    this.upButton = document.createElement('button');
    this.upButton.innerHTML = 'UP';
    this.upButton.addEventListener('click', () => {
      this.store.dispatch({ type: 'UP' });
    });
    this.container.appendChild(this.upButton);

    this.downButton = document.createElement('button');
    this.downButton.innerHTML = 'DOWN';
    this.downButton.addEventListener('click', () => {
      // this.store.dispatch({ type: 'DOWN' });
    });
    this.container.appendChild(this.downButton);

    this.render();
    root.appendChild(this.container);
  }
  reducer(state = 0, action) {
    switch (action.type) {
    case 'UP':
      return state + 1;
    case 'DOWN':
      return state - 1;
    default:
      return state;
    }
  }
}

module.exports = Counter;
