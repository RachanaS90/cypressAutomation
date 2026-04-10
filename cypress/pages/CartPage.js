class CartPage {
    visit() {
        cy.visit('https://automationexercise.com/view_cart');
    }

    verifyCartInfoVisible() {
        cy.get(".cart_info").should('be.visible');
    }

    verifyCartProducts(productNames) {
        cy.get(".cart_description a").each(($desc, descIndex) => {
            const cartProduct = $desc.text().trim();
            expect(cartProduct).to.equal(productNames[descIndex]);
        });
    }

    verifyCartPrices(productPrices) {
        cy.get(".cart_price p").each(($price, priceIndex) => {
            const cartPrice = $price.text().trim();
            expect(cartPrice).to.equal(productPrices[priceIndex]);
        });
    }

    clickCheckout() {
        cy.get(".btn.btn-default.check_out").click();
    }

    verifyCheckoutPage() {
        cy.url().should('include', '/checkout');
        cy.contains("h2", "Address Details").should('be.visible');
    }

    loginToCheckout(email, password) {
        cy.contains('u', 'Register / Login',{timeout : 10000 }).click();
        cy.get("input[data-qa='login-email']").type(email);
        cy.get("input[data-qa='login-password']").type(password);
        cy.get("button[data-qa='login-button']").click();
    }

    clickPlaceOrder() {
        cy.get(".btn.btn-default.check_out").click();
        cy.contains("h2", "Payment").should('be.visible');
    }

    addPaymentDetails() {
        cy.get("input[data-qa='name-on-card']").type("Rachana");
        cy.get("input[data-qa='card-number']").type("7856897867567867");
        cy.get("input[data-qa='cvc']").type("678");
        cy.get("input[data-qa='expiry-month']").type("09");
        cy.get("input[data-qa='expiry-year']").type("2032");
        cy.get("#submit").click();  
        cy.contains("b","Order Placed!",{timeout: 10000}).should('be.visible');
    }
}

export default CartPage;