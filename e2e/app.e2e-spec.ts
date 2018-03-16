import { ContactWebPage } from './app.po';

describe('contact-web App', () => {
  let page: ContactWebPage;

  beforeEach(() => {
    page = new ContactWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
