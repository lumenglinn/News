/*
 * @Descripttion: 分类列表 model
 * @Date: 2019-09-08 11:01:37
 */
import { getCateList } from '../services/cateList';
import { getCartList, addCart } from '../services/cart';
import { getList } from '../services/index';

export default {
  namespace: 'cateList',

  state: {
    cateTypes: [],  // 商品分类
    records: {}     // 商品列表
  },

  subscriptions: {
  },

  effects: {
    /**
     * @function: 获取商品分类
     * @param {type} 
     * @return: 
     */    
    *getCateList({payload}, {call, put}) {
      const res = yield call(getCateList, payload);
      if (res.data.success === true) {
        const records = res.data.result.records
        yield put({
          type: 'updateData',
          payload: {
            cateTypes: records
          }
        });
        // 请求第一栏的分类列表
        yield put({
          type: 'getProductList',
          payload: {
            categoryId: records[0].id,
            pageNo: 1
          }
        });
      }
    },
    /**
     * @function: 获取分类商品列表
     * @param {type} 
     * @return: 
     */    
    *getProductList({payload}, {call, put, select}) {
      const res = yield call(getList, payload);
      const {categoryId} = payload; // 类目Id
      const {records} = yield select((state)=> state.cateList); 
      const oldRecords = records[categoryId] || []; // 已有的列表数据
      if (res.data.success === true) {
        yield put({
          type: 'updateData',
          payload: {
            // list: res.data.result,
            records: {
              ...records,
              [categoryId]: oldRecords.concat(res.data.result.records),
              [`${categoryId}_total`]: res.data.result.total
            }
          }
        });
      }
    },
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
