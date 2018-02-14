export default class Component {
  constructor() {
    var element = document.createElement('div');
    element.innerHTML = 'Hello, webpack';
    return element;
  }
}
