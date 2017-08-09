import { EplInfoPage } from './app.po';

describe('epl-info App', () => {
  let page: EplInfoPage;

  beforeEach(() => {
    page = new EplInfoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
