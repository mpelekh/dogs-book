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
        component: 'dogProfile',
        resolve: {
          loadPlugin: $ocLazyLoad => $ocLazyLoad.load([
            {
              "name": "blueimp",
              "files": [
                "/public/plugins/blueimp/jquery.blueimp-gallery.min.js",
                "/public/plugins/blueimp/css/blueimp-gallery.min.css"
              ]
            },
            {
              "name": "dropzone",
              "files": [
                "/public/plugins/dropzone/dropzone.js",
                "/public/plugins/dropzone/basic.css",
                "/public/plugins/dropzone/dropzone.css"
              ]
            }
          ])
        }
      });
  })

  .component('dogProfile', dogProfileComponent)

  .name;

export default dogProfileModule;
