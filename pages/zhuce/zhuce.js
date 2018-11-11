// pages/zhuce/zhuce.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    sex:"",
    phone:"",
    mail:"",
    imagePath: ""
  },

  nameInput: function (event) {
    console.log(event.detail.value)
    var nameinput = event.detail.value;
    var that = this;
    that.setData({ name: nameinput })
  },
  sexInput: function (event) {
    console.log(event.detail.value)
    var sexinput = event.detail.value;
    var that = this;
    that.setData({ sex: sexinput })
  },
  phoneInput: function (event) {
    console.log(event.detail.value)
    var phoneinput = event.detail.value;
    var that = this;
    that.setData({ phone: phoneinput })
  },
  mailInput: function (event) {
    console.log(event.detail.value)
    var mailinput = event.detail.value;
    var that = this;
    that.setData({ mail: mailinput })
  },

  btnClick:function(event)
  {
    //console.log(event)
    var that=this
    wx.request({
      url: app.globalData.serverurl+'/zhuce',
      method:"get",
      data:{
      "name":that.data.name,
      "sex":that.data.sex,
      "phone":that.data.phone,
      "mail":that.data.mail
      },
      header:{"content-type":"application/json"},
      /*success:function(response)
      {
        //console.log(response.data.result)
        console.log("注册成功！")
      }*/
    })
  },


  uploadClick: function (event) {
    var that = this
    //微信小程序提供了选择的方法 
    wx.chooseImage({

      //选择的个数:最多可以是9
      count: 1,

      //选择图片是原图或者是压缩图
      sizeType: ["compressed"],

      //选择来源:本地相册和相机
      sourceType: ["album", "camera"],

      success: function (res) {
        //选择的图片
        var tempPaths = res.tempFilePaths;
        console.log("选择本地图片：" + tempPaths);
        //显示图片
        that.setData({ imagePath: tempPaths[0] });
        //把显示的图片上传
        uploadimg(tempPaths[0]);
      },
    })

    //上传图片的方法
    function uploadimg(path) {
      //弹出对话框
      wx.showToast({
        icon: "Loading",
        //图表的值是固定的
        title: '正在上传',
      })
      //开始进行图片上传
      wx.uploadFile({
        //路径
        url: app.globalData.serverurl + '/uploadfile',
        filePath: path,
        //服务端是根据这个名字来获取上传图片
        name: 'fileimg',
        //二进制流的来读取post请求
        header: ({ "content-type": "multipart/form-data" }),
        success: function (response) {
          console.log(response.data)
        }
      })
    }
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