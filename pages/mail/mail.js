// pages/mail/mail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  zhanghao:"",
  titLe:"",
  conTent:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var shoudao = options.mailnum;
    console.log(shoudao);
    var  that = this;
    that.setData({zhanghao:shoudao})
  },


  titleClick:function(event)
  {
    /*console.log(event)*/
    console.log(event.detail.value)
    var tneirong = event.detail.value
    var that = this
    that.setData({ titLe: tneirong})
  },


  contentClick: function (event) {
    /*console.log(event)*/
    console.log(event.detail.value);
    var cneirong = event.detail.value;
    var that = this;
    that.setData({conTent:cneirong })
  },

  sendClick:function(event)
  {
    var that = this;
    console.log(that.data.zhanghao,that.data.titLe,that.data.conTent);
    wx.request({
      url: app.globalData.serverurl +'/sendMail',
      data:
       {
         "mailzhanghao": that.data.zhanghao,
         "mailbiaoti": that.data.titLe,
         "mailneirong": that.data.conTent,
       },
      method:"get",
      header:{"content-type":"application/json"},
      success:function(response)
      {
        console.log("发送成功")
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