const LoginPage = require('../pages/LoginPage');
const loginPage = new LoginPage();

describe('Verifying Login And Logout Flows', function () {

    it('Valid Login @sanity', function () {
        console.log('User On LoginPage will enter valid credentials');
        loginPage.enterLoginDetails("client_template", "client.template@fabacus.com", "password1");
        loginPage.isHomePage();
        loginPage.logout();
    });

    it('InValid Login', function () {
        console.log('User On LoginPage will enter invalid credentials');
        loginPage.enterLoginDetails('company', 'abc@gmail.com', 'password');
        loginPage.isLoginPage();
    });

});