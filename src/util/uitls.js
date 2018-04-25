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


export function array_remove_obj(_array, _obj) {
    var _index = null;
    _array.map((_item, index) => {
        if (_item.id == _obj) {
            _index = index
        }
    })
    if(_index!=null){
        _array.splice(_index, 1)
    }
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