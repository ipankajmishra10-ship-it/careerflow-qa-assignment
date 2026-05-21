const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

/*
Flow Chosen:
This test automates a complete e-commerce purchase flow:
Login → Add Product → Checkout → Order Completion.

Why this flow matters:
It validates critical business functionality and demonstrates
end-to-end user interaction coverage with meaningful assertions.
*/

test('Complete purchase flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);

  // Step 2: Add item to cart
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();

  const itemVisible = await cartPage.verifyItemVisible();
  expect(itemVisible).toBeTruthy();

  // Step 3: Checkout
  await cartPage.checkout();

  await checkoutPage.enterCheckoutInfo(
    'Test',
    'User',
    '226001'
  );

  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();

  const successText = await checkoutPage.getSuccessMessage();

  expect(successText).toContain('Thank you for your order!');
});