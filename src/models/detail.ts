// import {routerRedux} from 'dva/router';
import { getProductDetail } from '../services/detail';

export default {
  namespace: 'detail',

  state: {
    proDetail: {}
  },

  effects: {
    *getProductDetail({payload}, {call, put}) {
      const res = yield call(getProductDetail, payload);
      console.log(res, 9222)
      if (res.success === true) {
        yield put({
            type: 'updateData',
            payload: res.result
          });
      }
    }
  },

  reducers: {
    updateProDetail(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
