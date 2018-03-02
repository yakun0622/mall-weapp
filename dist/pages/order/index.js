'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({

  data: {
    tabs: [
      {
        status: '全部', list: [
          { orderNo: '11111111111111111' },
          { orderNo: '222222222222222222' },
          { orderNo: '333333333333333333' },
          { orderNo: '444444444444444444' }
        ]
      },
      { status: '待付款', list: [] },
      {
        status: '审核中', list: [
          { orderNo: '222222222222222222' }
        ]
      },
      {
        status: '待发货', list: [
          { orderNo: '333333333333333333' }
        ]
      },
      {
        status: '待评价', list: [
          { orderNo: '444444444444444444' }
        ]
      }
    ]
  },
  methods: {
    onClick: function (e) {
      console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLRUEsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOiuouWNlScsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICB9LFxuICBkYXRhOiB7fVxufSJdfQ==