// teamDetail.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 0,
        years: ['2016-2017', '2017-2018', '2018-2019'],
        yearIndex: 0,
        matchkinds: ["常规赛", "季后赛", "季前赛"],
        matchkindIndex: 0,
        teamStat: [],
        teamSummary: "待补充中",
        testData: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

    onYearChange: function(event) {
        console.log(" onYearChange event: " + JSON.stringify(event));
        this.setData({
            yearIndex: event.detail.value
        }, this.refreshTeamStateInfo);
    },

    onMatchKindChange: function(event) {
        console.log(" onMatchKindChange event: " + JSON.stringify(event));
        this.setData({
            matchkindIndex: event.detail.value
        }, this.refreshTeamStateInfo);
    },

    refreshTeamStateInfo: function() {
        console.log(" refreshTeamDataInfo ... ")
        this.queryTeamStat(21,
            this.data.years[this.data.yearIndex],
            parseInt(this.data.matchkindIndex) + 1);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var teamId = options.teamId;
        console.log(" teamDetail teamId: " + teamId);
        // this.queryTeam(teamId);
        this.queryTeam(21);

        this.refreshTeamStateInfo();
    },

    onTitleCallback: function(e) {
        console.log(" teamDetail onTitleCallback ... e: " + JSON.stringify(e));
        this.cocachItem.say("你好");
    },

    queryTeamStat(teamId, season, matchKind) {
        console.log(" queryTeamStat teamId: " + teamId +
            ", season: " + season +
            ", matchKind: " + matchKind);
        var that = this;
        wx.request({
            url: app.globalData.config.domain + '/api/teamSate/byTeamIdAndSeason?teamId=' + teamId + "&season=" + season + "&matchKind=" + matchKind,
            header: {
                'content-type': 'application/json',
            },
            method: 'GET',
            success: function(res) {
                console.log(" queryTeamStat success: " + JSON.stringify(res.data));
                that.setData({
                    teamStat: res.data.data
                });

            },
            fail: function() {
                console.error(" 查询球队数据失败...");
            }
        });
    },

    onScrolltolower: function(e) {

        var tmpData = this.data.testData.concat(this.data.testData);
        
        console.log("底部 tmpData" + JSON.stringify(tmpData));
        this.setData({
            testData: tmpData
        })
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
                }, function() {
                    wx.setNavigationBarTitle({
                        title: that.data.team.shortname,
                    })
                });

            },
            fail: function() {
                console.error(" 查询球队信息错误...");
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