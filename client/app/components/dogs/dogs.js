import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dogsComponent from './dogs.component';

let dogsModule = angular.module('dogs', [
  uiRouter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('dogs', {
        url: '/dogs',
        component: 'dogs'
      });
  })


  .component('dogs', dogsComponent)

  .name;

export default dogsModule;
