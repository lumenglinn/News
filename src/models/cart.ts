/*
 * @Descripttion: 购物车 model
 * @Date: 2019-09-13 10:34:56
 * @LastEditTime: 2019-09-17 00:00:18
 */

import { getCartList, addCart } from '../services/cart';

export default {
  namespace: 'cart',

  state: {
    cartList: {
      records: []
    }
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
    *getCartList({payload}, {call, put}) {
      const res = yield call(getCartList, payload);
      if (res.data.success === true) {
        yield put({
          type: 'updateData',
          payload: {
            cartList: res.data.result
          }
        });
      }
    },
    /**
     * @function: 添加购物车
     * @param {type} 
     * @return: 
     */    
    *addCart({payload}, {call, put}) {
      const res = yield call(addCart, payload);
      if (res.data.success === true) {
        // 更新购物车
        yield put({
          type: 'getCartList',
          payload: {}
        });
      }
      return res
    }
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
