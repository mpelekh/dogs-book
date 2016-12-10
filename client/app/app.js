import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ocLazyLoad from 'oclazyload';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import DropZoneDirective from './app.dropzone.directive';
import ADirective from './a.directive';
import SharedService from './app.shared.service';
import 'normalize.css';

angular.module('app', [
  uiRouter,
  ocLazyLoad,
  Common,
  Components
])
  .config(($locationProvider, $httpProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })

  .constant('API_URL', 'http://urswego.pythonanywhere.com/api')
  .directive('dropZone', DropZoneDirective)
  .directive('a', ADirective)
  .service('SharedService', SharedService)

  .component('app', AppComponent);
