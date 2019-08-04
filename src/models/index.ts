// import {routerRedux} from 'dva/router';
// import {authLogin, getToken, getUserInfo, logout, anyTest} from '../services/index';

// export default {
//   namespace: 'index',

//   state: {
//     collapsed: false,
//     userInfo: {}
//   },

//   subscriptions: {
//     setup({dispatch, history}) {
//       history.listen((location) => {
//         dispatch({type: 'getUserInfo'});
//       });
//     }
//   },

//   effects: {
//     *authLogin({payload}, {call, put}) {
//       const res = yield call(authLogin, payload);
//       if (res.status === 'true') {
//       }
//     }
//   },

//   reducers: {
//     updateData(state, {payload}) {
//       return {
//         ...state,
//         ...payload
//       };
//     }
//   }
// };
