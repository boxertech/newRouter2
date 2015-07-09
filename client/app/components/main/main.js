import angular from 'angular';
import {MainComponent} from './main.component';

let mainModule = angular.module('main', [])
  .directive('main', MainComponent);

export { mainModule };
