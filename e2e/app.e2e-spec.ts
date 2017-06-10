import { CheckoutPage } from './app.po';

describe('checkout App', () => {
  let page: CheckoutPage;

  beforeEach(() => {
    page = new CheckoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
