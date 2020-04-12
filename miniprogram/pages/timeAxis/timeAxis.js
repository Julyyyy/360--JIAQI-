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
  onLoad: function (options) {
    const db = wx.cloud.database()
    // db.collection('user').where({
    //   name: 'xxx'
    // }).get().then(res => {
    //   console.log(res)
    // })

    // db.collection('user').where({
    //   name: 'xxx'
    // }).update({
    //   data: {
    //     name: 'hhh'
    //   },
    //   success: data => {
    //     console.log(data);
    //   }
    // })

    // db.collection('user').where({
    //   name: 'xxx'
    // }).update({
    //   data: {
    //     name: 'dddd'
    //   },
    //   success: function(res) {
    //     console.log('res.data')
    //     console.log(res)
    //   }
    // })
    
    this.setData({
      data: [
        {
          day: '2020/04/12',
          msg: [
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy1',
                setTime: '01:00:00',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
                setTime: '01:00:00',
              }
            },
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy1',
                setTime: '01:00:00',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
                setTime: '01:00:00',
              }
            },
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy1',
                setTime: '01:00:00',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
                setTime: '01:00:00',
              }
            },
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy1',
                setTime: '01:00:00',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
                setTime: '01:00:00',
              }
            },
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy1',
                setTime: '01:00:00',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
                setTime: '01:00:00',
              }
            },
          ]
        },
        {
          day: '2020/04/13',
          msg: [
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy13333',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
              }
            },
          ]
        },
        {
          day: '2020/04/14',
          msg: [
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy144444',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
              }
            },
          ]
        },
        {
          day: '2020/04/15',
          msg: [
            {
              time: '01:00:00',
              anchor: {
                name: 'xhy15555',
              }
            },
            {
              time: '05:00:00',
              anchor: {
                name: 'xhy2',
              }
            },
            {
              time: '11:00:00',
              anchor: {
                name: 'xhy3',
              }
            },
          ]
        },
      ],
      dayDate: [
        {
          time: '01:00:00',
          anchor: {
            name: 'xhy1',
            setTime: '01:00:00',
          }
        },
        {
          time: '05:00:00',
          anchor: {
            name: 'xhy2',
          }
        },
        {
          time: '11:00:00',
          anchor: {
            name: 'xhy3',
            setTime: '01:00:00',
          }
        },
        {
          time: '01:00:00',
          anchor: {
            name: 'xhy1',
            setTime: '01:00:00',
          }
        },
        {
          time: '05:00:00',
          anchor: {
            name: 'xhy2',
          }
        },
        {
          time: '11:00:00',
          anchor: {
            name: 'xhy3',
            setTime: '01:00:00',
          }
        },
        {
          time: '01:00:00',
          anchor: {
            name: 'xhy1',
            setTime: '01:00:00',
          }
        },
        {
          time: '05:00:00',
          anchor: {
            name: 'xhy2',
          }
        },
        {
          time: '11:00:00',
          anchor: {
            name: 'xhy3',
            setTime: '01:00:00',
          }
        },
        {
          time: '01:00:00',
          anchor: {
            name: 'xhy1',
            setTime: '01:00:00',
          }
        },
        {
          time: '05:00:00',
          anchor: {
            name: 'xhy2',
          }
        },
        {
          time: '11:00:00',
          anchor: {
            name: 'xhy3',
            setTime: '01:00:00',
          }
        },
        {
          time: '01:00:00',
          anchor: {
            name: 'xhy1',
            setTime: '01:00:00',
          }
        },
        {
          time: '05:00:00',
          anchor: {
            name: 'xhy2',
          }
        },
        {
          time: '11:00:00',
          anchor: {
            name: 'xhy3',
            setTime: '01:00:00',
          }
        },
      ]
    })
    console.log(this.data.data)
  },

  changeDate(e) {
    this.setData({
      dayDate: e.currentTarget.dataset.itemdata.msg,
      activeIndex: e.currentTarget.dataset.indexdata
    })
  },

  bindTimeChange(e) {
    console.log(e);
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