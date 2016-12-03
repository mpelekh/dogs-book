import template from './dogs.html';
import controller from './dogs.controller';
import './dogs.scss';

let dogsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default dogsComponent;
