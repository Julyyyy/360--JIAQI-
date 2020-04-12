// pages/added-list/added-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addedZhubo:[{
      name:'李佳琪',
      plateforem:'淘宝',
      img:'https://tvax4.sinaimg.cn/crop.0.0.512.512.180/7558df23ly8gdir9ocve8j20e80e8gm4.jpg?KID=imgbed,tva&Expires=1586689918&ssig=hC%2FGMzIN1V',
      description:'斗鱼绝地求生女主播',
      lable:'带货',
      title:'美妆pick',
      status:true,
      setAlarm:false
    },
    {
      name:'一只小团团OvO',
      plateforem:'斗鱼TV',
      img:'https://apic.douyucdn.cn/upload/avatar_v3/201810/7bdc0080915292eac70eaa41f950792b_big.jpg',
      description:'美ONE签约达人 知名美妆博主 时尚美妆视频自媒体',
      lable:'绝地求生',
      title:'今晚带粉丝上分',
      status:true,
      setAlarm:false
    }]
  },

  switch1Change:function(e){
    // this.data.addedZhubo[e.target.id]=e.detail.value;
    var str='addedZhubo['+e.target.id+'].alarm';
    this.setData({
      [str]:e.detail.value
    })
    if(this.data.addedZhubo[e.target.id].alarm)(
      wx.showModal({
        title: '提示',
        content: '开播前5分钟将发送提醒，可在我的看单设置提醒时间',
        // icon: 'success',
    })
    )
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