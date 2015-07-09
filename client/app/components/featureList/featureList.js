import angular from 'angular';
import {FeatureListComponent} from './featureList.component.js';

let featureListModule = angular.module('featureList', [])
  .directive('featureList', FeatureListComponent)

export {featureListModule};
