

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import ContactUsPage from '../pages/ContactUsPage';
import TestCasesPage from '../pages/TestCasesPage';
import AccountPage from '../pages/AccountPage';
import { taggedIt, taggedItOnly,  taggedItSkip } from '../support/taggedIt';

 let testdata;

     before(() => {
          cy.fixture('testdata').then((data) => {
               testdata = data;
          });
     });

describe("Automation Exercise", () => {
     const homePage = new HomePage();
     const loginPage = new LoginPage();
     const signupPage = new SignupPage();
     const productsPage = new ProductsPage();
     const productDetailsPage = new ProductDetailsPage();
     const cartPage = new CartPage();
     const contactUsPage = new ContactUsPage();
     const testCasesPage = new TestCasesPage();
     const accountPage = new AccountPage();

    

     taggedIt("Test Case 1: Verify that home page is visible successfully", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          homePage.visit();
          homePage.verifyTitle();
     })


     taggedIt("Test Case 2.Verify signup", ["Smoke Test"], () => {
               cy.allure().tag("Smoke Test");
               const user = testdata.signup[0];
               homePage.visit();
               homePage.clickLogin();
               loginPage.enterSignupName(user.name);
               loginPage.enterSignupEmail(user.email);
               loginPage.clickSignupButton();
               signupPage.selectGender(user.gender);
               signupPage.enterPassword(user.password);
               signupPage.selectDay(user.dob.day);
               signupPage.selectMonth(user.dob.month);
               signupPage.selectYear(user.dob.year);
               signupPage.checkNewsletter();
               signupPage.checkOptin();
               signupPage.enterFirstName(user.firstName);
               signupPage.enterLastName(user.lastName);
               signupPage.enterCompany(user.company);
               signupPage.enterAddress1(user.address1);
               signupPage.enterAddress2(user.address2);
               signupPage.selectCountry(user.country);
               signupPage.enterState(user.state);
               signupPage.enterCity(user.city);
               signupPage.enterZipcode(user.zipcode);
               signupPage.enterMobileNumber(user.mobile);
               signupPage.clickCreateAccount();
               accountPage.verifyAccountCreated();
          });
          


     taggedIt("Test Case 3: Verify that login and logout is successful", ["Smoke Test"],  () => {
          cy.allure().tag("Smoke Test");
          const login = testdata.login[0];
          homePage.visit();
          homePage.clickLogin();
          loginPage.enterLoginEmail(login.email);
          loginPage.enterLoginPassword(login.password);
          loginPage.clickLoginButton();
          loginPage.verifyLoggedIn();
          loginPage.clickLogout();
          cy.url().should('include', 'automationexercise');
     })

     taggedIt("Test Case 4: Delete Account", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          const deleteAccount = testdata.deleteAccount[0];
          homePage.visit();
          homePage.clickLogin();
          loginPage.enterLoginEmail(deleteAccount.email);
          loginPage.enterLoginPassword(deleteAccount.password);
          loginPage.clickLoginButton();
          loginPage.verifyLoggedIn();
          loginPage.clickDeleteAccount();
          accountPage.verifyAccountDeleted();
     })

     taggedIt("Test Case 5: Verify login with incorrect credentials", ["Regression Test"], () => {
          cy.allure().tag("Regression Test");
          const invalidLogin = testdata.invalidLogin[1];
          homePage.visit();
          homePage.clickLogin();
          loginPage.enterLoginEmail(invalidLogin.email);
          loginPage.enterLoginPassword(invalidLogin.password);
          loginPage.clickLoginButton();
          loginPage.verifyLoginError();
     })

     taggedIt("Test Case 6: Verify registration with existing email", ["Regression Test"], () => {
          cy.allure().tag("Regression Test");
          const existingEmail = testdata.existingEmail[0];
          homePage.visit();
          homePage.clickLogin();
          loginPage.enterSignupName(existingEmail.name);
          loginPage.enterSignupEmail(existingEmail.email);
          loginPage.clickSignupButton();
          loginPage.verifyEmailExistsError();
     })

     taggedIt("Test Case 7: Verify contact us form submission", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          const contact = testdata.contactUs[0];
          homePage.visit();
          homePage.verifyTitle();
          homePage.clickContactUs();
          contactUsPage.enterName(contact.name);
          contactUsPage.enterEmail(contact.email);
          contactUsPage.enterSubject(contact.subject);
          contactUsPage.enterMessage(contact.message);
          contactUsPage.attachFile('Testfile.txt');
          contactUsPage.clickSubmit();
          contactUsPage.verifySuccessMessage();
     })

     taggedIt("Test Case 8: Verify Test Cases page", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          homePage.visit();
          homePage.verifyTitle();
          homePage.clickTestCases();
          testCasesPage.verifyTestCasesTitle();
     })

     taggedIt("Test Case 9: Verify products page and product details", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          const product = testdata.product[0];
          homePage.visit();
          homePage.verifyTitle();
          homePage.clickProducts();
          productsPage.verifyAllProductsTitle();
          productsPage.clickProductByName(product.name);
          productDetailsPage.verifyProductInformationVisible();
          productDetailsPage.verifyProductName(product.name);
          productDetailsPage.verifyProductPrice(product.price);
          productDetailsPage.verifyProductAvailability(product.availability);
          productDetailsPage.verifyProductCondition(product.condition);
          productDetailsPage.verifyProductBrand(product.brand);
     })

     taggedIt("Test Case 10: Verify search functionality", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          homePage.visit();
          homePage.verifyTitle();
          homePage.clickProducts();
          const searchinput = "Tshirt";
          productsPage.searchProduct(searchinput);
          productsPage.verifySearchedProductsTitle();
          productsPage.verifySearchResults(searchinput);
     })

     taggedIt("Test Case 11: Verify subscription to newsletter", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          const newsletterEmail = testdata.newsletter[0];
          homePage.visit();
          homePage.verifyTitle();
          homePage.subscribeToNewsletter(newsletterEmail.email);
          homePage.verifySubscriptionSuccess();
     })

     taggedIt("Test Case 12: Verify that user can add products to cart", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          homePage.visit();
          homePage.verifyTitle();
          homePage.clickProducts();
          const productcount = 2;
          let productNames = [];
          let productPrices = [];
          cy.get('.product-image-wrapper').each(($el, index) => {
               if (index < productcount) {
                    const product = $el.find('.productinfo p').text();
                    const price = $el.find('.productinfo h2').text();
                    productNames.push(product);
                    productPrices.push(price);
               }
          }).then(() => {
               productsPage.addFirstNProductsToCart(productcount);
               cartPage.verifyCartInfoVisible();
               cartPage.verifyCartProducts(productNames);
               cartPage.verifyCartPrices(productPrices);
          });
     })

     taggedIt("Test Case 13: Verify Checkout process", ["Smoke Test"], () => {
          cy.allure().tag("Smoke Test");
          cy.allure().step("Visit Website and add products to cart");
          const productname = testdata.product[1];
          homePage.visit();
          homePage.verifyTitle();
          homePage.clickProducts();
          productsPage.addProductToCartByName(productname.name);
          productsPage.verifyAddedToCart();

          cy.allure().step("View Cart and proceed to checkout");
          productsPage.clickViewCart();
          cartPage.verifyCartInfoVisible();
          cartPage.clickCheckout();

          cy.allure().step("Login to checkout and place order");
          cartPage.loginToCheckout("test2893@gmail.com", "test123");
          const productName1 = testdata.product[2];
          productsPage.addProductToCartByName(productName1.name);
          productsPage.verifyAddedToCart();
          productsPage.clickViewCart();
          cartPage.clickCheckout();
          cartPage.verifyCheckoutPage();
          cartPage.clickPlaceOrder();

          cy.allure().step("Enter payment details and confirm order");
          cartPage.addPaymentDetails();

     })
})
