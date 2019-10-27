/*
 * @Descripttion: 首页
 * @Date: 2019-08-10 21:10:21
 * @LastEditTime: 2019-10-27 20:52:02
 */
import { getHomeSetting, getList } from '../services/index';

export default {
  namespace: 'index',

  state: {
    list: {},
    records: []
  },

  subscriptions: {
    setup({dispatch, history}) {
      // dispatch({type: 'getHomeSetting'});
    }
  },

  effects: {
    *getHomeSetting({ payload }, { call, put}) {
      const res = yield call(getHomeSetting, payload);
      if (res.data.success === true) {
        yield put({
          type: 'updateData',
          payload: {
            ...res.data.result
          }
        });
      }
    },
    *getList({ payload }, { call, put, select}) {
      const res = yield call(getList, payload);
      const {records} = yield select((state)=> state.index); 
      if (res.data.success === true) {
        yield put({
          type: 'updateData',
          payload: {
            list: res.data.result,
            records: records.concat(res.data.result.records)
          }
        });
      }
    }
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
