// pages/shouye /shouye.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbotu: "",
    code: "",
    name: "",
    pwd: "",
    yzm: "",
    changecode: "",
    result: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },


  nameInput: function (event) {
    console.log(event.detail.value)
    var nameinput = event.detail.value;
    var that = this;
    that.setData({ name: nameinput })
  },


  pwdInput: function (event) {
    console.log(event.detail.value)
    var pwdinput = event.detail.value;
    var that = this;
    that.setData({ pwd: pwdinput })
  },


  codeInput: function (event) {
    console.log(event.detail.value)
    var yzminput = event.detail.value;
    var that = this;
    that.setData({ yzm: yzminput })
  },


  codeClick: function (event) {
    var that = this
    wx.request({
      url: app.globalData.serverurl + '/change',
      method: "get",
      header: { "content-type": "application/json" },
      success: function (response) {
        console.log(response.data)
        var change = response.data.Code
        that.setData({ changecode: change })
      }
    })

  },


  btnClick0:function(event)
  {
    wx.navigateTo({
      url: '../zhuce/zhuce',
    })
  },


  btnClick: function (event) {
    var that = this;
    var codeInput = that.data.yzm;
    var codeValue = that.data.changecode;
    if (codeInput == codeValue) {
      wx.request({
        url: app.globalData.serverurl + '/login',
        data: { "username": that.data.name, "userpwd": that.data.pwd },
        method: "get",
        header: { "content-type": "application/json" },
        success: function (response) {
          console.log(response.data.loginFlag);
          var result = response.data.loginFlag;

          if (result == "None") {
            that.setData({ result: "登陆失败" });
          }
          else if (result == "10") {
            that.setData({ result: "您的状态不正常" })
          }
          else {
            wx.navigateTo({
              url: '../geren/geren?cname=' + result
            })
          }
        }
      })

    }
    else {
      console.log("验证码输入不正确，请检查")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.serverurl + '/lunbo',
      header: { "content-type": "application/json" },
      method: "get",
      success: function (response) {
        console.log(response.data)
        var lunb = response.data[0].lun
        /* console.log(response.data.lun)*/
        var yanz = response.data[1].Code
        /*console.log(response.data.Code)*/
        that.setData({ lunbotu: lunb, code: yanz })
      }
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