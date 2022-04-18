// 导入封装后的axios
import request from '@/utils/request'
import qs from 'qs';
// ? 获取所有二维码
export const getAllCode = params => {
  return request({
    method: 'GET',
    url: '/code/getAllCode',
    params
  });
}