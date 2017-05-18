import { TaskmanagerFrontendPage } from './app.po';

describe('taskmanager-frontend App', () => {
  let page: TaskmanagerFrontendPage;

  beforeEach(() => {
    page = new TaskmanagerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
