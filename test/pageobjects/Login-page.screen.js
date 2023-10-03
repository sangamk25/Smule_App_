class Login {
  get scrollToLanguage() {
    return $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("English")'
    );
  }

  get okBtn() {
    return $('//*[@resource-id="com.smule.singandroid:id/yesButton"]');
  }

  get emailBtn() {
    return $('//*[@resource-id ="com.smule.singandroid:id/email_button_view"]');
  }

  get editFieldButton() {
    return $('//*[@resource-id = "com.smule.singandroid:id/editField"]');
  }

  get nextBtn() {
    return $('//*[@resource-id = "com.smule.singandroid:id/btn_next"]');
  }

  get userPassword() {
    return $('//*[@text="your password"]');
  }

  get nextButton() {
    return $('//*[@resource-id = "com.smule.singandroid:id/btn_next"]');
  }
}
module.exports = new Login();
