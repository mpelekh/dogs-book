import DogsFilterModule from './dogs-filter'
import DogsFilterController from './dogs-filter.controller';
import DogsFilterComponent from './dogs-filter.component';
import DogsFilterTemplate from './dogs-filter.html';

describe('Dogs-filter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Dogs-filterModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Dogs-filterController();
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
      expect(Dogs-filterTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = Dogs-filterComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(Dogs-filterTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(Dogs-filterController);
      });
  });
});
