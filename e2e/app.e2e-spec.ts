import { WikiViewerPage } from './app.po';

describe('wiki-viewer App', function() {
  let page: WikiViewerPage;

  beforeEach(() => {
    page = new WikiViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
