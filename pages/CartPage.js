class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = '.inventory_item_name';
    this.checkoutButton = '#checkout';
  }

  async verifyItemVisible() {
    return await this.page.isVisible(this.cartItem);
  }

  async checkout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;