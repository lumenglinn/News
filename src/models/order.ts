/*
 * @Descripttion: 
 * @Date: 2019-09-16 22:54:36
 * @LastEditTime: 2019-09-17 23:29:27
 */

import { createOrder, getOrderList } from '../services/order';

export default {
  namespace: 'order',

  state: {
    list: {
      0: { records: [] },  // 全部订单
      1: { records: [] },  // 待付款
      2: { records: [] },  // 待发货
      3: { records: [] }   // 已发货
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
    }
  },

  effects: {
    /**
     * @function: 创建订单
     * @param {type} 
     * @return: 
     */
    *createOrder({ payload }, { call, put }) {
      const res = yield call(createOrder, payload);
      return res
    },
    /**
     * @function: 获取订单列表
     * @param {type} 
     * @return: 
     */
    *getOrderList({ payload }, { call, put, select }) {
      const { tabIndex, pageNo } = payload;
      // 订单状态 10:待付款,20:已付款待发货,30:已发货待确认
      const statusMap = { 1: 10, 2: 20, 3: 30 };
      let param = { pageNo };
      if (tabIndex !== 0) {
        param.orderStatus = statusMap[tabIndex]
      }
      const res = yield call(getOrderList, param);
      const { list } = yield select((state) => state.order);
      if (res.data.success === true) {
        yield put({
          type: 'updateData',
          payload: {
            list: {
              ...list,
              [tabIndex]: {
                ...res.data.result,
                records: list[tabIndex].records.concat(res.data.result.records)
              }
            }
          }
        });
      }
    },
  },

  reducers: {
    updateData(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
