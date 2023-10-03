class feed {
  get feedBtn() {
    return $("~Feed, New notification");
  }

  get scrollToFeedPage() {
    return $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    );
  }

  get msgBtn() {
    return $('//*[@resource-id = "com.smule.singandroid:id/messageIcon"]');
  }

  get otherBtn() {
    return $('//*[@text="Other"]');
  }

  async clickFeedIcon() {
    await this.feedBtn.waitforExist({ timeout: 20000 });
    await this.feedBtn.click();
    await this.feedBtn.click();
  }

  async playSong() {
    const temp = await $(
      '//*[@resource-id = "com.smule.singandroid:id/album_art_play_button_overlay"]'
    );
    return temp.click();
  }

  async isSongplaying() {
    const playingSong = await $('//*[@text = "Now Playing"]');
    await playingSong.waitForExist({ timeout: 10000 });
    return await playingSong.isDisplayed();
  }

  async exitPlaying() {
    await $('//*[@resource-id = "com.smule.singandroid:id/btnBack"]').click();
  }

  // async searchForpeople (){

  //     const getstart = await $('//*[@text = ""]');
  // }
}

export default new feed();
