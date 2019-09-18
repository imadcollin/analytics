import { AnalysisPage } from './app.po';

describe('analysis App', () => {
  let page: AnalysisPage;

  beforeEach(() => {
    page = new AnalysisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
