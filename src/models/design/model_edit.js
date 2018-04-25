import * as layoutFetch from "../../fetchApi/layout";
import {fetch_design_templates} from '../../fetchApi/edit'
import {
    adapter_for_template_items, array_remove_obj, array_distinct_insert_item,
    array_update_item
} from '../../util/uitls'
import {BOX_ITEM_STATUS_READY, BOX_ITEM_STATUS_UNREADY} from '../../constants'
import {select} from 'redux-saga/effects'

export default {
    namespace: 'design_edit',
    state: {
        design_templates: [],
        select_design_templates: [],
        current_edit_item: null,
    },
    reducers: {
        set_design_templates(state, {payload: {design_templates}}) {
            return {
                ...state,
                design_templates
            }
        },
        update_design_templates(state, {item}) {
            state.design_templates[item.row][item.column] = item
            return {
                ...state,
                design_templates: state.design_templates
            }
        },
        remove_select_design_templates(state, {item}) {
            var select_design_templates = state.select_design_templates;
            return {
                ...state,
                select_design_templates: array_remove_obj(select_design_templates, item)
            }
        },
        insert_select_design_templates(state, {item}) {
            var select_design_templates = state.select_design_templates;
            return {
                ...state,
                select_design_templates: array_distinct_insert_item(select_design_templates, item)
            }
        },
        update_select_design_templates(state, {item}) {
            var select_design_templates = state.select_design_templates;
            return {
                ...state,
                select_design_templates: array_update_item(select_design_templates, item)
            }
        },
        set_current_edit_item(state, {item}) {
            return {
                ...state,
                current_edit_item: item
            }
        }
    },
    effects: {
        * fetch_design_templates({payload}, {call, put}) {
            /*1.得到model_design_global的 upload_image
            * 2.后去得到 模板 文件信息
            * 3.把 upload_image 注入到 文件信息*/
            const model_design_global = yield select(state => state.design_global);
            var upload_image = model_design_global.upload_image;
            const resJson = yield call(fetch_design_templates, payload);
            resJson.data.map(item => {
                item.custom_image = upload_image
            })
            var design_templates = adapter_for_template_items(resJson.data);
            yield put({type: 'set_design_templates', payload: {design_templates: design_templates}});
        },
        * flow_ready_box_item({payload: item}, {call, put}) {
            /*1.修改 item的status,*/
            /*2.把item 放到select_array中
             */
            item.status = BOX_ITEM_STATUS_READY;
            yield put({type: 'update_design_templates', item})
            yield put({type: 'insert_select_design_templates', item})
        },
        * flow_unready_box_item({payload: item}, {call, put}) {
            /*1.修改 item的status,*/
            /*2.把item 放到select_array中
            * */
            item.status = BOX_ITEM_STATUS_UNREADY;
            yield put({type: 'update_design_templates', item})
            yield put({type: 'remove_select_design_templates', item})
        },
        * flow_edit_item({payload: item}, {call, put}) {
            /* 1.当前编辑图片*/
            yield put({type: 'set_current_edit_item', item})
        },
        * flow_update_current_edit_item_props({payload: ratio}, {call, put}) {
            /*1.修改current属性
            * 2.design_templates 修改属性
            * 3.select_design_templates 修改属性 */
            var {current_edit_item} = yield select(state => state.design_edit);
            current_edit_item.ratio = ratio
            yield put({type: 'set_current_edit_item', item: current_edit_item})
            yield put({type: 'update_design_templates', item: current_edit_item})
            yield put({type: 'update_select_design_templates', item: current_edit_item})
        }
    },
    subscriptions: {
        setup(a) {
        }
    },
};
