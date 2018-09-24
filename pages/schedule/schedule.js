// pages/schedule/schedule.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2014-11-04",
    status: 3,
    scheduleInfo: [
    ]
    
  },

  onLeftNavClick: function() {
    console.log("onLeftNavClick");
  },

  onRightNavClick: function () {
    console.log("onRightNavClick");
  },

  //获取被点击View所绑定的数据的方式
  showTeamDetail: function(event) {
    var teamName = event.currentTarget.dataset.teamname;
    var teamId = event.currentTarget.dataset.teamid;
    console.log(" showTeamDetail teamName: " + teamName + ", teamId: " + teamId);
    wx.showToast({
      title: teamName,
      icon: 'success',
      duration: 2000
    });

    wx.navigateTo({
      url: '../teamDetail/teamDetail?teamName=' + teamName + "&teamId=" + teamId
    })
  },

  onDateChange: function(event) {
    
    // console.log(" datechange : " + JSON.stringify(event));
    console.log(" datechange : " + event.detail.value);
    this.setData({
      date: event.detail.value
    });

    this.getSchedule();
  },

  showUnDevTip() {
    wx.showToast({
      title: "建设中",
      icon: 'loading',
      duration: 2000
    });
  },

  showGameProspect: function() {
    this.showUnDevTip();
  },

  liveGame: function () {
    this.showUnDevTip();
  },

  showGameStatus: function () {
    this.showUnDevTip();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.getSchedule();
  },

  getSchedule: function() {
    console.log(" getSchedule show")
    var that = this;
    wx.request({
      url: app.globalData.config.domain + '/api/matchResult/' + this.data.date,
      header: {
        'content-type': 'application/json',
      },
      method: 'GET',
      success: function (res) {
        var statusCode = res.data.statusCode;
        if (app.isShouldLogin(statusCode)) {
          app.doLogin(function () {
            that.getOrderList();
          });
        } else if (app.isSuccess(statusCode)) {
          console.log(" get list success: " + JSON.stringify(res))
          if (res.data.data.length != 0) {
            that.setData({
              scheduleInfo: res.data.data,
              loadMark: false
            });
          } else {
            that.setData({
              orderList: res.data.data,
              loadMark: true,
              loadTip: "暂时无对应的数据"
            });
          }
        } else {
          app.showToast('嗷嗷，订单查询失败~', that);
          console.error("get order error msg: " + res.data.msg);
        }
      },
      fail: function () {
        that.setData({
          loadMark: true,
          loadTip: "数据加载失败"
        });
      }
    });
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