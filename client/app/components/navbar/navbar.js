import angular from 'angular';
import {NavbarComponent} from './navbar.component.js';

let navbarModule = angular.module('navbar', [])
  .directive('navbar', NavbarComponent);

export { navbarModule };
