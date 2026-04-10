class ProductsPage {
    visit() {
        cy.visit('https://automationexercise.com/products');
    }

    verifyAllProductsTitle() {
        cy.get("h2[class='title text-center']").should('have.text', 'All Products');
    }

    searchProduct(searchTerm) {
        cy.get("#search_product").type(searchTerm);
        cy.get("#submit_search").click();
    }

    verifySearchedProductsTitle() {
        cy.contains("h2", "Searched Products").should('be.visible');
    }

    verifySearchResults(searchTerm) {
        cy.get(".product-image-wrapper").each($el => {
            const product = $el.find('.productinfo p').text().toLowerCase().replace(/[-\s]/g, '');
            cy.log(`Product: ${product}`);
            expect(product).to.contains(searchTerm.toLowerCase().replace(/[-\s]/g, ''));
        });
    }

    clickProductByName(productName) {
        cy.get(".product-image-wrapper").each(($el, index, $list) => {
            const product = $el.find('.productinfo p').text();
            cy.log(`Product ${index + 1}: ${product}`);
            if (product === productName) {
                cy.wrap($el).find("a[href*='/product_details']").click();
            }
        });
    }

    addProductToCartByName(productName) {
        cy.get('.product-image-wrapper').each(($el) => {
            const product = $el.find('.productinfo p').text();     
            if (product === productName) {
                cy.wrap($el).find('a.add-to-cart').first().click({ force: true });
            }
        });
    }

    addFirstNProductsToCart(count) {
        cy.get('.product-image-wrapper').each(($el, index) => {
            if (index < count) {
                cy.wrap($el).find('a.add-to-cart').first().click({ force: true });
                cy.contains("h4", "Added!").should('be.visible');

                if (index < count - 1) {
                    cy.get(".btn.btn-success.close-modal.btn-block", { timeout: 10000 }).click();
                } else {
                    cy.get("a[href='/view_cart'] u").click();
                }
            }
        });
    }

    verifyAddedToCart() {
        cy.contains("h4", "Added!", { timeout: 10000 }).should('be.visible');
    }

    clickViewCart() {
        cy.get("a[href='/view_cart'] u").click();
    }
}
module.exports = ProductsPage;