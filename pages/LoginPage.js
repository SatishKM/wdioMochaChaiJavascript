const signInText = '.h1.h1--dark';
const companyId_TextBox = '#login-company-id';
const email_TextBox = '#login-email';
const password_TextBox = '#login-password';
const login_Btn = '.c-button.c-button--pink.c-button--fat';
const logout_Btn = '[class=\'c-site-header__control c-site-header__sign-out\']';
const welcomeText = '.c-welcome-brochure__title--bold=Fabacus';

let BasePage = require('../pages/BasePage');
let basePage = new BasePage();

let assert = require('assert');

class LoginPage {

    enterLoginDetails(companyId, email, password) {
        basePage.enterText(companyId_TextBox, companyId);
        basePage.enterText(email_TextBox, email);
        basePage.enterText(password_TextBox, password);
        browser.execute(() => document.getElementById('terms').click());
        basePage.clickOn(login_Btn);
    }

    isHomePage() {
        let message = basePage.getTextFromWeb(welcomeText);
        assert.equal(message , "Fabacus");
    }

    isLoginPage(){
        basePage.getTextFromWeb(signInText).should.be.equal('Sign In');
    }

    logout() {
        basePage.clickOn(logout_Btn);
        this.isLoginPage();
    }
}

module.exports = LoginPage;