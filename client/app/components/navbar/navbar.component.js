import './navbar.css';
import template from './navbar.html';
import {NavbarController as controller} from './navbar.controller.js';

let NavbarComponent = function(){
  return {
    template,
    controller,
    restrict: 'E',
    controllerAs: 'vm'
  };
};

export {NavbarComponent};
