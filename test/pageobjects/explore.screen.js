class explore {
  get exploreBtn() {
    return $('//*[@text="Explore"]');
  }

  get searchIcon() {
    return $('//*[@resource-id = "com.smule.singandroid:id/search_icon"]');
  }

  get messageIcon() {
    return $("~Messages");
  }

  get exploreCellSeeAllBtn() {
    return $(
      '//*[@resource-id = "com.smule.singandroid:id/explore_cell_see_all_button"]'
    );
  }

  get editBtn() {
    return $('//*[@resource-id = "com.smule.singandroid:id/search_edit_text"]');
  }

  async clickExploreIcon() {
    await this.exploreBtn.waitforExist({ timeout: 20000 });
    await this.exploreBtn.click();
    await this.exploreBtn.click();
  }

  async clickOnSearchIcon(song) {
    await this.searchIcon.click();

    await this.editBtn.setValue(song);

    await driver.keys("\uE007");
  }
}
export default new explore();
