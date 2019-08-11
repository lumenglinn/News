import { getProductDetail } from '../services/detail';

export default {
  namespace: 'detail',

  state: {
    proDetail: {}
  },

  effects: {
    *getProductDetail({payload}, {call, put}) {
      const res = yield call(getProductDetail, payload);
      if (res.data.success === true) {
        yield put({
          type: 'updateData',
          payload: {
            proDetail: res.data.result
          }
        });
      }
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
