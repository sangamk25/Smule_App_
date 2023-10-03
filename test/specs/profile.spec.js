import profilePage from "../pageobjects/profile.screen";
import login from "../utility";
import { expect } from "chai";

describe("Profile Screen Test ", async () => {
  it("login ", async () => {
    await login();
  }).timeout(300000);

  it("Click on the profile page", async () => {
    await driver.pause(10000);

    // Action

    await profilePage.profileBtn.click();
    await profilePage.profileBtn.click();

    // assertion

    expect(await profilePage.profileBtn.isDisplayed()).to.be.true;

    await driver.pause(5000);
  }).timeout(300000);

  it("should navigate inside the profile page", async () => {
    await profilePage.invitesBtn.click();
    await profilePage.playlistBtn.click();
    await profilePage.aboutBtn.click();
    await profilePage.editBtn.click();
  }).timeout(300000);
});
