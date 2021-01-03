import request from './request';

// 轮播图
export function getBanners() {
  return request({
    url: '/banner',
    // method: 'get'
  });
}