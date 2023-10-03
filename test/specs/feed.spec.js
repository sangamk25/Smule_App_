import loginPage from "../pageobjects/Login-page.screen";
import feedPage from "../pageobjects/feed.screen";
import login from "../utility";
import { expect } from "chai";

describe("should be click on feed screen and navigate to the feed screen ", () => {
  it("login ", async () => {
    await login();
  }).timeout(300000);

  it("navigate to feed and click ", async () => {
    await driver.pause(10000);

    expect(await feedPage.feedBtn.isDisplayed()).to.be.true;

    await feedPage.feedBtn.click();

    expect(await feedPage.feedBtn.isDisplayed()).to.be.true;

    await feedPage.feedBtn.click();

    //  await feedPage.scrollToFeedPage;

    //  await feedPage.msgBtn.click();

    //  await feedPage.otherBtn.click();
  }).timeout(300000);

  it("should play the song ", async () => {
    await feedPage.playSong();

    const isSongplaying = await feedPage.isSongplaying();
    await expect(isSongplaying).to.be.true;

    await driver.pause(12000);
    await feedPage.exitPlaying();
  }).timeout(300000);
});
