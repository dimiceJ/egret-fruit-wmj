module Effects{
    export function rotate(_obj:egret.DisplayObject,_dur,_dir){
        console.log(_obj)
        var dir = _dir > 1 ? 1 : -1;
        var that = this
        var rotete_com:Function = function(){
            _obj.rotation = 0;
            egret.Tween.get(_obj).to({rotation:360 },_dur).call(rotete_com,this)
        }
        egret.Tween.get(_obj).to({rotation:360 },_dur).call(rotete_com,this)
    }
}