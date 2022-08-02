!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(e.jQuery)}(this,(function(e){"use strict";var t={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""};function o(e){var t,o,i,n,r,s,a,d={};for(a=0,s=(r=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(",")).length;a<s&&-1===(o=r[a]).search(/^(http|https|ftp):\/\//)&&-1!==o.search(":");a++)t=o.indexOf(":"),i=o.substring(0,t),(n=o.substring(t+1))||(n=void 0),"string"==typeof n&&(n="true"===n||"false"!==n&&n),"string"==typeof n&&(n=isNaN(n)?n:+n),d[i]=n;return null==i&&null==n?e:d}function i(i,n,r){if(this.$element=e(i),"string"==typeof n&&(n=o(n)),r?"string"==typeof r&&(r=o(r)):r={},"string"==typeof n)n=n.replace(/\.\w*$/,"");else if("object"==typeof n)for(var s in n)n.hasOwnProperty(s)&&(n[s]=n[s].replace(/\.\w*$/,""));this.settings=e.extend({},t,r),this.path=n;try{this.init()}catch(e){if("Not implemented"!==e.message)throw e}}i.prototype.init=function(){var t,o,i=this,n=i.path,r=n,s="",a=i.$element,d=i.settings,p=function(e){var t,o,i,n=(e=""+e).split(/\s+/),r="50%",s="50%";for(i=0,t=n.length;i<t;i++)"left"===(o=n[i])?r="0%":"right"===o?r="100%":"top"===o?s="0%":"bottom"===o?s="100%":"center"===o?0===i?r="50%":s="50%":0===i?r=o:s=o;return{x:r,y:s}}(d.position),c=d.posterType;o=i.$wrapper=e("<div>").addClass(d.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":d.bgColor,"background-repeat":"no-repeat","background-position":p.x+" "+p.y}),"object"==typeof n&&(n.poster?r=n.poster:n.mp4?r=n.mp4:n.webm?r=n.webm:n.ogv&&(r=n.ogv)),"detect"===c?function(t,o){var i=function(){o(this.src)};e('<img src="'+t+'.gif">').on("load",i),e('<img src="'+t+'.jpg">').on("load",i),e('<img src="'+t+'.jpeg">').on("load",i),e('<img src="'+t+'.png">').on("load",i)}(r,(function(e){o.css("background-image","url("+e+")")})):"none"!==c&&o.css("background-image","url("+r+"."+c+")"),"static"===a.css("position")&&a.css("position","relative"),a.prepend(o),"object"==typeof n?(n.mp4&&(s+='<source src="'+n.mp4+'.mp4" type="video/mp4">'),n.webm&&(s+='<source src="'+n.webm+'.webm" type="video/webm">'),n.ogv&&(s+='<source src="'+n.ogv+'.ogv" type="video/ogg">'),t=i.$video=e("<video>"+s+"</video>")):t=i.$video=e('<video><source src="'+n+'.mp4" type="video/mp4"><source src="'+n+'.webm" type="video/webm"><source src="'+n+'.ogv" type="video/ogg"></video>');try{t.prop({autoplay:d.autoplay,loop:d.loop,volume:d.volume,muted:d.muted,defaultMuted:d.muted,playbackRate:d.playbackRate,defaultPlaybackRate:d.playbackRate})}catch(e){throw new Error("Not implemented")}t.css({margin:"auto",position:"absolute","z-index":-1,top:p.y,left:p.x,"-webkit-transform":"translate(-"+p.x+", -"+p.y+")","-ms-transform":"translate(-"+p.x+", -"+p.y+")","-moz-transform":"translate(-"+p.x+", -"+p.y+")",transform:"translate(-"+p.x+", -"+p.y+")",visibility:"hidden",opacity:0}).one("canplaythrough.vide",(function(){i.resize()})).one("playing.vide",(function(){t.css({visibility:"visible",opacity:1}),o.css("background-image","none")})),a.on("resize.vide",(function(){d.resizing&&i.resize()})),o.append(t)},i.prototype.getVideoObject=function(){return this.$video[0]},i.prototype.resize=function(){if(this.$video){var e=this.$wrapper,t=this.$video,o=t[0],i=o.videoHeight,n=o.videoWidth,r=e.height(),s=e.width();s/n>r/i?t.css({width:s+2,height:"auto"}):t.css({width:"auto",height:r+2})}},i.prototype.destroy=function(){delete e.vide.lookup[this.index],this.$video&&this.$video.off("vide"),this.$element.off("vide").removeData("vide"),this.$wrapper.remove()},e.vide={lookup:[]},e.fn.vide=function(t,o){var n;return this.each((function(){(n=e.data(this,"vide"))&&n.destroy(),(n=new i(this,t,o)).index=e.vide.lookup.push(n)-1,e.data(this,"vide",n)})),this},e(document).ready((function(){var t=e(window);t.on("resize.vide",(function(){for(var t,o=e.vide.lookup.length,i=0;i<o;i++)(t=e.vide.lookup[i])&&t.settings.resizing&&t.resize()})),t.on("unload.vide",(function(){return!1})),e(document).find("[data-vide-bg]").each((function(t,o){var i=e(o),n=i.data("vide-options"),r=i.data("vide-bg");i.vide(r,n)}))}))}));