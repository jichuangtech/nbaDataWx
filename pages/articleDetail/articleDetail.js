// teamDetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photoDomain: app.globalData.config.photoDomain,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      ...options
    });
    this.queryArticle(this.data.articleId);
  },

  queryArticle: function (articleId) {
    var that = this;
    console.log(" queryArticle articleId: " + articleId);
    wx.request({
      url: app.globalData.config.domain + '/api/article/' + articleId,
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      success: function (res) {
        console.log(" queryArticle success: " + JSON.stringify(res.data));
        that.setData({
          article: res.data.data
        });

      },
      fail: function () {
        console.error(" 查询文章出错...");
      }
    });
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})