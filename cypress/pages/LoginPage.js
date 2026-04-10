class LoginPage {
    visit() {
        cy.visit('https://automationexercise.com/login');
    }

    // Signup form
    enterSignupName(name) {
        cy.get("input[data-qa='signup-name']").type(name);
    }

    enterSignupEmail(email) {
        cy.get("input[data-qa='signup-email']").type(email);
    }

    clickSignupButton() {
        cy.get("button[data-qa='signup-button']").click();
    }

    // Login form
    enterLoginEmail(email) {
        cy.get("input[data-qa='login-email']").type(email);
    }

    enterLoginPassword(password) {
        cy.get("input[data-qa='login-password']").type(password);
    }

    clickLoginButton() {
        cy.get("button[data-qa='login-button']").click();
    }

    // Verifications
    verifyLoggedIn() {
        cy.contains('a', 'Logged in as', { timeout: 10000 }).should('be.visible');
    }

    verifyLoginError() {
        cy.contains('p', 'Your email or password is incorrect!', { timeout: 10000 }).should('be.visible');
    }

    verifyEmailExistsError() {
        cy.contains('p', 'Email Address already exist!', { timeout: 10000 }).should('be.visible');
    }

    // Actions
    clickLogout() {
        cy.get("a[href='/logout']").click();
    }

    clickDeleteAccount() {
        cy.get("a[href='/delete_account']").click();
    }
}

module.exports = LoginPage;