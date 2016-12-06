import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dogsFilterComponent from './dogs-filter.component';

let dogsFilterModule = angular.module('dogs-filter', [
  uiRouter
])

.component('dogsFilter', dogsFilterComponent)

.name;

export default dogsFilterModule;
