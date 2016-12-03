import DogProfileModule from './dog-profile'
import DogProfileController from './dog-profile.controller';
import DogProfileComponent from './dog-profile.component';
import DogProfileTemplate from './dog-profile.html';

describe('Dog-profile', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Dog-profileModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Dog-profileController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Dog-profileTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Dog-profileComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Dog-profileTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Dog-profileController);
      });
  });
});
