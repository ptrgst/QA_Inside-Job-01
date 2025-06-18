import LoginPage from "../support/LoginPage";
import ProductPage from "../support/ProductPage";
import CheckoutPage from "../support/CheckoutPage";

describe('saucedemo - login, add product, checkout', () => {
  it('should Login, Add Product To Cart', () => {
    cy.visit('https://www.saucedemo.com/');
    //Step 1 : Login
    LoginPage.loginAs('standard_user','secret_sauce');
    
    // Step 2: Add Product
    ProductPage.addProductToCart('Sauce Labs Backpack');
    ProductPage.goToCart();

    // Step 3: Checkout
    CheckoutPage.startCheckout();
    CheckoutPage.fillCheckoutInfo('Bujang','Cihuy', '6969');
    CheckoutPage.finishOrder();
    CheckoutPage.assertSuccesMessage();
  });
});