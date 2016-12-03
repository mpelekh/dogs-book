import UserPostModule from './user-post'
import UserPostController from './user-post.controller';
import UserPostComponent from './user-post.component';
import UserPostTemplate from './user-post.html';

describe('User-post', () => {
  let $rootScope, makeController;

  beforeEach(window.module(User-postModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new User-postController();
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
      expect(User-postTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = User-postComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(User-postTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(User-postController);
      });
  });
});
