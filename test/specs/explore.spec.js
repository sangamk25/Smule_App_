import exploreScreen from "../pageobjects/explore.screen";
import login from "../utility";
import { expect } from "chai";

describe("should click on explore icon and navigate to the explore screen", () => {
  it("login ", async () => {
    await login();
  }).timeout(300000);

  it("should be navigating to the explore screen ", async () => {
    await driver.pause(10000);

    //expect(await exploreScreen.exploreBtn.isDisplayed()).to.be.true;
    //Action

    // await exploreScreen.clickExploreIcon();
    await exploreScreen.exploreBtn.click();
    await exploreScreen.exploreBtn.click();

    //assertion

    expect(await exploreScreen.exploreBtn.isDisplayed()).to.be.true;

    //await exploreScreen.exploreBtn.click();
  }).timeout(300000);

  it("should search for a song", async () => {
    await exploreScreen.clickOnSearchIcon("sad song");
  }).timeout(300000);
});
