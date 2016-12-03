import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userPostComponent from './user-post.component';

let userPostModule = angular.module('user-post', [
  uiRouter
])


.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  
  $stateProvider
    .state('user-post', {
      url: '/users/post',
      component: 'userPost'
    });
})

.component('userPost', userPostComponent)

.name;

export default userPostModule;
