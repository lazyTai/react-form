import {
    FINISH,
    WILL_TODO,
    UNFINISH,
    SETP_1,
    SETP_2,
    SETP_3
} from '../../constants'

import {fetch_file_upload,fetch_categories,fetch_select_list} from '../../fetchApi/design.js'

export default {
    namespace: 'design_global',
    state: {
        process_index: SETP_1,
        process_status: [UNFINISH, UNFINISH, UNFINISH],
        upload_image: null,
    },
    reducers: {
        update_process_index: (state, {
            process_index
        }) => {
            return {
                ...state,
                process_index,
            }
        },
        update_process_status(state, {
            finished_process_index
        }) {
            for (var i = 0; i < finished_process_index; i++) {
                state.process_status[i] = FINISH;
            }
            state.process_status[finished_process_index] && (state.process_status[finished_process_index] = WILL_TODO);
            return {
                ...state,
                process_status: state.process_status,
            }
        },
        update_upload_image(state, {
            upload_image
        }) {
            return {
                ...state,
                upload_image: upload_image,
            }
        },
    },
    effects: {
        * upload_image_success({
                                   payload: {
                                       finished_process_index,
                                       upload_image
                                   }
                               }, {
                                   call,
                                   put
                               }) {
            /*1.设置进度process_status
             * 2.设置上传的文件
             * 3.reset 编辑对象*/
            yield put({
                type: 'update_process_status',
                finished_process_index
            })
            yield put({
                type: 'update_process_index',
                process_index: finished_process_index + 1
            })
            yield put({
                type: 'update_upload_image',
                upload_image
            })
            yield put({
                type: 'design_edit/set_current_edit_item',
                item: null
            })
        },
    },
    subscriptions: {},
};