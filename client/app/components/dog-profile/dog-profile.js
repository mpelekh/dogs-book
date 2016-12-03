import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dogProfileComponent from './dog-profile.component';

let dogProfileModule = angular.module('dog-profile', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('dog-profile', {
      url: '/dogs/:dogId/dog-profile',
      component: 'dogProfile'
    });
})

.component('dogProfile', dogProfileComponent)

.name;

export default dogProfileModule;
