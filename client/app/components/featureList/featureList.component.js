import './featureList.css';
import {FeatureListController as controller} from './featureList.controller.js';
import template from './featureList.html';

let FeatureListComponent = () => {
  return {
    restrict: 'E',
    scope: {},
    controllerAs: 'vm',
    controller,
    template
  };
};

export {FeatureListComponent};
