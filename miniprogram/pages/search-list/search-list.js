// miniprogram/pages/search-list/search-list.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currCategory: [],
    isPickedName: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取已经关注的数据
    var that = this;
    that.updatePickedName();

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

  },
  /**
    *更新关注主播名单
    */
  updatePickedName: function () {
    db.collection('picked').get().then((res) => {
      var temp = []
      res.data.forEach((item) => {
        temp.push(item.broadcaster)
      })
      this.setData({
        isPickedName: temp
      })
    })
  },
  isInPickedName: function (res) {
    res.data.forEach((item) => {
      if (this.data.isPickedName.indexOf(item.broadcaster) != -1) {
        item.isPicked = 1
      }
    })
  },
  search(e){
    console.log("lalal " + this.data.isPickedName);
    let inputV = e.detail.value
    db.collection('anchor').where({
      broadcaster: {
        $regex: '.*' + inputV + '.*',
        $options: 'i'
      }
    }).get().then(res => {
      this.isInPickedName(res);
      this.setData({
        currCategory: res.data
      })
    })
  },
  // 切换改变是否关注
  switch1Change(e) {
    var data = this.data.currCategory[e.target.id]
    if (!e.detail.value) {
      //当取消关注时，要把展示列表项中的switch开关标志清空
      db.collection('picked').doc(data._id).remove().then(res => {
        var str = 'currCategory[' + e.target.id + '].isPicked'
        this.setData({
          [str]: ''
        })
        wx.showToast({
          title: '关注已取消',
          icon: 'none',
          image: '../../images/close.png'
        })
      })
    }
    //当选择关注时，要把要把展示列表项中的switch开关标志打开，
    //方便在主页不同平台转换时保证switch的正常状态
    else {
      var str = 'currCategory[' + e.target.id + '].isPicked'
      this.setData({
        [str]: 1
      })
      db.collection('picked').add({
        data: data
      })
        .then(res => {
          wx.showToast({
            title: '主播已关注',
            icon: 'success',
          })
        })
    }
  },
})