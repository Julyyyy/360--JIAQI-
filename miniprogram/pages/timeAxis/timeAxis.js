// miniprogram/pages/timeAxis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    dayDate: [],
    activeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.getData();
  },

  changeDate(e) {
    this.setData({
      dayDate: e.currentTarget.dataset.itemdata.msg,
      activeIndex: e.currentTarget.dataset.indexdata
    })
  },

  bindTimeChange(e) {
    const db = wx.cloud.database()
    db.collection('picked')
      .doc(e.currentTarget.dataset.id.anchor._id)
      .update({
        data: {
          settime: e.detail.value
        }
      })
      .then((e) => {
        this.getData()
      })
  },

  async getData() {
    const db = wx.cloud.database()
    const data = await db.collection('picked').get()
    const lineData = []
    data.data.forEach(item => {
      const index = lineData.findIndex(i => i.day === item.broadtime)
      if (index === -1) {
        lineData.push({
          day: item.broadtime,
          msg: [{
            time: item.broaddate,
            anchor: {
              name: item.broadcaster,
              setTime: item.settime,
              ...item
            }
          }]
        })
      } else {
        lineData[index].msg.push({
          time: item.broaddate,
          anchor: {
            name: item.broadcaster,
            setTime: item.settime,
            ...item
          }
        })
      }
    })
    lineData.forEach(item => {
      item.msg.sort((a, b) => a.time.split(':')[0] - b.time.split(':')[0])
    })
    lineData.sort((a, b) => a.day.split('-')[2] - b.day.split('-')[2])
    this.setData({
      data: lineData,
      dayDate: lineData[0].msg
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