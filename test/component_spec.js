import Component from '../src/component';

describe('Component', function() {
  describe('#constructor', function() {
    it('returns dom with "Hello, stone" in it', function() {
      let component = new Component();
      expect(component).toHaveText('Hello, webpack');
    });
  });
});
