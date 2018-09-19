// pages/join/join.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tell () {
    wx.makePhoneCall({
      phoneNumber: '18200295560',
      success: function(res) {
        console.log(res)
        // success
      }
    })
  }

})