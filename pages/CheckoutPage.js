class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.zipCode = '#postal-code';

    this.continueButton = '#continue';
    this.finishButton = '#finish';

    this.successMessage = '.complete-header';
  }

  async enterCheckoutInfo(first, last, zip) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.zipCode, zip);
  }

  async continueCheckout() {
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

  async getSuccessMessage() {
    return await this.page.textContent(this.successMessage);
  }
}

module.exports = CheckoutPage;