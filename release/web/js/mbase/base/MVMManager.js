var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();define(["require","exports","../data/Player"],function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){function e(){return t.call(this)||this}return __extends(e,t),e.prototype.eventInit=function(){this.regist("client_Player_onJoinGame",this.onShowRoom),this.regist("client_Player_openScene",this.onShowHallScene),this.regist("client_Player_onEnterRoomList",this.onReconnect),this.regist("client_Player_onJoinRoom",this.onPlayError),this.regist("client_Player_onQueue",this.onEnterError)},e.prototype.onReconnect=function(){this.playerData.roomSN>0&&this.playerData.gameType==n.Player.HOLDEM&&this.showOther("SCENE_DZPKSceneVM",this.playerData.roomData)},e.prototype.onEnterError=function(t){0!=t.ret&&(CFun.dialog(CFun.getItem(MsgData,"id",t.ret).msg,null,null,"确 定"),t.gameType==n.Player.HOLDEM&&this.showOther("SCENE_scene_620"))},e.prototype.onPlayError=function(t){0!=t.ret&&(CFun.dialog(CFun.getItem(MsgData,"id",t.ret).msg,null,null,"确 定"),t.gameType==n.Player.HOLDEM&&this.showOther("SCENE_scene_620"))},e.prototype.onShowHallScene=function(){this.playerData.roomSN<=0&&this.showOther("SCENE_HallVM")},e.prototype.onShowRoom=function(t){this.showOther("SCENE_scene_"+t.gameid,t)},e.prototype.showOther=function(t,e){var n=laya.utils.Pool.getItemByClass("InitData",InitData);n.className=t,n.exData=e,this.onInitAndShow(n)},e.prototype.onInitAndShow=function(e){0==e.className.indexOf("SCENE_")&&this.closeAll(),t.prototype.onInitAndShow.call(this,e)},Object.defineProperty(e.prototype,"playerData",{get:function(){return ModelManager.ins.getInstByClassName("Player")||CFun.throw("MVMManager中使用的Player数据还未初始化"),ModelManager.ins.getInstByClassName("Player")},enumerable:!0,configurable:!0}),e}(VMManager);e.MVMManager=o});