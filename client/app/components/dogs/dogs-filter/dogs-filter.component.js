import template from './dogs-filter.html';
import controller from './dogs-filter.controller';
import './dogs-filter.scss';

let dogsFilterComponent = {
  restrict: 'E',
  bindings: {
    regions: '<',
    genders: '<',
    statuses: '<',
    sizes: '<',
    filter: '<',
    applyFilter: '&'
  },
  template,
  controller
};

export default dogsFilterComponent;
