import {Spinner} from 'spin.js';


function loader(elements){
  const target = document.getElementById('foo');
  const spinner = new Spinner().spin(target);
  target.appendChild(spinner.el);
  return spinner
}
loader()