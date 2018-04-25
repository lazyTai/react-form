import {
    TYPE_SHIRT,
    TYPE_PHONE,
    TYPE_PILLOW,
    TYPE_GLASS,
    TYPE_QUILT,
    TYPE_MINISKIRT,
    ORIGINAL_PRODUCT_WIDTH,
    ORIGINAL_PRODUCT_HEIGHT
} from '../constants'
import _ from 'lodash'

export function isImage(file) {
    var ImgType = ["gif", "jpeg", "jpg", "bmp", "png"];//图片
    if (!RegExp("\.(" + ImgType.join("|") + ")$", "i").test(file.name.toLowerCase())) {
        console.log("不是指定图片格式,重新选择");
        return false;
    } else {
        return true
    }
}

export function adapter_for_template_items(json) {
    var _row_map = {};
    var _row = 0;
    _.map(json, (item, index) => {
        switch (item.type_id) {
            case  TYPE_SHIRT:
                item.template_url = "/static/t_shirt.png"
                break;
            case  TYPE_GLASS:
                item.template_url = "/static/cup.png"
                break;
            case  TYPE_GLASS:
                item.template_url = "/static/cup.png"
                break;
            case  TYPE_PHONE:
                item.template_url = "/static/phone.png"
                break;
            case  TYPE_PILLOW:
                item.template_url = "/static/pillow.png"
                break;
            case TYPE_MINISKIRT:
                item.template_url = "/static/skirt.png"
                break;
            default:
                item.template_url = "/static/t_shirt.png"
                break;
        }

        var _column = index % 3;
        if (index != 0 && index % 3 == 0) {
            _row++;
        }
        item.row = _row;
        item.column = _column;
        // console.log("typeof _row_map[_row] == \"undefined\" ", typeof _row_map[_row])
        if (typeof _row_map[_row] == "undefined" || _row_map[_row].length < 0) {
            _row_map[_row] = []
        }
        _row_map[_row].push(item)
    })
    // console.log('========================')
    // console.log(_row_map)
    return _row_map
}

export function array_remove_obj(_array, _obj) {
    var _index = null;
    _array.map((_item, index) => {
        if (_item.id == _obj) {
            _index = index
        }
    })
    _array.splice(_index, 1)
    return _array
}

export function array_distinct_insert_item(_array, item) {
    var _isIn = false;
    _array.map((_item) => {
        if (_item.id == item) {
            _isIn = true
        }
    })
    if (!_isIn) {
        _array.push(item)
    }
    return _array
}

export function array_update_item(_array, item) {
    var _isIn = false;
    var _index = null;
    _array.map((_item, index) => {
        if (_item.id == item) {
            _isIn = true;
            _index = index
        }
    })
    if (!_isIn) {
        _array[_index] = item
    }
    return _array
}

export function adapter_size(imgDom) {
    var _width = imgDom.width;
    var _height = imgDom.height
    var diagonal_big = Math.sqrt(ORIGINAL_PRODUCT_WIDTH * ORIGINAL_PRODUCT_WIDTH + ORIGINAL_PRODUCT_HEIGHT * ORIGINAL_PRODUCT_HEIGHT)
    var diagonal_small = Math.sqrt(_width * _width + _height * _height)
    var ratio = diagonal_small / diagonal_big;
    return {w: ratio * _width / 10, h: _height * ratio / 10, ratio: ratio}

}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export function uuid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export function isMatch(myreg, str) {
    //声明邮箱正则
    //对输入的值进行判断
    return myreg.test(str);
}