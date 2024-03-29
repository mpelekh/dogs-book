import angular from 'angular';
import uiRouter from 'angular-ui-router';
import DogsFilter from './dogs-filter/dogs-filter';
import dogsComponent from './dogs.component';
import dogsNetworkService from './dogs.network.service'

let dogsModule = angular.module('dogs', [
  uiRouter,
  DogsFilter
])
  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('dogs', {
        url: '/',
        component: 'dogs'
      });
  })

  .service('DogsNetworkService', dogsNetworkService)
  .component('dogs', dogsComponent)

  .name;

export default dogsModule;
