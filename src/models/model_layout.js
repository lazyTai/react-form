import * as layoutFetch from '../fetchApi/layout'
export default {
  namespace: 'layout',
  state: {
    isMobile: false,//判断是不是手机端
    left_menu_collapsed: false,
    menuArray: [],
    documentHeight: null,
  },
  reducers: {
    change_left_menu_collapsed(state, { payload: a }) {
      state.left_menu_collapsed = !state.left_menu_collapsed
      return {
        ...state,
        left_menu_collapsed: state.left_menu_collapsed
      }
    },
    setResponsive(state, { payload: { isMobile } }) {
      return {
        ...state,
        isMobile
      }
    },
    set_menu(state, { payload: { menuArray } }) {
      return {
        ...state,
        menuArray
      }
    },
    setDocumentHeight(state,{payload:{height}}){
      return {
        ...state,
        documentHeight:height
      }
    }
  },
  effects: {
    *fetch_get_menu({ payload }, { call, put }) {
      const resJson = yield call(layoutFetch.fetch_get_menu, payload)
      yield put({ type: 'set_menu', payload: { menuArray: resJson.data } });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // if (pathname === '/app' || pathname === '/') {

        // }
      });
    },
  },
};
