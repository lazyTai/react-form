import {fetch_shop_list} from '../../fetchApi/store'
import {select} from 'redux-saga/effects'

export default {
    namespace: 'store_index',
    state: {
        shop_lists: [],
        paging: {},//"total offset limit
    },
    reducers: {
        set_shop_lists(state, {payload: {shop_lists, paging}}) {
            return {
                ...state,
                shop_lists,
                paging
            }
        },
        set_paging(state, {paging}) {
            return {
                ...state,
                paging
            }
        }
    },
    effects: {
        * flow_fetch_shop_lists({payload: {offset, limit}},
                                {call, put}) {
            const result = yield call(fetch_shop_list, {offset, limit});
            if (result.status == 200) {
                yield  put({
                    type: 'set_shop_lists', payload: {
                        shop_lists: result.data.result,
                        paging: result.data.paging,
                    }
                })
            }
        },
        * flow_fetch_change_page({payload: page}, {call, put}) {
            const store_index = yield select((state) => state.store_index);
            var paging = store_index.paging;
            paging.offset = (page - 1) * paging.limit
            yield  put({type: "set_paging", paging})
            yield  put({
                type: "flow_fetch_shop_lists",
                payload: {
                    offset: paging.offset,
                    limit: paging.limit
                }
            })
        }
    },
    subscriptions: {},
};
