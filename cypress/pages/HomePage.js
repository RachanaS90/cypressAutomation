class HomePage {
    visit() {
        cy.visit('https://automationexercise.com/');
    }

    verifyTitle() {
        cy.title().should('eq', 'Automation Exercise');
    }

    clickLogin() {
        cy.get("a[href='/login']").click();
    }

    clickProducts() {
        cy.get("a[href='/products']").click();
        cy.contains('h2', 'All Products').should('be.visible');
    }

    clickContactUs() {
        cy.get("a[href='/contact_us']").click();
    }

    clickTestCases() {
        cy.contains('a', 'Test Cases').click();
    }

    subscribeToNewsletter(email) {
        cy.get("#susbscribe_email").type(email);
        cy.get("#subscribe").click();
    }

    verifySubscriptionSuccess() {
        cy.contains("div", "You have been successfully subscribed!", { timeout: 10000 }).should('be.visible');
    }
}

export default HomePage;