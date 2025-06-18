class ProductPage {
    addProductToCart(productName) {
        cy.contains('.inventory_item_name', productName)
          .parents('.inventory_item')
          .find('button').click();
    }

    goToCart(){
        cy.get('.shopping_cart_link').click();
    }
}

export default new ProductPage();