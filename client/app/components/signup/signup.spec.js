import SignupModule from './signup'
import SignupController from './signup.controller';
import SignupComponent from './signup.component';
import SignupTemplate from './signup.html';

describe('Signup', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SignupModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SignupController();
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
      expect(SignupTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SignupComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SignupTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SignupController);
      });
  });
});
