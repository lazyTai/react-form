import React from 'react'
import {Image} from 'react-konva'
import {adapter_size} from '../../../util/uitls'

class DragImage extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        var {current_edit_item} = this.props;
        var {custom_image} = current_edit_item;
        /*设置显示的大小*/
        var _size = adapter_size(custom_image)
        return <Image
            image={custom_image}
            draggable={true}
            width={_size.w}
            height={_size.h}
            scaleX={current_edit_item.ratio/100}
            scaleY={current_edit_item.ratio/100}
            ref={(node) => {
                this.imageNode = node
            }}
        />
    }

}

export default DragImage

