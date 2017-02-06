import { EnvErrorPage } from './app.po';

describe('env-error App', function() {
  let page: EnvErrorPage;

  beforeEach(() => {
    page = new EnvErrorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
