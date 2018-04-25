import React from 'react'
import {
    Upload,
    Icon,
    message
} from 'antd';
import MyIcon from '../../ui/Icon'
import styles from './drag.css'
import {
    SETP_1
} from '../../../constants'

const Dragger = Upload.Dragger;
import {
    isImage
} from '../../../util/uitls'
import {
    Modal
} from 'antd'

class Drag extends React.Component {
    render() {
        var self = this;
        var {
            dispatch,
            history,
            upload_image
        } = this.props;
        /*设置上传图片路径*/
        var dragger_props = {
            name: 'file',
            multiple: false,
            accept: 'image/* ',
            action: '/upload_image',
            showUploadList: false,
            data:{},
            beforeUpload: (file, fileLis) => {
                if (!isImage(file)) {
                    Modal.error({
                        title: '文件格式出错',
                        content: '请选择图片文件',
                    });
                    return false
                } else {
                    message.loading('图片上传当中...', 0);
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        //加载图片获取图片真实宽度和高度
                        self.image = new Image();
                        self.image.onload = function() {
                            // var width = image.width;
                            // var height = image.height;
                        };
                        self.image.src = e.target.result;
                    }
                    reader.readAsDataURL(file);
                }
            },
            onChange(info) {
                const status = info.file.status;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.destroy()
                    message.success(`${info.file.name} file uploaded successfully.`);

                    dispatch({
                        type: "design_global/upload_image_success",
                        payload: {
                            upload_image: self.image,
                            finished_process_index: SETP_1
                        }
                    })
                    history.push('/app/design/edit')
                } else if (status === 'error') {
                    message.destroy()
                    message.error(`${info.file.name} file upload failed.`);
                }
            }
        };
        var _props = Object.assign({}, this.props, dragger_props)
        return <Dragger  {..._props}
                         style={{height: 100}}
        >
            {/*<p className="ant-upload-drag-icon">*/}
            <MyIcon type="icon-shangchuanicon" className={styles.upload_icon}
                    style={{fontSize: 200}}/>
            {/*</p>*/}
            <p
                style={{color: upload_image ? '#fff' : '#333'}}
            >点击上传</p>
        </Dragger>
    }


}

export default Drag