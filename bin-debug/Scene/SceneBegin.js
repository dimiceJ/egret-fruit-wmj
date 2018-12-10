var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SceneBegin = (function (_super) {
    __extends(SceneBegin, _super);
    function SceneBegin() {
        var _this = _super.call(this) || this;
        _this.skinName = 'resource/eui_skins/SceneBegin.exml';
        _this.init();
        return _this;
    }
    SceneBegin.prototype.init = function () {
        var title_dur = 700;
        var that = this;
        var ninj_dur = 900;
        var left_mid = 200;
        var dur_content = 300;
        console.log(this.title_group);
        var tw_title = egret.Tween.get(this.title_group).to({ y: 0 }, title_dur, egret.Ease.circInOut);
        // var tw_ninj = egret.Tween.get(this.title_group).to({y:0},title_dur,egret.Ease.circInOut);
        setTimeout(function () {
            egret.Tween.get(that.ninj_img).to({ y: 28 }, ninj_dur, egret.Ease.elasticOut);
        }, title_dur);
        setTimeout(function () {
            egret.Tween.get(that.left_mid).to({ x: 14 }, left_mid, egret.Ease.circInOut);
        }, title_dur);
        // bottom动画
        setTimeout(function () {
            egret.Tween.get(that.fir_circle).to({ scaleX: 1, scaleY: 1 }, dur_content, egret.Ease.circInOut);
            egret.Tween.get(that.fir_fruit).to({ scaleX: 1, scaleY: 1 }, dur_content, egret.Ease.circInOut);
            egret.Tween.get(that.thr_fruit).to({ scaleX: 1, scaleY: 1 }, dur_content, egret.Ease.circInOut);
            egret.Tween.get(that.thr_circle).to({ scaleX: 1, scaleY: 1 }, dur_content, egret.Ease.circInOut);
            egret.Tween.get(that.sec_fruit).to({ scaleX: 1, scaleY: 1 }, dur_content, egret.Ease.circInOut);
            egret.Tween.get(that.sec_circle).to({ scaleX: 1, scaleY: 1 }, dur_content, egret.Ease.circInOut);
        }, ninj_dur + title_dur);
        setTimeout(function () {
            Effects.rotate(that.fir_circle, 32000, 1);
            Effects.rotate(that.fir_fruit, 24000, 1);
            Effects.rotate(that.sec_fruit, 24000, 1);
            Effects.rotate(that.sec_circle, 32000, 1);
            Effects.rotate(that.thr_circle, 32000, 1);
        }, ninj_dur + title_dur + dur_content);
        //         setInterval(function() {
        // egret.Tween.get(that.sec_circle).to({ rotation:360 }, 32000);
        // }, ninj_dur + title_dur +dur_content);
    };
    return SceneBegin;
}(eui.Component));
__reflect(SceneBegin.prototype, "SceneBegin");
