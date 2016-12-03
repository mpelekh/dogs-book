import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Dogs from './dogs/dogs';
import DogProfile from './dog-profile/dog-profile';
import Users from './users/users';
import DogPost from './dog-post/dog-post';
import UserPost from './user-post/user-post';

let componentModule = angular.module('app.components', [
  Dogs,
  Users,
  DogProfile,
  DogPost,
  UserPost
])
  .name;

export default componentModule;
