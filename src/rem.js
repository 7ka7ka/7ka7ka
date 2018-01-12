/**
 * 一个简单的移动端尺寸比例的封装js，以rem为单位，实用性很好，实际使用根据情况可在调试
 */

(function(doc,win){
	var docEl = doc.documentElement,resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function(){
		var clientWidth = docEl.clientWidth;
		if(!clientWidth) return;
		if(clientWidth>=640){
			docEl.style.fontSize = '100px'; //小于640的时候
		}
		else{
			docEl.style.fontSize = 100 * (clientWidth /640) + 'px';  //大于640的时候
		}
	};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);