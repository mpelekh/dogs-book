import angular from 'angular';
import Auth from './auth/auth';
import Signup from './signup/signup';
import Dogs from './dogs/dogs';
import DogProfile from './dog-profile/dog-profile';
import Users from './users/users';
import DogPost from './dog-post/dog-post';
import UserPost from './user-post/user-post';

let componentModule = angular.module('app.components', [
  Signup,
  Auth,
  Dogs,
  Users,
  DogProfile,
  DogPost,
  UserPost
])
  .name;

export default componentModule;
