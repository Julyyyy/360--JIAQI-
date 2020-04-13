const db = wx.cloud.database()
// miniprogram/pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryRow: [{
        pic: "../../images/home/bilibili.png",
        title: "B站"
      },
      {
        pic: "../../images/home/douyu.png",
        title: "斗鱼"
      },
      {
        pic: "../../images/home/taobao.png",
        title: "淘宝"
      },
      {
        pic: "../../images/home/school.png",
        title: "高校"
      },
    ],
    bnrUrl: [{
        url: "../../images/home/swiperKPL.png"
      },
      {
        url: "../../images/home/swiperLJQ.png"
      },
      {
        url: "../../images/home/swiperLPL.png"
      },
      {
        url: "../../images/home/swiperSchool.png"
      }
    ],
    currCategory: [],
    currCategoryIndex: 0 //默认展示第一个B站

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    db.collection('anchor').where({
      platname: 'B站'
    }).get().then(res => {
      this.setData({
        currCategory: res.data
      })
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  },

  chooseCategoryType(event) {
    const index = event.currentTarget.dataset.index;
    console.log("index: " + index);
    this.setData({
      currCategoryIndex: index
    })
    switch(index){
      case 0:
        db.collection('anchor').where({
          platname: 'B站'
        }).get().then(res => {
          this.setData({
            currCategory: res.data
          })
        })
      break;
      case 1:
        db.collection('anchor').where({
          platname: '斗鱼直播'
        }).get().then(res => {
          this.setData({
            currCategory: res.data
          })
        })
      break;
      case 2:
        db.collection('anchor').where({
          platname: '淘宝直播'
        }).get().then(res => {
          this.setData({
            currCategory: res.data
          })
        })
      break;
      case 3:
        db.collection('anchor').where({
          platname: '高校'
        }).get().then(res => {
          this.setData({
            currCategory: res.data
          })
        })
      break;
    }
  },
  switch1Change(e){
    // this.data.addedZhubo[e.target.id]=e.detail.value;
    var str = 'addedZhubo[' + e.target.id + '].alarm';
    this.setData({
      [str]: e.detail.value
    })
    if (this.data.addedZhubo[e.target.id].alarm) (
      wx.showModal({
        title: '提示',
        content: '开播前5分钟将发送提醒，可在我的看单设置提醒时间',
        // icon: 'success',
      })
    )
  },
  goDetail(){

  },
  goSearchPage(){
    wx.navigateTo({
      url: '../search-list/search-list',
    })
  }



})