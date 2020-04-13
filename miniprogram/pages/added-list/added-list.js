// pages/added-list/added-list.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addedZhubo:[]
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
    db.collection('picked').get().then(res => {
      this.setData({
        addedZhubo: res.data
      })
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