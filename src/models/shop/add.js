import {
    fetch_check_shop_name_repeat,
    fetch_open_a_shop,
    fetch_check_shop_url_repeat
} from '../../fetchApi/store'
import {select} from 'redux-saga/effects'
import {message} from 'antd'
import {isMatch} from "../../util/uitls";
import {exp_not_null, exp_is_internet} from '../../util/regs.js'

var _history = null;
export default {
    namespace: 'store_add',
    state: {
        fetch_error_shop_name: "",
        fetch_error_url: "",
        fetch_success: false,
    },
    reducers: {
        set_fetch_error_shop_name(state, {fetch_error_shop_name}) {
            return {...state, fetch_error_shop_name}
        },
        set_fetch_error_url(state, {fetch_error_url}) {
            return {...state, fetch_error_url}
        },
        set_fetch_success(state, {fetch_success}) {
            return {...state, fetch_success}
        }
    },
    effects: {
        * flow_add_shop({payload: {shopName, shopUrlPath, currencyId, description}}, {call, put}) {
            /*验证 名字时候存在*/
            const isNamePass = yield call(fetch_check_shop_name_repeat, {shopName});
            if (!isNamePass.data.exist) {
                yield  put({type: 'set_fetch_error_shop_name', fetch_error_shop_name: "店名已经存在"});
                return false;
            } else {
                yield  put({type: 'set_fetch_error_shop_name', fetch_error_shop_name: ""});
            }

            /*验证 网址时候存在*/
            var isUrlPass = null;
            if (shopUrlPath) {
                isUrlPass = yield call(fetch_check_shop_url_repeat, {shopUrlPath});
                if (!isUrlPass.data.exist) {
                    yield  put({type: 'set_fetch_error_url', fetch_error_url: "网址已经存在"});
                    return false;
                } else {
                    yield  put({type: 'set_fetch_error_url', fetch_error_url: ""});
                }
            }
            /*验证 表单信息是否正确*/
            var isPassShopName, isPassShopUrlPath = false;
            if (isMatch(exp_not_null, shopName)) {
                isPassShopName = true
            }
            if (shopUrlPath != null && shopUrlPath != "") {
                if (isMatch(exp_is_internet, shopUrlPath)) {
                    isPassShopUrlPath = true
                }
            }
            if (isPassShopName && isPassShopUrlPath) {
                const result = yield fetch_open_a_shop({shopName, shopUrlPath, currencyId, description})
                if (result.status == 200) {
                    message.success("店面添加成功");
                    _history.push("/app/store/index")
                }
            } else {
                message.error('填写信息有误')
            }
        }
    },
    subscriptions: {
        setup({dispatch, history}) {
            _history = history
        }
    },
};
