import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Dogs from './dogs/dogs';
import DogProfile from './dog-profile/dog-profile';
import Users from './users/users';
import DogPost from './dog-post/dog-post';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Dogs,
  Users,
  DogProfile,
  DogPost
  ])
  .name;

export default componentModule;
