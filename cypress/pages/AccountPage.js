class AccountPage {
    verifyAccountCreated() {
        cy.get("h2[class='title text-center']", { timeout: 10000 }).should('have.text', 'Account Created!');
    }

    verifyAccountDeleted() {
        cy.get("h2[class='title text-center']", { timeout: 10000 }).should('have.text', 'Account Deleted!');
    }
}

module.exports = AccountPage;