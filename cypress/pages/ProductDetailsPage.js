class ProductDetailsPage {
    verifyProductInformationVisible() {
        cy.get(".product-information").should('be.visible');
    }

    verifyProductName(name) {
        cy.get(".product-information h2").should('have.text', name);
    }

    verifyProductPrice(price) {
        cy.contains("span", price).should('be.visible');
    }

    verifyProductAvailability(availability) {
        cy.contains("p", availability).should('be.visible');
    }

    verifyProductCondition(condition) {
        cy.get(".product-information p").should('contain.text', condition);
    }

    verifyProductBrand(brand) {
        cy.contains("p", brand).should('be.visible');
    }
}

module.exports = ProductDetailsPage;