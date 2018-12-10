var Effects;
(function (Effects) {
    function rotate(_obj, _dur, _dir) {
        console.log(_obj);
        var dir = _dir > 1 ? 1 : -1;
        var that = this;
        var rotete_com = function () {
            _obj.rotation = 0;
            egret.Tween.get(_obj).to({ rotation: 360 }, _dur).call(rotete_com, this);
        };
        egret.Tween.get(_obj).to({ rotation: 360 }, _dur).call(rotete_com, this);
    }
    Effects.rotate = rotate;
})(Effects || (Effects = {}));
