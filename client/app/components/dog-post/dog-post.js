import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dogPostComponent from './dog-post.component';
import dogPostNetworkService from './dog-post.network.service';

let dogPostModule = angular.module('dogPost', [
  uiRouter
])

  .config(($stateProvider) => {
    "ngInject";
    $stateProvider
      .state('dog-post', {
        url: '/dogs/post',
        component: 'dogPost'
      });
  })
  .service('DogPostNetworkService', dogPostNetworkService)
  .component('dogPost', dogPostComponent)

  .name;

export default dogPostModule;
