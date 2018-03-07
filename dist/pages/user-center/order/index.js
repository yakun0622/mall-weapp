'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    activeKey: 0,
    orderList: [],
    $toast: {
      show: false
    },
    tabs: [
      { status: '全部' },
      { status: '待付款' },
      { status: '审批中' },
      { status: '待收货' },
      { status: '待评价' }
    ],
    tabClass: ["", "red-dot", "", "", ""],
    orderDataList: [
      {
        orderNo: '11111111111111111',
        dateAdd: '2018-03-03 00:57:36',
        amountReal: 99.99,
        statusStr: '待收货',
        goodsList: [
          {
            name: '晨光 GP-1350中性笔 按动中性笔 0.5mm 水笔 签字笔 水性笔 GP1350中性笔',
            pic: 'https://image.hinew.com.cn/shop/store/goods/15/15_05170528232115516_360.jpg'
          }
        ]
      },
      {
        orderNo: '222222222222222222',
        dateAdd: '2018-03-03 00:57:36',
        amountReal: 112.00,
        statusStr: '待付款',
        goodsList: [
          {
            name: '晨光 GP-1350中性笔 按动中性笔 0.5mm 水笔 签字笔 水性笔 GP1350中性笔',
            pic: 'https://image.hinew.com.cn/shop/store/goods/15/15_05170528232115516_360.jpg'
          }
        ]
      },
      {
        orderNo: '333333333333333333',
        dateAdd: '2018-03-03 00:57:36',
        amountReal: 222.00,
        statusStr: '待审批',
        goodsList: [
          {
            name: '晨光 GP-1350中性笔 按动中性笔 0.5mm 水笔 签字笔 水性笔 GP1350中性笔',
            pic: 'https://image.hinew.com.cn/shop/store/goods/15/15_05170528232115516_360.jpg'
          }
        ]
      },
      {
        orderNo: '444444444444444444',
        dateAdd: '2018-03-03 00:57:36',
        amountReal: 453.00,
        statusStr: '待审批',
        goodsList: [
          {
            name: '晨光 GP-1350中性笔 按动中性笔 0.5mm 水笔 签字笔 水性笔 GP1350中性笔',
            pic: 'https://image.hinew.com.cn/shop/store/goods/15/15_05170528232115516_360.jpg'
          }
        ]
      }
    ]
  },
  onClick: function (e) {
    console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
    var temp = [];
    if (e.detail.key == 0) {
      // this.data.orderList = this.data.orderDataList;
      temp = this.data.orderDataList;
    } else if (e.detail.key == 1) {
      temp.push(this.data.orderDataList[1]);
    } else if (e.detail.key == 2) {
      temp.push(this.data.orderDataList[2]);
      temp.push(this.data.orderDataList[3]);
    } else if (e.detail.key == 3) {
      temp.push(this.data.orderDataList[0]);
    }
    this.setData({
      orderList: temp
    });
  },
  onLoad: function (e) {
    var status = e.status;
    console.log('status:' + status);
    if(status == 0){
      this.data.orderList = this.data.orderDataList;
    }
    // this.data.activeKey = status;
    this.setData({
      activeKey: status
    });
  },
  onShow: function () {
    console.log('onShow.....');
  },
  orderDetail: function(e){
    this.setData({
      $toast: {
        show: true,
        text: '功能完善中，敬请期待~'
      }
    })
    setTimeout(() => {
      this.setData({
        $toast: {
          show: false
        }
      })
    }, 1500)
  },
  goForm: function(){
    
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLRUEsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlScsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICB9LFxuICBkYXRhOiB7fVxufSJdfQ==