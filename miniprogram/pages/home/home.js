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
    currCategoryIndex: 0,//默认展示第一个B站
    isPickedName:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取已经关注的数据
    var that=this
    that.updatePickedName()

    db.collection('anchor').where({
      platname: 'B站'
    }).get().then(res => {
      // 判断加载的主播是否在已经关注主播的数据中
      //在就打开switch
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
    console.log(this.data.isPickedName)
    console.log(this.data.currCategory)
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

  isInPickedName:function(res){
    res.data.forEach((item)=>{
      if(this.data.isPickedName.indexOf(item.broadcaster)!=-1){
        item.isPicked=1
      }
    })
  },
  /**
   *更新关注主播名单
   */
  updatePickedName:function(){
    db.collection('picked').get().then((res)=>{
      var temp=[]
       res.data.forEach((item)=>{
         temp.push(item.broadcaster)
       })
       this.setData({
         isPickedName:temp
       })
   })
  },
  chooseCategoryType(event) {
    const index = event.currentTarget.dataset.index;
    console.log("index: " + index);
    this.setData({
      currCategoryIndex: index
    })
    switch(index){
      case 0:
        var that=this
        that.updatePickedName()
        db.collection('anchor').where({
          platname: 'B站'
        }).get().then(res => {
          that.isInPickedName(res)
          this.setData({
            currCategory: res.data
          })
        })
      break;
      case 1:
        var that=this
        that.updatePickedName()
        db.collection('anchor').where({
          platname: '斗鱼直播'
        }).get().then(res => {
          that.isInPickedName(res)
          this.setData({
            currCategory: res.data
          })
        })
      break;
      case 2:
        var that=this
        that.updatePickedName()

        db.collection('anchor').where({
          platname: '淘宝直播'
        }).get().then(res => {
          that.isInPickedName(res)
          this.setData({
            currCategory: res.data
          })
        })
      break;
      case 3:
        var that=this
        that.updatePickedName()

        db.collection('anchor').where({
          platname: '高校'
        }).get().then(res => {
          that.isInPickedName(res)
          this.setData({
            currCategory: res.data
          })
        })
      break;
    }
  },
  // // 切换改变是否关注
  // switch1Change(e){
  //   // this.data.addedZhubo[e.target.id]=e.detail.value;
  //   var str = 'addedZhubo[' + e.target.id + '].alarm';
  //   this.setData({
  //     [str]: e.detail.value
  //   })
  //   if (this.data.addedZhubo[e.target.id].alarm) (
  //     wx.showModal({
  //       title: '提示',
  //       content: '开播前5分钟将发送提醒，可在我的看单设置提醒时间',
  //       // icon: 'success',
  //     })
  //   )
  // },
  
  // 切换改变是否关注
  switch1Change(e){
    var data=this.data.currCategory[e.target.id]
    if(!e.detail.value){
      //当取消关注时，要把展示列表项中的switch开关标志清空
     db.collection('picked').doc(data._id).remove().then(res=>{
       var str='currCategory['+e.target.id+'].isPicked'
       this.setData({
         [str]:''
       })
       wx.showToast({
         title: '关注已取消',
         icon: 'none',
         image:'../../images/close.png'
       })
      })
  }
  //当选择关注时，要把要把展示列表项中的switch开关标志打开，
  //方便在主页不同平台转换时保证switch的正常状态
    else{
      var str='currCategory['+e.target.id+'].isPicked'
      this.setData({
        [str]:1
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
  goDetail(e){
  },
  goSearchPage(){
    wx.navigateTo({
      url: '../search-list/search-list',
    })
  }



})