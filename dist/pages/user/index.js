'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    tabs: [
      { title: '全部', content: '全部订单' },
      { title: '待付款', content: '待付款订单' },
      { title: '审核中', content: '审核中订单' },
      { title: '待发货', content: '待发货' },
      { title: '待评价', content: '待评价' }
    ]
  },
  methods: {
    onClick: function (e) {
      console.log(`ComponentId:${e.detail.componentId},you selected:${e.detail.key}`);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLRUEsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4Lnd4cCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7fVxuICB9LFxuICBkYXRhOiB7fVxufSJdfQ==