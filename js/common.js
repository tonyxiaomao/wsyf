(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
    };
 
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

window.shareData = {  
	"moduleName":"Index",
	"moduleID": "0",
	"imgUrl": "http://wxbucket.oss-cn-hangzhou.aliyuncs.com/0/b/8/1/55769e4e5d74a.jpg", 
	"timeLineLink": "http://we.jinlanzuan.com/index.php?g=Wap&m=Index&a=index&token=cvqnwp1433299509",
	"sendFriendLink": "http://we.jinlanzuan.com/index.php?g=Wap&m=Index&a=index&token=cvqnwp1433299509",
	"weiboLink": "http://we.jinlanzuan.com/index.php?g=Wap&m=Index&a=index&token=cvqnwp1433299509",
	"tTitle": "万晟悦府——城市纯山地公园别墅",
	"tContent": "万晟悦府，绍兴唯一在售城市纯山地公园别墅！■2000方高端尊享会所 ■5000方中央景观院落 ■7000方私家农耕菜园 ■15000方大型山地公园 ■山顶无边界泳池"
};
wx.config({
	debug: false,
	appId: 'wxcc768e41f90e43af',
	timestamp:'1464050027' ,
	nonceStr: 'btHMYoEU3VZCzZnq',
	signature: '9e7ead1c5fa5353adef19737cb43bca4f0945247',
	jsApiList: [
		'checkJsApi',
		'onMenuShareTimeline',
		'onMenuShareAppMessage',
		'onMenuShareQQ',
		'onMenuShareWeibo',
		'hideMenuItems',
		'showMenuItems',
		'hideAllNonBaseMenuItem',
		'showAllNonBaseMenuItem',
		'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'addCard',
        'chooseCard',
        'openCard',
	]
});
wx.ready(function () {
	// 在这里调用 API
	wx.onMenuShareAppMessage({
		title: window.shareData.tTitle, // 分享标题
		desc: window.shareData.tContent, // 分享描述
		link: window.shareData.sendFriendLink, // 分享链接
		imgUrl: window.shareData.imgUrl, // 分享图标
		type: window.shareData.sendFriendLink, // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () { 
			// 用户确认分享后执行的回调函数
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareTimeline({
		title: window.shareData.tTitle, // 分享标题
		link: window.shareData.timeLineLink, // 分享链接
		imgUrl: window.shareData.imgUrl, // 分享图标
		success: function () { 
			// 用户确认分享后执行的回调函数
		},
		cancel: function () { 
			// 用户取消分享后执行的回调函数
		}
	});

	wx.onMenuShareQQ({
		title: window.shareData.tTitle, // 分享标题
		desc: window.shareData.tContent, // 分享描述
		link: window.shareData.sendFriendLink, // 分享链接
		imgUrl: window.shareData.imgUrl, // 分享图标
		success: function () { 
		   // 用户确认分享后执行的回调函数
		},
		cancel: function () { 
		   // 用户取消分享后执行的回调函数
		}
	});
});