//import 'normalize.css';
import './site.css';
import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import ngNewRouter from 'angular-new-router/dist/router.es5.js';
import {commonModule} from './components/common/common';
import {mainModule, navbarModule, primaryFeatureModule, noteMakerModule, featureListModule, featureModule} from './components/components';

angular.module('app', [
  mainModule.name,
  navbarModule.name,
  primaryFeatureModule.name,
  noteMakerModule.name,
  featureListModule.name,
  commonModule.name,
  featureModule.name
])
.controller('AppController',['$router', AppController]);

function AppController($router) {
    $router.config([
        {path: '/',   component: 'main' }
    ]);
}

//{path: '/search/:searchTerm',   component: 'search' },
//{path: '/sidebar',   component: 'sidebar' },
