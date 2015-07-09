import {Listings} from './listing.factory.js';
import angular from 'angular';

let commonModule = angular.module('common', [])
  .factory('Listings', Listings);


export {commonModule};
