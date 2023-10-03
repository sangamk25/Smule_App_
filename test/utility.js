const loginPage = require("./pageobjects/Login-page.screen");

const login = async () => {
  await loginPage.scrollToLanguage.click();
  await loginPage.okBtn.click();
  await loginPage.emailBtn.click();
  await loginPage.editFieldButton.setValue("sangam2522000@gmail.com");

  await loginPage.nextBtn.click();

  await loginPage.userPassword.setValue("Vidya@25");
  await loginPage.nextButton.click();
};

export default login;
