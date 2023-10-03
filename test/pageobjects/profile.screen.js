class profile {
  get profileBtn() {
    return $(
      '//*[@resource-id = "com.smule.singandroid:id/menu_item_profile"]'
    );
  }

  get channelBtn() {
    return $('//*[@text="Channel"]');
  }

  get invitesBtn() {
    return $('//*[@text="Invites"]');
  }

  get playlistBtn() {
    return $('//*[@text="Playlists"]');
  }

  get aboutBtn() {
    return $('//*[@text="About"]');
  }

  get editBtn() {
    return $('//*[@resource-id = "com.smule.singandroid:id/btn_edit_profile"]');
  }
}
export default new profile();
