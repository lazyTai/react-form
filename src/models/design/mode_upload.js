import {FINISH, WILL_TODO, UNFINISH, SETP_1, SETP_2, SETP_3} from '../../constants'
import {fetch_categories, fetch_file_upload, fetch_select_list} from "../../fetchApi/design";

export default {
    namespace: 'design_upload',
    state: {
        image_file: {},
        upload_token: '',
        shop_lists:[],
        current_select_shop:{shopName:""},
        categories_lists:[],
        current_categories_select:{categoryName:""},
    },
    reducers: {
        set_image_file: (state, {image_file}) => {
            return {
                ...state,
                image_file,
            }
        },
        set_current_select_shop(state,{payload:{current_select_shop}}){
            return {
                ...state,
                current_select_shop,
            }
        },
        set_current_categories_select(state,{payload:{current_categories_select}}){
            return {
                ...state,
                current_categories_select,
            }
        },
        update_upload_token(state, {upload_token}) {
            return {
                ...state,
                upload_token,
            }
        },
        update_shop_lists(state,{shop_lists}){
            return {
                ...state,
                shop_lists,
            }
        },
        update_categories_lists(state,{categories_lists}){
            return {
                ...state,
                categories_lists,
            }
        },
    },
    effects: {
        * flow_fetch_uplod_token(payload, {
            call,
            put
        }) {
            const result = yield call(fetch_file_upload, {})
            // debugger
            yield put({type: 'update_upload_token', upload_token: result.data.result})
        },
        * flow_fetch_shop_lists(payload, {
            call,
            put
        }) {
            const result = yield call(fetch_select_list, {})
            yield put({type: 'update_shop_lists', shop_lists: result.data.result})
            // yield put({type: 'update_default_shop_select', payload:{
            //         current_select_shop: result.data.result[0]
            //     }})

        },
        * flow_fetch_categories_list(payload,{call,put}){
            const result = yield call(fetch_categories, {})
            yield put({type: 'update_categories_lists', categories_lists: result.data.result})
            // yield put({type: 'update_default_categories_select', default_categories_select: result.data.result[0]})
        },
    },
    subscriptions: {},
};