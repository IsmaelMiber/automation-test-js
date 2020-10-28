const LoginPageElements = require("../../Pages/LoginPage/elements");

describe('Login scenario (partly)', () => {
    it('test', () => {
        driver.pause(10000);
        LoginPageElements.phoneInput().click();
        LoginPageElements.phoneInput().addValue(123);
        driver.pause(20000);
    });
});

