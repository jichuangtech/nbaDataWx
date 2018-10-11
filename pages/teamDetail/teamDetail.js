// teamDetail.js
var app = getApp();
Page({
    

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0,
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


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var teamId = options.teamId;
        console.log(" teamDetail teamId: " + teamId);
        // this.queryTeam(teamId);
        this.queryTeam(21);
    },

    onTitleCallback: function(e) {
        console.log(" teamDetail onTitleCallback ... e: " + JSON.stringify(e));
        this.cocachItem.say("你好");
    },

    queryTeam: function(teamId) {
        console.log(" queryTeam teamId: " + teamId);
        var that = this;
        wx.request({
            url: app.globalData.config.domain + '/api/team/' + teamId,
            header: {
                'content-type': 'application/json',
            },
            method: 'GET',
            success: function(res) {
                console.log(" queryTeam success: " + JSON.stringify(res.data));
                that.setData({
                    team: res.data.data
                });
                wx.setNavigationBarTitle({
                    title: that.data.team.shortname,
                })
            },
            fail: function() {
                console.error(" 查询赛程信息错误...");
            }
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.cocachItem = this.selectComponent("#cocachItem");
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})