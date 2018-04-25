export function setDva(app) {
    window.$dva = app
}

export function getDva() {
    var _dav = null;
    if (!window.$dva) {
        return _dav = window.$dva
    } else {
        _dav = window.$dva
    }
    return _dav
}