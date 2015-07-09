import './primaryFeature.css';
import template from './primaryFeature.html';
import {PrimaryFeatureController as controller} from './primaryFeature.controller.js';

let PrimaryFeatureComponent = function(){
  return {
    template,
    controller,
    scope: {
    //  primeFeature: '='
    },
    //bindToController: true,
    restrict: 'E',
    controllerAs: 'vm'
  };
};

export {PrimaryFeatureComponent};
