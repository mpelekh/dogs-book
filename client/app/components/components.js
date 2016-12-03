import angular from 'angular';
import Home from './home/home';
import About from './about/about';

import Users from './users/users';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Users
])

.name;

export default componentModule;
