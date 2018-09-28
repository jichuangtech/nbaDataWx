// pages/scheduleDetail/scheduleDetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 1,
    schedule:{},
    currentTab:0,
    articles:[],
    photoDomain: app.globalData.config.photoDomain,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(" onLoad options: " + JSON.stringify(options));
    // this.querySchedule(options.scheduleId);
    // this.queryArticles(options.scheduleId);
    this.querySchedule("12707");
    this.queryArticles("12707");
  },

  queryArticles: function (scheduleId) {
    var that = this;
    console.log(" queryArticles scheduleId: " + scheduleId);
    wx.request({
      url: app.globalData.config.domain + '/api/article/byBelongMatch?scheduleId=' + scheduleId,
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      success: function (res) {
        console.log(" queryArticles success: " + JSON.stringify(res.data));
        that.setData({
          articles: res.data.data
        });
       
      },
      fail: function () {
        console.error(" 查询文章出错...");
      }
    });
  },

  clickTab: function(event) {    
    var current = event.currentTarget.dataset.current;
    console.log(" clickTab current: " + current);
    this.setData({
      currentTab: current
    });
    
  },

  swiperTab: function(event) {
    var current = event.detail.current;
    console.log(" swiperTab current: " + current);
    this.setData({
      currentTab: current
    });
  },

  querySchedule: function(scheduleId) {
    var that = this;
    console.log(" querySchedule scheduleId: " + scheduleId);
    wx.request({
      url: app.globalData.config.domain + '/api/matchResult/' + scheduleId,
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      success: function (res) {
        console.log(" querySchedule success: " + JSON.stringify(res.data));
        that.setData({
          schedule: res.data.data
        });
        var homeVsAway = that.data.schedule.homeTeamName 
                + "(主)VS" + that.data.schedule.awayTeamName ;
        wx.setNavigationBarTitle({
          title: homeVsAway,
        })
      },
      fail: function () {
        console.error(" 查询赛程信息错误...");
      }
    });
  },

  gotoArticleDetail: function(event) {
    var articleId = event.currentTarget.dataset.articleId;
    console.log(" gotoArticleDetail articleId: " + articleId);
    wx.navigateTo({
      url: '../articleDetail/articleDetail?articleId=' + articleId
    })
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