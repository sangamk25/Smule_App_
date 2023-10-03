// import loginPage from "../pageobjects/Login-page.page";
const loginPage = require("../pageobjects/Login-page.screen");

describe("Smule Test", () => {
  it("Checking Features of Smule applic ation and Select Language ", async () => {
    await loginPage.scrollToLanguage.click();
    await loginPage.okBtn.click();
    await loginPage.emailBtn.click();

    await loginPage.editFieldButton.setValue("sangam2522000@gmail.com");

    await loginPage.nextBtn.click();

    await loginPage.userPassword.setValue("Vidya@25");
    await loginPage.nextButton.click();

    await driver.pause(5000);
  }).timeout(300000);
});
