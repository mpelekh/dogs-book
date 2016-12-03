import DogsModule from './dogs'
import DogsController from './dogs.controller';
import DogsComponent from './dogs.component';
import DogsTemplate from './dogs.html';

describe('Dogs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DogsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DogsController();
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
      expect(DogsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DogsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DogsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DogsController);
      });
  });
});
