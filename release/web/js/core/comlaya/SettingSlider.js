var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function i(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}}(),SettingSlider=function(t){function n(){var n=t.call(this)||this;return n.showLabel=!1,n.on(Laya.Event.DISPLAY,n,n.onAddStage),n.on(Laya.Event.CHANGE,n,n.onChange),n}return __extends(n,t),n.prototype.onChange=function(){this.getChildByName("front").width=this.bar.x+5},n.prototype.onAddStage=function(){var t=this.getChildByName("front"),n=this.getChildByName("thumb");n.visible=!1,this.bar.stateNum=1,this.bar.skin=n.skin,this.bar.y=n.y,this.addChild(this.bar),t.width=this.bar.x+5},n}(laya.ui.HSlider);