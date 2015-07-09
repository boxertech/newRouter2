import './feature.css';
import template from './feature.html';
import {FeatureController as controller} from './feature.controller.js';

let FeatureComponent = () => {
  return {
    template,
    controller,
    scope: {
      featureData: '='
    },
    bindToController: true,
    restrict: 'E',
    controllerAs: 'vm'
  };
};

export {FeatureComponent};
