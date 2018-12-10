class SceneBegin extends eui.Component {
    public constructor() {
        super()
        this.skinName = 'resource/eui_skins/SceneBegin.exml'
        this.init()
    }

    private title_group: eui.Group
    private left_mid: eui.Image
    private ninj_img: eui.Image
    private fir_circle: eui.Image
    private fir_fruit: eui.Image
    private sec_circle: eui.Image
    private sec_fruit: eui.Image
    private thr_circle: eui.Image
    private thr_fruit: eui.Image

    public init() {
        var title_dur = 700
        var that = this
        var ninj_dur = 900
        var left_mid = 200
        var dur_content = 300
        console.log(this.title_group)
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
        }, ninj_dur + title_dur)

        setTimeout(function () {

            Effects.rotate(that.fir_circle,32000,1)
            Effects.rotate(that.fir_fruit,24000,1)
            Effects.rotate(that.sec_fruit,24000,1)
            Effects.rotate(that.sec_circle,32000,1)

            Effects.rotate(that.thr_circle,32000,1)
        }, ninj_dur + title_dur + dur_content)

            //         setInterval(function() {
            // egret.Tween.get(that.sec_circle).to({ rotation:360 }, 32000);
            // }, ninj_dur + title_dur +dur_content);
    }
}