// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require bootstrap
//= require turbolinks
//= require_tree .

/* breakpoints.js v1.0 | @ajlkn | MIT licensed */
var breakpoints=function(){"use strict";function e(e){t.init(e)}var t={list:null,media:{},events:[],init:function(e){t.list=e,window.addEventListener("resize",t.poll),window.addEventListener("orientationchange",t.poll),window.addEventListener("load",t.poll),window.addEventListener("fullscreenchange",t.poll)},active:function(e){var n,a,s,i,r,d,c;if(!(e in t.media)){if(">="==e.substr(0,2)?(a="gte",n=e.substr(2)):"<="==e.substr(0,2)?(a="lte",n=e.substr(2)):">"==e.substr(0,1)?(a="gt",n=e.substr(1)):"<"==e.substr(0,1)?(a="lt",n=e.substr(1)):"!"==e.substr(0,1)?(a="not",n=e.substr(1)):(a="eq",n=e),n&&n in t.list)if(i=t.list[n],Array.isArray(i)){if(r=parseInt(i[0]),d=parseInt(i[1]),isNaN(r)){if(isNaN(d))return;c=i[1].substr(String(d).length)}else c=i[0].substr(String(r).length);if(isNaN(r))switch(a){case"gte":s="screen";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: -1px)";break;case"not":s="screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (max-width: "+d+c+")"}else if(isNaN(d))switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen";break;case"gt":s="screen and (max-width: -1px)";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+")";break;default:s="screen and (min-width: "+r+c+")"}else switch(a){case"gte":s="screen and (min-width: "+r+c+")";break;case"lte":s="screen and (max-width: "+d+c+")";break;case"gt":s="screen and (min-width: "+(d+1)+c+")";break;case"lt":s="screen and (max-width: "+(r-1)+c+")";break;case"not":s="screen and (max-width: "+(r-1)+c+"), screen and (min-width: "+(d+1)+c+")";break;default:s="screen and (min-width: "+r+c+") and (max-width: "+d+c+")"}}else s="("==i.charAt(0)?"screen and "+i:i;t.media[e]=!!s&&s}return t.media[e]!==!1&&window.matchMedia(t.media[e]).matches},on:function(e,n){t.events.push({query:e,handler:n,state:!1}),t.active(e)&&n()},poll:function(){var e,n;for(e=0;e<t.events.length;e++)n=t.events[e],t.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return e._=t,e.on=function(e,n){t.on(e,n)},e.active=function(e){return t.active(e)},e}();!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.breakpoints=t()}(this,function(){return breakpoints});

/* browser.js v1.0 | @ajlkn | MIT licensed */
var browser=function(){"use strict";var e={name:null,version:null,os:null,osVersion:null,touch:null,mobile:null,_canUse:null,canUse:function(n){e._canUse||(e._canUse=document.createElement("div"));var o=e._canUse.style,r=n.charAt(0).toUpperCase()+n.slice(1);return n in o||"Moz"+r in o||"Webkit"+r in o||"O"+r in o||"ms"+r in o},init:function(){var n,o,r,i,t=navigator.userAgent;for(n="other",o=0,r=[["firefox",/Firefox\/([0-9\.]+)/],["bb",/BlackBerry.+Version\/([0-9\.]+)/],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/],["opera",/OPR\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)/],["edge",/Edge\/([0-9\.]+)/],["safari",/Version\/([0-9\.]+).+Safari/],["chrome",/Chrome\/([0-9\.]+)/],["ie",/MSIE ([0-9]+)/],["ie",/Trident\/.+rv:([0-9]+)/]],i=0;i<r.length;i++)if(t.match(r[i][1])){n=r[i][0],o=parseFloat(RegExp.$1);break}for(e.name=n,e.version=o,n="other",o=0,r=[["ios",/([0-9_]+) like Mac OS X/,function(e){return e.replace("_",".").replace("_","")}],["ios",/CPU like Mac OS X/,function(e){return 0}],["wp",/Windows Phone ([0-9\.]+)/,null],["android",/Android ([0-9\.]+)/,null],["mac",/Macintosh.+Mac OS X ([0-9_]+)/,function(e){return e.replace("_",".").replace("_","")}],["windows",/Windows NT ([0-9\.]+)/,null],["bb",/BlackBerry.+Version\/([0-9\.]+)/,null],["bb",/BB[0-9]+.+Version\/([0-9\.]+)/,null],["linux",/Linux/,null],["bsd",/BSD/,null],["unix",/X11/,null]],i=0;i<r.length;i++)if(t.match(r[i][1])){n=r[i][0],o=parseFloat(r[i][2]?r[i][2](RegExp.$1):RegExp.$1);break}e.os=n,e.osVersion=o,e.touch="wp"==e.os?navigator.msMaxTouchPoints>0:!!("ontouchstart"in window),e.mobile="wp"==e.os||"android"==e.os||"ios"==e.os||"bb"==e.os}};return e.init(),e}();!function(e,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?module.exports=n():e.browser=n()}(this,function(){return browser});

/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);


/*! paginathing 2018-01-31 */

!function(t,a,e){"use strict";var i=function(a,e){return this.el=t(a),this.options=t.extend({},t.fn.paginathing.defaults,e),this.startPage=1,this.currentPage=1,this.totalItems=this.el.children().length,this.totalPages=Math.max(Math.ceil(this.totalItems/this.options.perPage),this.options.limitPagination),this.container=t("<nav></nav>").addClass(this.options.containerClass),this.ul=t("<ul></ul>").addClass(this.options.ulClass),this.show(this.startPage),this};i.prototype={pagination:function(a,e){var i=this,n=t("<li></li>"),s=t("<a></a>").attr("href","#"),r="number"===a?i.options.liClass:a,o="";return o="number"===a?e:"pageNumbers"===a?i.paginationNumbersText():i.paginationText(a),n.addClass(r),n.data("pagination-type",a),n.data("page",e),n.append(s.html(o)),n},paginationText:function(t){return this.options[t+"Text"]},paginationNumbersText:function(){return"Page "+this.currentPage+"/"+this.totalPages},buildPagination:function(){var t,a,e=this,i=[],n=e.currentPage-1<e.startPage?e.startPage:e.currentPage-1,s=e.currentPage+1>e.totalPages?e.totalPages:e.currentPage+1,r=e.options.limitPagination;r?e.currentPage<=Math.ceil(r/2)+1?(t=1,a=r):e.currentPage+Math.floor(r/2)>=e.totalPages?(t=e.totalPages+1-r,a=e.totalPages):(t=e.currentPage-Math.ceil(r/2),a=e.currentPage+Math.floor(r/2)):(t=e.startPage,a=e.totalPages),e.options.firstLast&&i.push(e.pagination("first",e.startPage)),e.options.prevNext&&i.push(e.pagination("prev",n));for(var o=t;o<=a;o++)i.push(e.pagination("number",o));return e.options.prevNext&&i.push(e.pagination("next",s)),e.options.firstLast&&i.push(e.pagination("last",e.totalPages)),e.options.pageNumbers&&i.push(e.pagination("pageNumbers",e.currentPage)),i},render:function(a){var e=this,i=e.options,n=e.buildPagination();e.ul.children().remove(),e.ul.append(n);var s=1===a?0:(a-1)*i.perPage,r=a*i.perPage;e.el.children().hide(),e.el.children().slice(s,r).show(),e.ul.children().each(function(){var n=t(this);switch(n.data("pagination-type")){case"number":n.data("page")===a&&n.addClass(i.activeClass);break;case"first":a===e.startPage&&n.toggleClass(i.disabledClass);break;case"last":a===e.totalPages&&n.toggleClass(i.disabledClass);break;case"prev":a-1<e.startPage&&n.toggleClass(i.disabledClass);break;case"next":a+1>e.totalPages&&n.toggleClass(i.disabledClass)}}),i.insertAfter?e.container.append(e.ul).insertAfter(t(i.insertAfter)):e.el.after(e.container.append(e.ul))},handle:function(){var a=this;a.container.find("li").each(function(){var e=t(this);e.click(function(t){t.preventDefault();var i=e.data("page");a.currentPage=i,a.show(i)})})},show:function(t){this.render(t),this.handle()}},t.fn.paginathing=function(t){return this.each(function(){return new i(this,t)})},t.fn.paginathing.defaults={perPage:10,limitPagination:4,firstLast:!0,prevText:"&laquo;",nextText:"&raquo;",firstText:"First",lastText:"Last",containerClass:"pagination-container",ulClass:"pagination",liClass:"page",activeClass:"active",disabledClass:"disabled",insertAfter:null,pageNumbers:!1}}(jQuery,window,document);

$('.jobs').paginathing({ //親要素のclassを記述
      PageNumbers: true,
      pageNumberDisplayNumber: 4,
      perPage: 6,//1ページあたりの表示件数
      firstText: '最初',
      lastText: '最後',
      prevText: '前へ',//1つ前のページへ移動するボタンのテキスト
      nextText:'次へ',//1つ次のページへ移動するボタンのテキスト
      activeClass: 'active',//現在のページ番号に任意のclassを付与できます
  });