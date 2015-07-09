import angular from 'angular';
import {FeatureComponent} from './feature.component.js';

let featureModule = angular.module('feature', [])
  .directive('feature', FeatureComponent);

export {featureModule};
