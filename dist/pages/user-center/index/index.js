'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp()
exports.default = Page({
  data: {
    balance: 0,
    freeze: 0,
    score: 0,
    score_sign_continuous: 0
  },
  onClick: function (e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
  },
  onShow: function () {
    console.log('onShow.....');
    this.getUserInfo();
    this.login();
  },
  login: function(){
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          that.setData({
            code: res.code
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo,
              encryptedData: res.encryptedData,
              iv: res.iv
            });
          }
        })
      }
    })
  },
  toOrderList: function (event){
    const status = event.detail.value.status;
    wx.navigateTo({
      url: '/pages/order/index?status=' + status,
    });
    wx.request({
      url: app.globalData.domain + '/api/clickCount',
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        formId: event.detail.formId
      },
      success: (res) => {
        console.log('*********************');
        console.log(res.data);
        console.log('*********************');
      }
    })
    console.log('formId: ' + event.detail.formId);
  },
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.showToast({
        title: '加载成功！',
        icon: 'success',
        duration: 2000
      })
    }, 3000)
    setTimeout(function () {
      wx.hideLoading()
      wx.stopPullDownRefresh()
    }, 3000)
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLRUEsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICB9LFxuICBkYXRhOiB7fVxufSJdfQ==