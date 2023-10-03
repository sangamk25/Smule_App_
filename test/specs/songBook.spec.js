import songBookScreen from "../pageobjects/songBook.screen";
import login from "../utility";
import { expect } from "chai";

describe(" SongBook Screen test", () => {
  it("login ", async () => {
    await login();
  }).timeout(300000);

  it("should navigate to the songbook page", async () => {
    await driver.pause(10000);

    expect(await songBookScreen.songbookButton.isDisplayed()).to.be.true;

    await songBookScreen.songbookButton.click();

    expect(await songBookScreen.songbookButton.isDisplayed()).to.be.true;

    await songBookScreen.songbookButton.click();
  }).timeout(300000);

  it("should search for a song ", async () => {
    await songBookScreen.clickOnSearchIcon("Jai ho");
  }).timeout(300000);
});
