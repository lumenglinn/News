/*
 * @Descripttion: 
 * @Date: 2019-09-16 22:54:36
 * @LastEditTime: 2019-09-16 23:45:03
 */

import { createOrder } from '../services/order';

export default {
  namespace: 'order',

  state: {
  },

  subscriptions: {
    setup({dispatch, history}) {
    }
  },

  effects: {
    /**
     * @function: 获取购物车列表
     * @param {type} 
     * @return: 
     */
    // *getCartList({payload}, {call, put}) {
    //   const res = yield call(getCartList, payload);
    //   if (res.data.success === true) {
    //     yield put({
    //       type: 'updateData',
    //       payload: {
    //         cartList: res.data.result
    //       }
    //     });
    //   }
    // },

    *createOrder({payload}, {call, put}) {
        console.log(payload, 'payload')
      const res = yield call(createOrder, payload);
      console.log(res)
      if (res.data.success === true) {
        console.log(res, 888)
        // 更新购物车
        // yield put({
        //   type: 'getCartList',
        //   payload: {}
        // });
      }
      return res
    },
  },

  reducers: {
    updateData(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
