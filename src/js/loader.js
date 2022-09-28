// import {Spinner} from 'spin.js';


var opts = {
  lines: 9, // The number of lines to draw
  length: 6, // The length of each line
  width: 10, // The line thickness
  radius: 42, // The radius of the inner circle
  scale: 0.9, // Scales overall size of the spinner
  corners: 0.4, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 10, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#ff0000', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};

const target = document.getElementById('foo');
const spinner = new Spinner(opts).spin(target);

const spinnerLoader = new Spinner().spin();
target.appendChild(spinnerLoader.el);