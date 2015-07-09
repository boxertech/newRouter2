import angular from 'angular';
import {PrimaryFeatureComponent} from './primaryFeature.component.js';

let primaryFeatureModule = angular.module('primaryFeature', [])
  .directive('primaryFeature', PrimaryFeatureComponent);

export { primaryFeatureModule };
