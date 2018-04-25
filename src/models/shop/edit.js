import {select} from 'redux-saga/effects'
import {message} from 'antd'
import {fetch_update_store_desciption, fetch_shop_get_one} from '../../fetchApi/store.js'

var _history = null;
import _ from 'lodash'

export default {
    namespace: 'store_edit',
    state: {
        edit_shop: {
            "shopId":"",
            "userId": "",
            "shopName": "",
            "shopUrlPath": "",
            "currencyId": 1, //(1 for RMB),
            "isDefault": true,//1select  2 no select
            description: ''
        }
    },
    reducers: {
        set_edit_shop(state, payload) {
            var {edit_shop} = payload;
            _.each(edit_shop, function (item, key) {
                state.edit_shop[key] = edit_shop[key]
            })
            return {
                ...state, edit_shop: state.edit_shop
            }
        }
    },
    effects: {
        * flow_fetch_get_shop({payload: {shopId}}, {call, put}) {
            const result = yield call(fetch_shop_get_one, {shopId})
            if (result.status == 200) {
                yield put({type: "set_edit_shop", edit_shop: result.data})
            }
        },
        * fetch_fetch_update_btn({payload: edit_shop}, {call, put}) {
            const result = yield call(fetch_update_store_desciption, {edit_shop})
            if (result.status == 200) {
                message.success("修改成功");
                _history.push('/app/store/index')
            }
            return false
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            _history = history
        }
    },
};
