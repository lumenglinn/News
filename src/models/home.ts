// import {routerRedux} from 'dva/router';
import { getList } from '../services/index';

export default {
  namespace: 'index',

  state: {
    collapsed: false,
    userInfo: {}
  },

  // subscriptions: {
  //   setup({dispatch, history}) {
  //       console.log(history, 222)
  //       dispatch({type: 'getList'});
  //   //   history.listen((location) => {
        
  //   //   });
  //   }
  // },

  effects: {
    *getList({payload}, {call, put}) {
      const res = yield call(getList, payload);
      if (res.success === true) {
        yield put({
            type: 'updateData',
            payload: res.result
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
