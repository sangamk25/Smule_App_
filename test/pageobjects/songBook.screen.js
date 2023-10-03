class songBook {
  get songbookButton() {
    return $("~Songbook");
  }

  get SearchIcon() {
    return $(
      '//*[@resource-id = "com.smule.singandroid:id/pre_search_left_button"]'
    );
  }

  get SearchEditTextIcon() {
    return $('//*[@resource-id = "com.smule.singandroid:id/search_edit_text"]');
  }

  async clickOnSearchIcon(input) {
    await this.SearchIcon.click();

    await this.SearchEditTextIcon.setValue(input);

    await driver.keys("\uE007");
  }
}

export default new songBook();
