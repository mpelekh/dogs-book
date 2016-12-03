import angular from 'angular';
import uiRouter from 'angular-ui-router';
import usersComponent from './users.component';
import usersNetworkService from './users.network.service';

let usersModule = angular.module('users', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
      .state('users', {
        url: '/users',
        component: 'users'
      });
  })
  .service('UsersNetworkService', usersNetworkService)
  .component('users', usersComponent)

  .name;

export default usersModule;
