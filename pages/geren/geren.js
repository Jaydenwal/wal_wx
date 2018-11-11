// pages/geren/geren.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    imgview: {},
    flag: false
  },

  mailClick: function (event) {
    /*console.log(event)*/
    console.log(event.currentTarget.dataset.mail)
    var mailValue = event.currentTarget.dataset.mail;

    wx: wx.navigateTo({
      url: '../mail/mail?mailnum=' + mailValue,
    })
  },

  

  numbClick: function (event) {
    /* console.log(event)*/
    var diadia = event.currentTarget.dataset.number
    wx.makePhoneCall({
      phoneNumber: diadia,
      success:function(res){
        console.log("呼叫成功！")
      }
    })
  },


  nameInput: function (event) {
    /**console.log(event)**/
    var that = this;
    console.log(event.detail.value);
    var name = event.detail.value;
    
    that.setData({ username: name })
  },

  btnClick: function (event) {
    //console.log(that.data.uesrname)
    var that = this;


    //向python服务器发起请求，查询这个人的相关信息
    wx.request({
      url: app.globalData.serverurl+'/ser',
      data:{"delive":that.data.username},
      header:{"content-type":"application/json"},
      success:function(re)
      {
        that.setData({ imgview:re.data.dada})

      }
    })
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