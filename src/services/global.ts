/*
 * @Descripttion: 
 * @Date: 2019-09-09 00:18:14
 * @LastEditTime: 2019-09-14 09:19:15
 */
import Taro from '@tarojs/taro'
import request from '../utils/request'

export async function getHomeSetting() {
    return request({
        url: `${apiPrefix}/api/setting/getHomeSettingList`
    });
}

// 获取accessToken
export function getAccessToken(code) {
    // console.log(Taro.getStorageSync('sessionId'), 99)
    // if (Taro.getStorageSync('sessionId')) return;

    return request({
        url: `${apiPrefix}/api/weixin/login`,
        data: {
            js_code: code
        },
        // withoutAccessToken: true,
        success: (res) => {
            if (res.success) {
                Taro.setStorageSync('sessionId', res.result.sessionId);
                Taro.eventCenter.trigger('login');
            }
        }
    });
}