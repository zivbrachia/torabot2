import { Torabotv2Page } from './app.po';

describe('torabotv2 App', () => {
  let page: Torabotv2Page;

  beforeEach(() => {
    page = new Torabotv2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
