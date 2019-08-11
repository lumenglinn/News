// import {routerRedux} from 'dva/router';
import { getList } from '../services/index';

export default {
  namespace: 'index',

  state: {
    list: {},
    records: []
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
    // updateList(state, { payload }) {
    //   return {
    //     ...state,
    //     ...payload
    //   };
    // },
    updateData(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
