import './main.css';
import template from './main.html';
import {MainController as controller} from './main.controller.js';

let MainComponent = function(){
  return {
    template,
    controller,
    restrict: 'E'
  };
};

export {MainComponent};
