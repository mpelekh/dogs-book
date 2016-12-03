import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Dogs from './dogs/dogs';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Dogs
])

.name;

export default componentModule;
