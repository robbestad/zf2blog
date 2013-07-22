function e(e,t){return Math.floor(Math.random()*(t-e+1))+e}function t(e,t){return Math.random()*(t-e)+
e}function n(e){for(var t=e.length,n,r;0!==t;)r=Math.floor(Math.random()*t),t-=1,n=e[t],e[t]=e[r],e[r
]=n;return e}(function(e){Number.prototype.map=function(e,t,n,r){return n+(r-n)*((this-e)/(t-e))},Number
.prototype.limit=function(e,t){return Math.min(t,Math.max(e,this))},Number.prototype.round=function(e
){return e=Math.pow(10,e||0),Math.round(this*e)/e},Number.prototype.floor=function(){return Math.floor
(this)},Number.prototype.ceil=function(){return Math.ceil(this)},Number.prototype.toInt=function(){return this|0
},Number.prototype.toRad=function(){return this/180*Math.PI},Number.prototype.toDeg=function(){return 180*
this/Math.PI},Array.prototype.erase=function(e){for(var t=this.length;t--;)this[t]===e&&this.splice(t
,1);return this},Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]
},Function.prototype.bind=Function.prototype.bind||function(e){if("function"!=typeof this)throw new TypeError
("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.
call(arguments,1),n=this,r=function(){},i=function(){return n.apply(this instanceof r&&e?this:e,t.concat
(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,i.prototype=new r,i},e.ig=
{game:null,debug:null,version:"1.22",global:e,modules:{},resources:[],ready:!1,baked:!1,nocache:"",ua
:{},prefix:e.ImpactPrefix||"",lib:"lib/",_current:null,_loadQueue:[],_waitForOnload:0,$:function(e){return"#"==
e.charAt(0)?document.getElementById(e.substr(1)):document.getElementsByTagName(e)},$new:function(e){return document
.createElement(e)},copy:function(e){if(!e||"object"!=typeof e||e instanceof HTMLElement||e instanceof 
ig.Class)return e;if(e instanceof Array)for(var t=[],n=0,r=e.length;n<r;n++)t[n]=ig.copy(e[n]);else for(
n in t={},e)t[n]=ig.copy(e[n]);return t},merge:function(e,t){for(var n in t){var r=t[n];if("object"!=typeof 
r||r instanceof HTMLElement||r instanceof ig.Class||null===r)e[n]=r;else{if(!e[n]||"object"!=typeof e
[n])e[n]=r instanceof Array?[]:{};ig.merge(e[n],r)}}return e},ksort:function(e){if(!e||"object"!=typeof 
e)return[];var t=[],n=[],r;for(r in e)t.push(r);t.sort();for(r=0;r<t.length;r++)n.push(e[t[r]]);return n
},setVendorAttribute:function(e,t,n){var r=t.charAt(0).toUpperCase()+t.substr(1);e[t]=e["ms"+r]=e["moz"+
r]=e["webkit"+r]=e["o"+r]=n},getVendorAttribute:function(e,t){var n=t.charAt(0).toUpperCase()+t.substr
(1);return e[t]||e["ms"+n]||e["moz"+n]||e["webkit"+n]||e["o"+n]},normalizeVendorAttribute:function(e,
t){var n=ig.getVendorAttribute(e,t);!e[t]&&n&&(e[t]=n)},getImagePixels:function(e,t,n,r,i){var s=ig.$new
("canvas");s.width=e.width,s.height=e.height;var o=s.getContext("2d");ig.System.SCALE.CRISP(s,o);var u=
ig.getVendorAttribute(o,"backingStorePixelRatio")||1;ig.normalizeVendorAttribute(o,"getImageDataHD");
var a=e.width/u,f=e.height/u;return s.width=Math.ceil(a),s.height=Math.ceil(f),o.drawImage(e,0,0,a,f)
,1===u?o.getImageData(t,n,r,i):o.getImageDataHD(t,n,r,i)},module:function(e){if(ig._current)throw"Module '"+
ig._current.name+"' defines nothing";if(ig.modules[e]&&ig.modules[e].body)throw"Module '"+e+"' is already defined"
;return ig._current={name:e,requires:[],loaded:!1,body:null},ig.modules[e]=ig._current,ig._loadQueue.
push(ig._current),ig},requires:function(){return ig._current.requires=Array.prototype.slice.call(arguments
),ig},defines:function(e){ig._current.body=e,ig._current=null,ig._initDOMReady()},addResource:function(
e){ig.resources.push(e)},setNocache:function(e){ig.nocache=e?"?"+Date.now():""},log:function(){},assert
:function(){},show:function(){},mark:function(){},_loadScript:function(e,t){ig.modules[e]={name:e,requires
:[],loaded:!1,body:null},ig._waitForOnload++;var n=ig.prefix+ig.lib+e.replace(/\./g,"/")+".js"+ig.nocache
,r=ig.$new("script");r.type="text/javascript",r.src=n,r.onload=function(){ig._waitForOnload--,ig._execModules
()},r.onerror=function(){throw"Failed to load module "+e+" at "+n+" required from "+t},ig.$("head")[0
].appendChild(r)},_execModules:function(){for(var e=!1,t=0;t<ig._loadQueue.length;t++){for(var n=ig._loadQueue
[t],r=!0,i=0;i<n.requires.length;i++){var s=n.requires[i];ig.modules[s]?ig.modules[s].loaded||(r=!1):
(r=!1,ig._loadScript(s,n.name))}r&&n.body&&(ig._loadQueue.splice(t,1),n.loaded=!0,n.body(),e=!0,t--)}
if(e)ig._execModules();else if(!ig.baked&&0==ig._waitForOnload&&0!=ig._loadQueue.length){e=[];for(t=0
;t<ig._loadQueue.length;t++){r=[],s=ig._loadQueue[t].requires;for(i=0;i<s.length;i++)n=ig.modules[s[i
]],(!n||!n.loaded)&&r.push(s[i]);e.push(ig._loadQueue[t].name+" (requires: "+r.join(", ")+")")}throw"Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n"+
e.join("\n")}},_DOMReady:function(){if(!ig.modules["dom.ready"].loaded){if(!document.body)return setTimeout
(ig._DOMReady,13);ig.modules["dom.ready"].loaded=!0,ig._waitForOnload--,ig._execModules()}return 0},_boot
:function(){document.location.href.match(/\?nocache/)&&ig.setNocache(!0),ig.ua.pixelRatio=e.devicePixelRatio||1
,ig.ua.viewport={width:e.innerWidth,height:e.innerHeight},ig.ua.screen={width:e.screen.availWidth*ig.
ua.pixelRatio,height:e.screen.availHeight*ig.ua.pixelRatio},ig.ua.iPhone=/iPhone/i.test(navigator.userAgent
),ig.ua.iPhone4=ig.ua.iPhone&&2==ig.ua.pixelRatio,ig.ua.iPad=/iPad/i.test(navigator.userAgent),ig.ua.
android=/android/i.test(navigator.userAgent),ig.ua.winPhone=/Windows Phone/i.test(navigator.userAgent
),ig.ua.iOS=ig.ua.iPhone||ig.ua.iPad,ig.ua.mobile=ig.ua.iOS||ig.ua.android||ig.ua.winPhone||/mobile/i
.test(navigator.userAgent),ig.ua.touchDevice="ontouchstart"in e||e.navigator.msMaxTouchPoints},_initDOMReady
:function(){ig.modules["dom.ready"]?ig._execModules():(ig._boot(),ig.modules["dom.ready"]={requires:[
],loaded:!1,body:null},ig._waitForOnload++,"complete"===document.readyState?ig._DOMReady():(document.
addEventListener("DOMContentLoaded",ig._DOMReady,!1),e.addEventListener("load",ig._DOMReady,!1)))}},ig
.normalizeVendorAttribute(e,"requestAnimationFrame");if(e.requestAnimationFrame){var t=1,n={};e.ig.setAnimation=
function(r,i){var s=t++;n[s]=!0;var o=function(){n[s]&&(e.requestAnimationFrame(o,i),r())};return e.requestAnimationFrame
(o,i),s},e.ig.clearAnimation=function(e){delete n[e]}}else e.ig.setAnimation=function(t){return e.setInterval
(t,1e3/60)},e.ig.clearAnimation=function(t){e.clearInterval(t)};var r=!1,i=/xyz/.test(function(){xyz}
)?/\bparent\b/:/.*/,s=0;e.ig.Class=function(){};var o=function(e){var t=this.prototype,n={},r;for(r in 
e)"function"==typeof e[r]&&"function"==typeof t[r]&&i.test(e[r])?(n[r]=t[r],t[r]=function(e,t){return function(
){var r=this.parent;this.parent=n[e];var i=t.apply(this,arguments);return this.parent=r,i}}(r,e[r])):
t[r]=e[r]};e.ig.Class.extend=function(t){function n(){if(!r){if(this.staticInstantiate){var e=this.staticInstantiate
.apply(this,arguments);if(e)return e}for(var t in this)"object"==typeof this[t]&&(this[t]=ig.copy(this
[t]));this.init&&this.init.apply(this,arguments)}return this}var u=this.prototype;r=!0;var l=new this
;r=!1;for(var c in t)l[c]="function"==typeof t[c]&&"function"==typeof u[c]&&i.test(t[c])?function(e,t
){return function(){var n=this.parent;this.parent=u[e];var r=t.apply(this,arguments);return this.parent=
n,r}}(c,t[c]):t[c];return n.prototype=l,n.prototype.constructor=n,n.extend=e.ig.Class.extend,n.inject=
o,n.classId=l.classId=++s,n},e.ImpactMixin&&ig.merge(ig,e.ImpactMixin)})(window),ig.baked=!0,ig.module
("impact.image").defines(function(){ig.Image=ig.Class.extend({data:null,width:0,height:0,loaded:!1,failed
:!1,loadCallback:null,path:"",staticInstantiate:function(e){return ig.Image.cache[e]||null},init:function(
e){this.path=e,this.load()},load:function(e){this.loaded?e&&e(this.path,!0):(!this.loaded&&ig.ready?(
this.loadCallback=e||null,this.data=new Image,this.data.onload=this.onload.bind(this),this.data.onerror=
this.onerror.bind(this),this.data.src=ig.prefix+this.path+ig.nocache):ig.addResource(this),ig.Image.cache
[this.path]=this)},reload:function(){this.loaded=!1,this.data=new Image,this.data.onload=this.onload.
bind(this),this.data.src=this.path+"?"+Date.now()},onload:function(){this.width=this.data.width,this.
height=this.data.height,this.loaded=!0,1!=ig.system.scale&&this.resize(ig.system.scale),this.loadCallback&&
this.loadCallback(this.path,!0)},onerror:function(){this.failed=!0,this.loadCallback&&this.loadCallback
(this.path,!1)},resize:function(e){var t=ig.getImagePixels(this.data,0,0,this.width,this.height),n=this
.width*e,r=this.height*e,i=ig.$new("canvas");i.width=n,i.height=r;for(var s=i.getContext("2d"),o=s.getImageData
(0,0,n,r),u=0;u<r;u++)for(var a=0;a<n;a++){var f=4*(Math.floor(u/e)*this.width+Math.floor(a/e)),l=4*(
u*n+a);o.data[l]=t.data[f],o.data[l+1]=t.data[f+1],o.data[l+2]=t.data[f+2],o.data[l+3]=t.data[f+3]}s.
putImageData(o,0,0),this.data=i},draw:function(e,t,n,r,i,s){if(this.loaded){var o=ig.system.scale;i=(
i?i:this.width)*o,s=(s?s:this.height)*o,ig.system.context.drawImage(this.data,n?n*o:0,r?r*o:0,i,s,ig.
system.getDrawPos(e),ig.system.getDrawPos(t),i,s),ig.Image.drawCount++}},drawTile:function(e,t,n,r,i,
s,o){i=i?i:r;if(this.loaded&&!(r>this.width||i>this.height)){var u=ig.system.scale,a=Math.floor(r*u),
f=Math.floor(i*u),l=s?-1:1,c=o?-1:1;if(s||o)ig.system.context.save(),ig.system.context.scale(l,c);ig.
system.context.drawImage(this.data,Math.floor(n*r)%this.width*u,Math.floor(n*r/this.width)*i*u,a,f,ig
.system.getDrawPos(e)*l-(s?a:0),ig.system.getDrawPos(t)*c-(o?f:0),a,f),(s||o)&&ig.system.context.restore
(),ig.Image.drawCount++}}}),ig.Image.drawCount=0,ig.Image.cache={},ig.Image.reloadCache=function(){for(
var e in ig.Image.cache)ig.Image.cache[e].reload()}}),ig.baked=!0,ig.module("impact.font").requires("impact.image"
).defines(function(){ig.Font=ig.Image.extend({widthMap:[],indices:[],firstChar:32,alpha:1,letterSpacing
:1,lineSpacing:0,onload:function(e){this._loadMetrics(this.data),this.parent(e)},widthForString:function(
e){if(-1!==e.indexOf("\n")){e=e.split("\n");for(var t=0,n=0;n<e.length;n++)t=Math.max(t,this._widthForLine
(e[n]));return t}return this._widthForLine(e)},_widthForLine:function(e){for(var t=0,n=0;n<e.length;n++
)t+=this.widthMap[e.charCodeAt(n)-this.firstChar]+this.letterSpacing;return t},heightForString:function(
e){return e.split("\n").length*(this.height+this.lineSpacing)},draw:function(e,t,n,r){"string"!=typeof 
e&&(e=e.toString());if(-1!==e.indexOf("\n")){e=e.split("\n");for(var i=this.height+this.lineSpacing,s=0
;s<e.length;s++)this.draw(e[s],t,n+s*i,r)}else{if(r==ig.Font.ALIGN.RIGHT||r==ig.Font.ALIGN.CENTER)s=this
._widthForLine(e),t-=r==ig.Font.ALIGN.CENTER?s/2:s;1!==this.alpha&&(ig.system.context.globalAlpha=this
.alpha);for(s=0;s<e.length;s++)r=e.charCodeAt(s),t+=this._drawChar(r-this.firstChar,t,n);1!==this.alpha&&
(ig.system.context.globalAlpha=1),ig.Image.drawCount+=e.length}},_drawChar:function(e,t,n){if(!this.loaded||0>
e||e>=this.indices.length)return 0;var r=ig.system.scale,i=this.widthMap[e]*r,s=(this.height-2)*r;return ig
.system.context.drawImage(this.data,this.indices[e]*r,0,i,s,ig.system.getDrawPos(t),ig.system.getDrawPos
(n),i,s),this.widthMap[e]+this.letterSpacing},_loadMetrics:function(e){this.height=e.height-1,this.widthMap=
[],this.indices=[];for(var t=ig.getImagePixels(e,0,e.height-1,e.width,1),n=0,r=0,i=0;i<e.width;i++){var s=4*
i+3;127<t.data[s]?r++:128>t.data[s]&&r&&(this.widthMap.push(r),this.indices.push(i-r),n++,r=0)}this.widthMap
.push(r),this.indices.push(i-r)}}),ig.Font.ALIGN={LEFT:0,RIGHT:1,CENTER:2}}),ig.baked=!0,ig.module("impact.sound"
).defines(function(){ig.SoundManager=ig.Class.extend({clips:{},volume:1,format:null,init:function(){if(!
ig.Sound.enabled||!window.Audio)ig.Sound.enabled=!1;else{for(var e=new Audio,t=0;t<ig.Sound.use.length
;t++){var n=ig.Sound.use[t];if(e.canPlayType(n.mime)){this.format=n;break}}this.format||(ig.Sound.enabled=!1
)}},load:function(e,t,n){var r=ig.prefix+e.replace(/[^\.]+$/,this.format.ext)+ig.nocache;if(this.clips
[e]){if(t&&this.clips[e].length<ig.Sound.channels)for(t=this.clips[e].length;t<ig.Sound.channels;t++)
{var i=new Audio(r);i.load(),this.clips[e].push(i)}return this.clips[e][0]}var s=new Audio(r);n&&(s.addEventListener
("canplaythrough",function o(t){s.removeEventListener("canplaythrough",o,!1),n(e,!0,t)},!1),s.addEventListener
("error",function(t){n(e,!1,t)},!1)),s.preload="auto",s.load(),this.clips[e]=[s];if(t)for(t=1;t<ig.Sound
.channels;t++)i=new Audio(r),i.load(),this.clips[e].push(i);return s},get:function(e){e=this.clips[e]
;for(var t=0,n;n=e[t++];)if(n.paused||n.ended)return n.ended&&(n.currentTime=0),n;return e[0].pause()
,e[0].currentTime=0,e[0]}}),ig.Music=ig.Class.extend({tracks:[],namedTracks:{},currentTrack:null,currentIndex
:0,random:!1,_volume:1,_loop:!1,_fadeInterval:0,_fadeTimer:null,_endedCallbackBound:null,init:function(
){this._endedCallbackBound=this._endedCallback.bind(this),Object.defineProperty?(Object.defineProperty
(this,"volume",{get:this.getVolume.bind(this),set:this.setVolume.bind(this)}),Object.defineProperty(this
,"loop",{get:this.getLooping.bind(this),set:this.setLooping.bind(this)})):this.__defineGetter__&&(this
.__defineGetter__("volume",this.getVolume.bind(this)),this.__defineSetter__("volume",this.setVolume.bind
(this)),this.__defineGetter__("loop",this.getLooping.bind(this)),this.__defineSetter__("loop",this.setLooping
.bind(this)))},add:function(e,t){if(ig.Sound.enabled){var n=ig.soundManager.load(e instanceof ig.Sound?
e.path:e,!1);n.loop=this._loop,n.volume=this._volume,n.addEventListener("ended",this._endedCallbackBound
,!1),this.tracks.push(n),t&&(this.namedTracks[t]=n),this.currentTrack||(this.currentTrack=n)}},next:function(
){this.tracks.length&&(this.stop(),this.currentIndex=this.random?Math.floor(Math.random()*this.tracks
.length):(this.currentIndex+1)%this.tracks.length,this.currentTrack=this.tracks[this.currentIndex],this
.play())},pause:function(){this.currentTrack&&this.currentTrack.pause()},stop:function(){this.currentTrack&&
(this.currentTrack.pause(),this.currentTrack.currentTime=0)},play:function(e){if(e&&this.namedTracks[
e])e=this.namedTracks[e],e!=this.currentTrack&&(this.stop(),this.currentTrack=e);else if(!this.currentTrack
)return;this.currentTrack.play()},getLooping:function(){return this._loop},setLooping:function(e){this
._loop=e;for(var t in this.tracks)this.tracks[t].loop=e},getVolume:function(){return this._volume},setVolume
:function(e){this._volume=e.limit(0,1);for(var t in this.tracks)this.tracks[t].volume=this._volume},fadeOut
:function(e){this.currentTrack&&(clearInterval(this._fadeInterval),this.fadeTimer=new ig.Timer(e),this
._fadeInterval=setInterval(this._fadeStep.bind(this),50))},_fadeStep:function(){var e=this.fadeTimer.
delta().map(-this.fadeTimer.target,0,1,0).limit(0,1)*this._volume;.01>=e?(this.stop(),this.currentTrack
.volume=this._volume,clearInterval(this._fadeInterval)):this.currentTrack.volume=e},_endedCallback:function(
){this._loop?this.play():this.next()}}),ig.Sound=ig.Class.extend({path:"",volume:1,currentClip:null,multiChannel
:!0,init:function(e,t){this.path=e,this.multiChannel=!1!==t,this.load()},load:function(e){ig.Sound.enabled?
ig.ready?ig.soundManager.load(this.path,this.multiChannel,e):ig.addResource(this):e&&e(this.path,!0)}
,play:function(){ig.Sound.enabled&&(this.currentClip=ig.soundManager.get(this.path),this.currentClip.
volume=ig.soundManager.volume*this.volume,this.currentClip.play())},stop:function(){this.currentClip&&
(this.currentClip.pause(),this.currentClip.currentTime=0)}}),ig.Sound.FORMAT={MP3:{ext:"mp3",mime:"audio/mpeg"
},M4A:{ext:"m4a",mime:"audio/mp4; codecs=mp4a"},OGG:{ext:"ogg",mime:"audio/ogg; codecs=vorbis"},WEBM:
{ext:"webm",mime:"audio/webm; codecs=vorbis"},CAF:{ext:"caf",mime:"audio/x-caf"}},ig.Sound.use=[ig.Sound
.FORMAT.OGG,ig.Sound.FORMAT.MP3],ig.Sound.channels=4,ig.Sound.enabled=!0}),ig.baked=!0,ig.module("impact.loader"
).requires("impact.image","impact.font","impact.sound").defines(function(){ig.Loader=ig.Class.extend(
{resources:[],gameClass:null,status:0,done:!1,_unloaded:[],_drawStatus:0,_intervalId:0,_loadCallbackBound
:null,init:function(e,t){this.gameClass=e,this.resources=t,this._loadCallbackBound=this._loadCallback
.bind(this);for(var n=0;n<this.resources.length;n++)this._unloaded.push(this.resources[n].path)},load
:function(){ig.system.clear("#000");if(this.resources.length){for(var e=0;e<this.resources.length;e++
)this.loadResource(this.resources[e]);this._intervalId=setInterval(this.draw.bind(this),16)}else this
.end()},loadResource:function(e){e.load(this._loadCallbackBound)},end:function(){this.done||(this.done=!0
,clearInterval(this._intervalId),ig.system.setGame(this.gameClass))},draw:function(){this._drawStatus+=
(this.status-this._drawStatus)/5;var e=ig.system.scale,t=.6*ig.system.width,n=.1*ig.system.height,r=.5*
ig.system.width-t/2,i=.5*ig.system.height-n/2;ig.system.context.fillStyle="#000",ig.system.context.fillRect
(0,0,480,320),ig.system.context.fillStyle="#fff",ig.system.context.fillRect(r*e,i*e,t*e,n*e),ig.system
.context.fillStyle="#000",ig.system.context.fillRect(r*e+e,i*e+e,t*e-e-e,n*e-e-e),ig.system.context.fillStyle="#fff"
,ig.system.context.fillRect(r*e,i*e,t*e*this._drawStatus,n*e)},_loadCallback:function(e,t){if(!t)throw"Failed to load resource: "+
e;this._unloaded.erase(e),this.status=1-this._unloaded.length/this.resources.length,0==this._unloaded
.length&&setTimeout(this.end.bind(this),250)}})}),ig.baked=!0,ig.module("impact.timer").defines(function(
){ig.Timer=ig.Class.extend({target:0,base:0,last:0,pausedAt:0,init:function(e){this.last=this.base=ig
.Timer.time,this.target=e||0},set:function(e){this.target=e||0,this.base=ig.Timer.time,this.pausedAt=0
},reset:function(){this.base=ig.Timer.time,this.pausedAt=0},tick:function(){var e=ig.Timer.time-this.
last;return this.last=ig.Timer.time,this.pausedAt?0:e},delta:function(){return(this.pausedAt||ig.Timer
.time)-this.base-this.target},pause:function(){this.pausedAt||(this.pausedAt=ig.Timer.time)},unpause:
function(){this.pausedAt&&(this.base+=ig.Timer.time-this.pausedAt,this.pausedAt=0)}}),ig.Timer._last=0
,ig.Timer.time=Number.MIN_VALUE,ig.Timer.timeScale=1,ig.Timer.maxStep=.05,ig.Timer.step=function(){var e=
Date.now();ig.Timer.time+=Math.min((e-ig.Timer._last)/1e3,ig.Timer.maxStep)*ig.Timer.timeScale,ig.Timer
._last=e}}),ig.baked=!0,ig.module("impact.system").requires("impact.timer","impact.image").defines(function(
){ig.System=ig.Class.extend({fps:30,width:320,height:240,realWidth:320,realHeight:240,scale:1,tick:0,
animationId:0,newGameClass:null,running:!1,delegate:null,clock:null,canvas:null,context:null,init:function(
e,t,n,r,i){this.fps=t,this.clock=new ig.Timer,this.canvas=ig.$(e),this.resize(n,r,i),this.context=this
.canvas.getContext("2d"),this.getDrawPos=ig.System.drawMode,1!=this.scale&&(ig.System.scaleMode=ig.System
.SCALE.CRISP),ig.System.scaleMode(this.canvas,this.context)},resize:function(e,t,n){this.width=e,this
.height=t,this.scale=n||this.scale,this.realWidth=this.width*this.scale,this.realHeight=this.height*this
.scale,this.canvas.width=this.realWidth,this.canvas.height=this.realHeight},setGame:function(e){this.
running?this.newGameClass=e:this.setGameNow(e)},setGameNow:function(e){ig.game=new e,ig.system.setDelegate
(ig.game)},setDelegate:function(e){if("function"!=typeof e.run)throw"System.setDelegate: No run() function in object"
;this.delegate=e,this.startRunLoop()},stopRunLoop:function(){ig.clearAnimation(this.animationId),this
.running=!1},startRunLoop:function(){this.stopRunLoop(),this.animationId=ig.setAnimation(this.run.bind
(this),this.canvas),this.running=!0},clear:function(e){this.context.fillStyle=e,this.context.fillRect
(0,0,this.realWidth,this.realHeight)},run:function(){ig.Timer.step(),this.tick=this.clock.tick(),this
.delegate.run(),ig.input.clearPressed(),this.newGameClass&&(this.setGameNow(this.newGameClass),this.newGameClass=
null)},getDrawPos:null}),ig.System.DRAW={AUTHENTIC:function(e){return Math.round(e)*this.scale},SMOOTH
:function(e){return Math.round(e*this.scale)},SUBPIXEL:function(e){return e*this.scale}},ig.System.drawMode=
ig.System.DRAW.SMOOTH,ig.System.SCALE={CRISP:function(e,t){ig.setVendorAttribute(t,"imageSmoothingEnabled"
,!1),e.style.imageRendering="-moz-crisp-edges",e.style.imageRendering="-o-crisp-edges",e.style.imageRendering="-webkit-optimize-contrast"
,e.style.imageRendering="crisp-edges",e.style.msInterpolationMode="nearest-neighbor"},SMOOTH:function(
e,t){ig.setVendorAttribute(t,"imageSmoothingEnabled",!0),e.style.imageRendering="",e.style.msInterpolationMode=""
}},ig.System.scaleMode=ig.System.SCALE.SMOOTH}),ig.baked=!0,ig.module("impact.input").defines(function(
){ig.KEY={MOUSE1:-1,MOUSE2:-3,MWHEEL_UP:-4,MWHEEL_DOWN:-5,BACKSPACE:8,TAB:9,ENTER:13,PAUSE:19,CAPS:20
,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW
:40,INSERT:45,DELETE:46,_0:48,_1:49,_2:50,_3:51,_4:52,_5:53,_6:54,_7:55,_8:56,_9:57,A:65,B:66,C:67,D:68
,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,
Y:89,Z:90,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7
:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBSTRACT:109,DECIMAL:110,DIVIDE:111,F1:112,F2:113
,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,SHIFT:16,CTRL:17,ALT:18,PLUS
:187,COMMA:188,MINUS:189,PERIOD:190},ig.Input=ig.Class.extend({bindings:{},actions:{},presses:{},locks
:{},delayedKeyup:{},isUsingMouse:!1,isUsingKeyboard:!1,isUsingAccelerometer:!1,mouse:{x:0,y:0},accel:
{x:0,y:0,z:0},initMouse:function(){if(!this.isUsingMouse){this.isUsingMouse=!0;var e=this.mousewheel.
bind(this);ig.system.canvas.addEventListener("mousewheel",e,!1),ig.system.canvas.addEventListener("DOMMouseScroll"
,e,!1),ig.system.canvas.addEventListener("contextmenu",this.contextmenu.bind(this),!1),ig.system.canvas
.addEventListener("mousedown",this.keydown.bind(this),!1),ig.system.canvas.addEventListener("mouseup"
,this.keyup.bind(this),!1),ig.system.canvas.addEventListener("mousemove",this.mousemove.bind(this),!1
),ig.ua.touchDevice&&(ig.system.canvas.addEventListener("touchstart",this.keydown.bind(this),!1),ig.system
.canvas.addEventListener("touchend",this.keyup.bind(this),!1),ig.system.canvas.addEventListener("touchmove"
,this.mousemove.bind(this),!1),ig.system.canvas.addEventListener("MSPointerDown",this.keydown.bind(this
),!1),ig.system.canvas.addEventListener("MSPointerUp",this.keyup.bind(this),!1),ig.system.canvas.addEventListener
("MSPointerMove",this.mousemove.bind(this),!1),ig.system.canvas.style.msTouchAction="none")}},initKeyboard
:function(){this.isUsingKeyboard||(this.isUsingKeyboard=!0,window.addEventListener("keydown",this.keydown
.bind(this),!1),window.addEventListener("keyup",this.keyup.bind(this),!1))},initAccelerometer:function(
){this.isUsingAccelerometer||window.addEventListener("devicemotion",this.devicemotion.bind(this),!1)}
,mousewheel:function(e){var t=this.bindings[0<(e.wheelDelta?e.wheelDelta:-1*e.detail)?ig.KEY.MWHEEL_UP
:ig.KEY.MWHEEL_DOWN];t&&(this.actions[t]=!0,this.presses[t]=!0,this.delayedKeyup[t]=!0,e.stopPropagation
(),e.preventDefault())},mousemove:function(e){var t=parseInt(ig.system.canvas.offsetWidth)||ig.system
.realWidth,t=ig.system.scale*(t/ig.system.realWidth),n={left:0,top:0};ig.system.canvas.getBoundingClientRect&&
(n=ig.system.canvas.getBoundingClientRect()),e=e.touches?e.touches[0]:e,this.mouse.x=(e.clientX-n.left
)/t,this.mouse.y=(e.clientY-n.top)/t},contextmenu:function(e){this.bindings[ig.KEY.MOUSE2]&&(e.stopPropagation
(),e.preventDefault())},keydown:function(e){var t=e.target.tagName;"INPUT"!=t&&"TEXTAREA"!=t&&(t="keydown"==
e.type?e.keyCode:2==e.button?ig.KEY.MOUSE2:ig.KEY.MOUSE1,("touchstart"==e.type||"mousedown"==e.type)&&
this.mousemove(e),t=this.bindings[t])&&(this.actions[t]=!0,this.locks[t]||(this.presses[t]=!0,this.locks
[t]=!0),e.stopPropagation(),e.preventDefault())},keyup:function(e){var t=e.target.tagName;"INPUT"!=t&&"TEXTAREA"!=
t&&(t=this.bindings["keyup"==e.type?e.keyCode:2==e.button?ig.KEY.MOUSE2:ig.KEY.MOUSE1])&&(this.delayedKeyup
[t]=!0,e.stopPropagation(),e.preventDefault())},devicemotion:function(e){this.accel=e.accelerationIncludingGravity
},bind:function(e,t){0>e?this.initMouse():0<e&&this.initKeyboard(),this.bindings[e]=t},bindTouch:function(
e,t){var n=ig.$(e),r=this;n.addEventListener("touchstart",function(e){r.touchStart(e,t)},!1),n.addEventListener
("touchend",function(e){r.touchEnd(e,t)},!1),n.addEventListener("MSPointerDown",function(e){r.touchStart
(e,t)},!1),n.addEventListener("MSPointerUp",function(e){r.touchEnd(e,t)},!1)},unbind:function(e){this
.delayedKeyup[this.bindings[e]]=!0,this.bindings[e]=null},unbindAll:function(){this.bindings={},this.
actions={},this.presses={},this.locks={},this.delayedKeyup={}},state:function(e){return this.actions[
e]},pressed:function(e){return this.presses[e]},released:function(e){return!!this.delayedKeyup[e]},clearPressed
:function(){for(var e in this.delayedKeyup)this.actions[e]=!1,this.locks[e]=!1;this.delayedKeyup={},this
.presses={}},touchStart:function(e,t){return this.actions[t]=!0,this.presses[t]=!0,e.stopPropagation(
),e.preventDefault(),!1},touchEnd:function(e,t){return this.delayedKeyup[t]=!0,e.stopPropagation(),e.
preventDefault(),!1}})}),ig.baked=!0,ig.module("impact.impact").requires("dom.ready","impact.loader","impact.system"
,"impact.input","impact.sound").defines(function(){ig.main=function(e,t,n,r,i,s,o){ig.system=new ig.System
(e,n,r,i,s||1),ig.input=new ig.Input,ig.soundManager=new ig.SoundManager,ig.music=new ig.Music,ig.ready=!0
,(new(o||ig.Loader)(t,ig.resources)).load()}}),ig.baked=!0,ig.module("impact.animation").requires("impact.timer"
,"impact.image").defines(function(){ig.AnimationSheet=ig.Class.extend({width:8,height:8,image:null,init
:function(e,t,n){this.width=t,this.height=n,this.image=new ig.Image(e)}}),ig.Animation=ig.Class.extend
({sheet:null,timer:null,sequence:[],flip:{x:!1,y:!1},pivot:{x:0,y:0},frame:0,tile:0,loopCount:0,alpha
:1,angle:0,init:function(e,t,n,r){this.sheet=e,this.pivot={x:e.width/2,y:e.height/2},this.timer=new ig
.Timer,this.frameTime=t,this.sequence=n,this.stop=!!r,this.tile=this.sequence[0]},rewind:function(){return this
.timer.set(),this.frame=this.loopCount=0,this.tile=this.sequence[0],this},gotoFrame:function(e){this.
timer.set(this.frameTime*-e-1e-4),this.update()},gotoRandomFrame:function(){this.gotoFrame(Math.floor
(Math.random()*this.sequence.length))},update:function(){var e=Math.floor(this.timer.delta()/this.frameTime
);this.loopCount=Math.floor(e/this.sequence.length),this.frame=this.stop&&0<this.loopCount?this.sequence
.length-1:e%this.sequence.length,this.tile=this.sequence[this.frame]},draw:function(e,t){var n=Math.max
(this.sheet.width,this.sheet.height);e>ig.system.width||t>ig.system.height||0>e+n||0>t+n||(1!=this.alpha&&
(ig.system.context.globalAlpha=this.alpha),0==this.angle?this.sheet.image.drawTile(e,t,this.tile,this
.sheet.width,this.sheet.height,this.flip.x,this.flip.y):(ig.system.context.save(),ig.system.context.translate
(ig.system.getDrawPos(e+this.pivot.x),ig.system.getDrawPos(t+this.pivot.y)),ig.system.context.rotate(
this.angle),this.sheet.image.drawTile(-this.pivot.x,-this.pivot.y,this.tile,this.sheet.width,this.sheet
.height,this.flip.x,this.flip.y),ig.system.context.restore()),1!=this.alpha&&(ig.system.context.globalAlpha=1
))}})}),ig.baked=!0,ig.module("impact.entity").requires("impact.animation","impact.impact").defines(function(
){ig.Entity=ig.Class.extend({id:0,settings:{},size:{x:16,y:16},offset:{x:0,y:0},pos:{x:0,y:0},last:{x
:0,y:0},vel:{x:0,y:0},accel:{x:0,y:0},friction:{x:0,y:0},maxVel:{x:100,y:100},zIndex:0,gravityFactor:1
,standing:!1,bounciness:0,minBounceVelocity:40,anims:{},animSheet:null,currentAnim:null,health:10,type
:0,checkAgainst:0,collides:0,_killed:!1,slopeStanding:{min:44..toRad(),max:136..toRad()},init:function(
e,t,n){this.id=++ig.Entity._lastId,this.pos.x=e,this.pos.y=t,ig.merge(this,n)},addAnim:function(e,t,n
,r){if(!this.animSheet)throw"No animSheet to add the animation "+e+" to.";return t=new ig.Animation(this
.animSheet,t,n,r),this.anims[e]=t,this.currentAnim||(this.currentAnim=t),t},update:function(){this.last
.x=this.pos.x,this.last.y=this.pos.y,this.vel.y+=ig.game.gravity*ig.system.tick*this.gravityFactor,this
.vel.x=this.getNewVelocity(this.vel.x,this.accel.x,this.friction.x,this.maxVel.x),this.vel.y=this.getNewVelocity
(this.vel.y,this.accel.y,this.friction.y,this.maxVel.y);var e=ig.game.collisionMap.trace(this.pos.x,this
.pos.y,this.vel.x*ig.system.tick,this.vel.y*ig.system.tick,this.size.x,this.size.y);this.handleMovementTrace
(e),this.currentAnim&&this.currentAnim.update()},getNewVelocity:function(e,t,n,r){return t?(e+t*ig.system
.tick).limit(-r,r):n?(t=n*ig.system.tick,0<e-t?e-t:0>e+t?e+t:0):e.limit(-r,r)},handleMovementTrace:function(
e){this.standing=!1,e.collision.y&&(0<this.bounciness&&Math.abs(this.vel.y)>this.minBounceVelocity?this
.vel.y*=-this.bounciness:(0<this.vel.y&&(this.standing=!0),this.vel.y=0)),e.collision.x&&(this.vel.x=0<
this.bounciness&&Math.abs(this.vel.x)>this.minBounceVelocity?this.vel.x*-this.bounciness:0);if(e.collision
.slope){var t=e.collision.slope;if(0<this.bounciness){var n=this.vel.x*t.nx+this.vel.y*t.ny;this.vel.
x=(this.vel.x-2*t.nx*n)*this.bounciness,this.vel.y=(this.vel.y-2*t.ny*n)*this.bounciness}else n=(this
.vel.x*t.x+this.vel.y*t.y)/(t.x*t.x+t.y*t.y),this.vel.x=t.x*n,this.vel.y=t.y*n,t=Math.atan2(t.x,t.y),
t>this.slopeStanding.min&&t<this.slopeStanding.max&&(this.standing=!0)}this.pos=e.pos},draw:function(
){this.currentAnim&&this.currentAnim.draw(this.pos.x-this.offset.x-ig.game._rscreen.x,this.pos.y-this
.offset.y-ig.game._rscreen.y)},kill:function(){ig.game.removeEntity(this)},receiveDamage:function(e){
this.health-=e,0>=this.health&&this.kill()},touches:function(e){return!(this.pos.x>=e.pos.x+e.size.x||
this.pos.x+this.size.x<=e.pos.x||this.pos.y>=e.pos.y+e.size.y||this.pos.y+this.size.y<=e.pos.y)},distanceTo
:function(e){var t=this.pos.x+this.size.x/2-(e.pos.x+e.size.x/2);return e=this.pos.y+this.size.y/2-(e
.pos.y+e.size.y/2),Math.sqrt(t*t+e*e)},angleTo:function(e){return Math.atan2(e.pos.y+e.size.y/2-(this
.pos.y+this.size.y/2),e.pos.x+e.size.x/2-(this.pos.x+this.size.x/2))},check:function(){},collideWith:
function(){},ready:function(){}}),ig.Entity._lastId=0,ig.Entity.COLLIDES={NEVER:0,LITE:1,PASSIVE:2,ACTIVE
:4,FIXED:8},ig.Entity.TYPE={NONE:0,A:1,B:2,BOTH:3},ig.Entity.checkPair=function(e,t){e.checkAgainst&t
.type&&e.check(t),t.checkAgainst&e.type&&t.check(e),e.collides&&t.collides&&e.collides+t.collides>ig.
Entity.COLLIDES.ACTIVE&&ig.Entity.solveCollision(e,t)},ig.Entity.solveCollision=function(e,t){var n=null
;if(e.collides==ig.Entity.COLLIDES.LITE||t.collides==ig.Entity.COLLIDES.FIXED)n=e;else if(t.collides==
ig.Entity.COLLIDES.LITE||e.collides==ig.Entity.COLLIDES.FIXED)n=t;e.last.x+e.size.x>t.last.x&&e.last.
x<t.last.x+t.size.x?(e.last.y<t.last.y?ig.Entity.seperateOnYAxis(e,t,n):ig.Entity.seperateOnYAxis(t,e
,n),e.collideWith(t,"y"),t.collideWith(e,"y")):e.last.y+e.size.y>t.last.y&&e.last.y<t.last.y+t.size.y&&
(e.last.x<t.last.x?ig.Entity.seperateOnXAxis(e,t,n):ig.Entity.seperateOnXAxis(t,e,n),e.collideWith(t,"x"
),t.collideWith(e,"x"))},ig.Entity.seperateOnXAxis=function(e,t,n){var r=e.pos.x+e.size.x-t.pos.x;n?(
n.vel.x=-n.vel.x*n.bounciness+(e===n?t:e).vel.x,t=ig.game.collisionMap.trace(n.pos.x,n.pos.y,n==e?-r:
r,0,n.size.x,n.size.y),n.pos.x=t.pos.x):(n=(e.vel.x-t.vel.x)/2,e.vel.x=-n,t.vel.x=n,n=ig.game.collisionMap
.trace(e.pos.x,e.pos.y,-r/2,0,e.size.x,e.size.y),e.pos.x=Math.floor(n.pos.x),e=ig.game.collisionMap.trace
(t.pos.x,t.pos.y,r/2,0,t.size.x,t.size.y),t.pos.x=Math.ceil(e.pos.x))},ig.Entity.seperateOnYAxis=function(
e,t,n){var r=e.pos.y+e.size.y-t.pos.y;if(n){t=e===n?t:e,n.vel.y=-n.vel.y*n.bounciness+t.vel.y;var i=0
;n==e&&Math.abs(n.vel.y-t.vel.y)<n.minBounceVelocity&&(n.standing=!0,i=t.vel.x*ig.system.tick),e=ig.game
.collisionMap.trace(n.pos.x,n.pos.y,i,n==e?-r:r,n.size.x,n.size.y),n.pos.y=e.pos.y,n.pos.x=e.pos.x}else ig
.game.gravity&&(t.standing||0<e.vel.y)?(n=ig.game.collisionMap.trace(e.pos.x,e.pos.y,0,-(e.pos.y+e.size
.y-t.pos.y),e.size.x,e.size.y),e.pos.y=n.pos.y,0<e.bounciness&&e.vel.y>e.minBounceVelocity?e.vel.y*=-
e.bounciness:(e.standing=!0,e.vel.y=0)):(n=(e.vel.y-t.vel.y)/2,e.vel.y=-n,t.vel.y=n,i=t.vel.x*ig.system
.tick,n=ig.game.collisionMap.trace(e.pos.x,e.pos.y,i,-r/2,e.size.x,e.size.y),e.pos.y=n.pos.y,e=ig.game
.collisionMap.trace(t.pos.x,t.pos.y,0,r/2,t.size.x,t.size.y),t.pos.y=e.pos.y)}}),ig.baked=!0,ig.module
("impact.map").defines(function(){ig.Map=ig.Class.extend({tilesize:8,width:1,height:1,data:[[]],name:
null,init:function(e,t){this.tilesize=e,this.data=t,this.height=t.length,this.width=t[0].length},getTile
:function(e,t){var n=Math.floor(e/this.tilesize),r=Math.floor(t/this.tilesize);return 0<=n&&n<this.width&&0<=
r&&r<this.height?this.data[r][n]:0},setTile:function(e,t,n){e=Math.floor(e/this.tilesize),t=Math.floor
(t/this.tilesize),0<=e&&e<this.width&&0<=t&&t<this.height&&(this.data[t][e]=n)}})}),ig.baked=!0,ig.module
("impact.collision-map").requires("impact.map").defines(function(){ig.CollisionMap=ig.Map.extend({lastSlope
:1,tiledef:null,init:function(e,t,n){this.parent(e,t),this.tiledef=n||ig.CollisionMap.defaultTileDef;
for(var r in this.tiledef)r|0>this.lastSlope&&(this.lastSlope=r|0)},trace:function(e,t,n,r,i,s){var o=
{collision:{x:!1,y:!1,slope:!1},pos:{x:e,y:t},tile:{x:0,y:0}},u=Math.ceil(Math.max(Math.abs(n),Math.abs
(r))/this.tilesize);if(1<u)for(var a=n/u,f=r/u,l=0;l<u&&(a||f)&&(this._traceStep(o,e,t,a,f,i,s,n,r,l)
,e=o.pos.x,t=o.pos.y,o.collision.x&&(n=a=0),o.collision.y&&(r=f=0),!o.collision.slope);l++);else this
._traceStep(o,e,t,n,r,i,s,n,r,0);return o},_traceStep:function(e,t,n,r,i,s,o,u,a,f){e.pos.x+=r,e.pos.
y+=i;var l=0;if(r){var c=0<r?s:0,h=0>r?this.tilesize:0,l=Math.max(Math.floor(n/this.tilesize),0),p=Math
.min(Math.ceil((n+o)/this.tilesize),this.height);r=Math.floor((e.pos.x+c)/this.tilesize);var d=Math.floor
((t+c)/this.tilesize);if(0<f||r==d||0>d||d>=this.width)d=-1;if(0<=r&&r<this.width)for(var v=l;v<p&&!(-1!=
d&&(l=this.data[v][d],1<l&&l<=this.lastSlope&&this._checkTileDef(e,l,t,n,u,a,s,o,d,v)));v++)if(l=this
.data[v][r],1==l||l>this.lastSlope||1<l&&this._checkTileDef(e,l,t,n,u,a,s,o,r,v)){if(1<l&&l<=this.lastSlope&&
e.collision.slope)break;e.collision.x=!0,e.tile.x=l,t=e.pos.x=r*this.tilesize-c+h,u=0;break}}if(i){c=0<
i?o:0,i=0>i?this.tilesize:0,l=Math.max(Math.floor(e.pos.x/this.tilesize),0),h=Math.min(Math.ceil((e.pos
.x+s)/this.tilesize),this.width),v=Math.floor((e.pos.y+c)/this.tilesize),p=Math.floor((n+c)/this.tilesize
);if(0<f||v==p||0>p||p>=this.height)p=-1;if(0<=v&&v<this.height)for(r=l;r<h&&!(-1!=p&&(l=this.data[p]
[r],1<l&&l<=this.lastSlope&&this._checkTileDef(e,l,t,n,u,a,s,o,r,p)));r++)if(l=this.data[v][r],1==l||
l>this.lastSlope||1<l&&this._checkTileDef(e,l,t,n,u,a,s,o,r,v)){if(1<l&&l<=this.lastSlope&&e.collision
.slope)break;e.collision.y=!0,e.tile.y=l,e.pos.y=v*this.tilesize-c+i;break}}},_checkTileDef:function(
e,t,n,r,i,s,o,u,a,f){var l=this.tiledef[t];if(!l)return!1;t=(l[2]-l[0])*this.tilesize;var c=(l[3]-l[1
])*this.tilesize,h=l[4];o=n+i+(0>c?o:0)-(a+l[0])*this.tilesize,u=r+s+(0<t?u:0)-(f+l[1])*this.tilesize
;if(0<t*u-c*o){if(0>i*-c+s*t)return h;a=Math.sqrt(t*t+c*c),f=c/a,a=-t/a;var p=o*f+u*a,l=f*p,p=a*p;return l*
l+p*p>=i*i+s*s?h||.5>t*(u-s)-c*(o-i):(e.pos.x=n+i-l,e.pos.y=r+s-p,e.collision.slope={x:t,y:c,nx:f,ny:
a},!0)}return!1}});var e=1/3,t=2/3;ig.CollisionMap.defaultTileDef={5:[0,1,1,t,!0],6:[0,t,1,e,!0],7:[0
,e,1,0,!0],3:[0,1,1,.5,!0],4:[0,.5,1,0,!0],2:[0,1,1,0,!0],10:[.5,1,1,0,!0],21:[0,1,.5,0,!0],32:[t,1,1
,0,!0],43:[e,1,t,0,!0],54:[0,1,e,0,!0],27:[0,0,1,e,!0],28:[0,e,1,t,!0],29:[0,t,1,1,!0],25:[0,0,1,.5,!0
],26:[0,.5,1,1,!0],24:[0,0,1,1,!0],11:[0,0,.5,1,!0],22:[.5,0,1,1,!0],33:[0,0,e,1,!0],44:[e,0,t,1,!0],55
:[t,0,1,1,!0],16:[1,e,0,0,!0],17:[1,t,0,e,!0],18:[1,1,0,t,!0],14:[1,.5,0,0,!0],15:[1,1,0,.5,!0],13:[1
,1,0,0,!0],8:[.5,1,0,0,!0],19:[1,1,.5,0,!0],30:[e,1,0,0,!0],41:[t,1,e,0,!0],52:[1,1,t,0,!0],38:[1,t,0
,1,!0],39:[1,e,0,t,!0],40:[1,0,0,e,!0],36:[1,.5,0,1,!0],37:[1,0,0,.5,!0],35:[1,0,0,1,!0],9:[1,0,.5,1,!0
],20:[.5,0,0,1,!0],31:[1,0,t,1,!0],42:[t,0,e,1,!0],53:[e,0,0,1,!0],12:[0,0,1,0,!1],23:[1,1,0,1,!1],34
:[1,0,1,1,!1],45:[0,1,0,0,!1]},ig.CollisionMap.staticNoCollision={trace:function(e,t,n,r){return{collision
:{x:!1,y:!1,slope:!1},pos:{x:e+n,y:t+r},tile:{x:0,y:0}}}}}),ig.baked=!0,ig.module("impact.background-map"
).requires("impact.map","impact.image").defines(function(){ig.BackgroundMap=ig.Map.extend({tiles:null
,scroll:{x:0,y:0},distance:1,repeat:!1,tilesetName:"",foreground:!1,enabled:!0,preRender:!1,preRenderedChunks
:null,chunkSize:512,debugChunks:!1,anims:{},init:function(e,t,n){this.parent(e,t),this.setTileset(n)}
,setTileset:function(e){this.tilesetName=e instanceof ig.Image?e.path:e,this.tiles=new ig.Image(this.
tilesetName),this.preRenderedChunks=null},setScreenPos:function(e,t){this.scroll.x=e/this.distance,this
.scroll.y=t/this.distance},preRenderMapToChunks:function(){var e=this.width*this.tilesize*ig.system.scale
,t=this.height*this.tilesize*ig.system.scale;this.chunkSize=Math.min(Math.max(e,t),this.chunkSize);var n=
Math.ceil(e/this.chunkSize),r=Math.ceil(t/this.chunkSize);this.preRenderedChunks=[];for(var i=0;i<r;i++
){this.preRenderedChunks[i]=[];for(var s=0;s<n;s++)this.preRenderedChunks[i][s]=this.preRenderChunk(s
,i,s==n-1?e-s*this.chunkSize:this.chunkSize,i==r-1?t-i*this.chunkSize:this.chunkSize)}},preRenderChunk
:function(e,t,n,r){var i=n/this.tilesize/ig.system.scale+1,s=r/this.tilesize/ig.system.scale+1,o=e*this
.chunkSize/ig.system.scale%this.tilesize,u=t*this.chunkSize/ig.system.scale%this.tilesize;e=Math.floor
(e*this.chunkSize/this.tilesize/ig.system.scale),t=Math.floor(t*this.chunkSize/this.tilesize/ig.system
.scale);var a=ig.$new("canvas");a.width=n,a.height=r,a.retinaResolutionEnabled=!1,r=a.getContext("2d"
),ig.System.scaleMode(a,r),n=ig.system.context,ig.system.context=r;for(r=0;r<i;r++)for(var f=0;f<s;f++
)if(r+e<this.width&&f+t<this.height){var l=this.data[f+t][r+e];l&&this.tiles.drawTile(r*this.tilesize-
o,f*this.tilesize-u,l-1,this.tilesize)}return ig.system.context=n,a},draw:function(){this.tiles.loaded&&
this.enabled&&(this.preRender?this.drawPreRendered():this.drawTiled())},drawPreRendered:function(){this
.preRenderedChunks||this.preRenderMapToChunks();var e=ig.system.getDrawPos(this.scroll.x),t=ig.system
.getDrawPos(this.scroll.y);if(this.repeat)var n=this.width*this.tilesize*ig.system.scale,e=(e%n+n)%n,
n=this.height*this.tilesize*ig.system.scale,t=(t%n+n)%n;var n=Math.max(Math.floor(e/this.chunkSize),0
),r=Math.max(Math.floor(t/this.chunkSize),0),i=Math.ceil((e+ig.system.realWidth)/this.chunkSize),s=Math
.ceil((t+ig.system.realHeight)/this.chunkSize),o=this.preRenderedChunks[0].length,u=this.preRenderedChunks
.length;this.repeat||(i=Math.min(i,o),s=Math.min(s,u));for(var a=0;r<s;r++){for(var f=0,l=n;l<i;l++){
var c=this.preRenderedChunks[r%u][l%o],h=-e+l*this.chunkSize-f,p=-t+r*this.chunkSize-a;ig.system.context
.drawImage(c,h,p),ig.Image.drawCount++,this.debugChunks&&(ig.system.context.strokeStyle="#f0f",ig.system
.context.strokeRect(h,p,this.chunkSize,this.chunkSize)),this.repeat&&c.width<this.chunkSize&&h+c.width<
ig.system.realWidth&&(f+=this.chunkSize-c.width,i++)}this.repeat&&c.height<this.chunkSize&&p+c.height<
ig.system.realHeight&&(a+=this.chunkSize-c.height,s++)}},drawTiled:function(){for(var e=0,t=null,n=(this
.scroll.x/this.tilesize).toInt(),r=(this.scroll.y/this.tilesize).toInt(),i=this.scroll.x%this.tilesize
,s=this.scroll.y%this.tilesize,o=-i-this.tilesize,i=ig.system.width+this.tilesize-i,u=ig.system.height+
this.tilesize-s,a=-1,s=-s-this.tilesize;s<u;a++,s+=this.tilesize){var f=a+r;if(f>=this.height||0>f){if(!
this.repeat)continue;f=(f%this.height+this.height)%this.height}for(var l=-1,c=o;c<i;l++,c+=this.tilesize
){e=l+n;if(e>=this.width||0>e){if(!this.repeat)continue;e=(e%this.width+this.width)%this.width}if(e=this
.data[f][e])(t=this.anims[e-1])?t.draw(c,s):this.tiles.drawTile(c,s,e-1,this.tilesize)}}}})}),ig.baked=!0
,ig.module("impact.game").requires("impact.impact","impact.entity","impact.collision-map","impact.background-map"
).defines(function(){ig.Game=ig.Class.extend({clearColor:"#000000",gravity:0,screen:{x:0,y:0},_rscreen
:{x:0,y:0},entities:[],namedEntities:{},collisionMap:ig.CollisionMap.staticNoCollision,backgroundMaps
:[],backgroundAnims:{},autoSort:!1,sortBy:null,cellSize:64,_deferredKill:[],_levelToLoad:null,_doSortEntities
:!1,staticInstantiate:function(){return this.sortBy=this.sortBy||ig.Game.SORT.Z_INDEX,ig.game=this,null
},loadLevel:function(e){this.screen={x:0,y:0},this.entities=[],this.namedEntities={};for(var t=0;t<e.
entities.length;t++){var n=e.entities[t];this.spawnEntity(n.type,n.x,n.y,n.settings)}this.sortEntities
(),this.collisionMap=ig.CollisionMap.staticNoCollision,this.backgroundMaps=[];for(t=0;t<e.layer.length
;t++)if(n=e.layer[t],"collision"==n.name)this.collisionMap=new ig.CollisionMap(n.tilesize,n.data);else{
var r=new ig.BackgroundMap(n.tilesize,n.data,n.tilesetName);r.anims=this.backgroundAnims[n.tilesetName
]||{},r.repeat=n.repeat,r.distance=n.distance,r.foreground=!!n.foreground,r.preRender=!!n.preRender,r
.name=n.name,this.backgroundMaps.push(r)}for(t=0;t<this.entities.length;t++)this.entities[t].ready()}
,loadLevelDeferred:function(e){this._levelToLoad=e},getMapByName:function(e){if("collision"==e)return this
.collisionMap;for(var t=0;t<this.backgroundMaps.length;t++)if(this.backgroundMaps[t].name==e)return this
.backgroundMaps[t];return null},getEntityByName:function(e){return this.namedEntities[e]},getEntitiesByType
:function(e){e="string"==typeof e?ig.global[e]:e;for(var t=[],n=0;n<this.entities.length;n++){var r=this
.entities[n];r instanceof e&&!r._killed&&t.push(r)}return t},spawnEntity:function(e,t,n,r){var i="string"==typeof 
e?ig.global[e]:e;if(!i)throw"Can't spawn entity of type "+e;return e=new i(t,n,r||{}),this.entities.push
(e),e.name&&(this.namedEntities[e.name]=e),e},sortEntities:function(){this.entities.sort(this.sortBy)
},sortEntitiesDeferred:function(){this._doSortEntities=!0},removeEntity:function(e){e.name&&delete this
.namedEntities[e.name],e._killed=!0,e.type=ig.Entity.TYPE.NONE,e.checkAgainst=ig.Entity.TYPE.NONE,e.collides=
ig.Entity.COLLIDES.NEVER,this._deferredKill.push(e)},run:function(){this.update(),this.draw()},update
:function(){this._levelToLoad&&(this.loadLevel(this._levelToLoad),this._levelToLoad=null);if(this._doSortEntities||
this.autoSort)this.sortEntities(),this._doSortEntities=!1;this.updateEntities(),this.checkEntities();
for(var e=0;e<this._deferredKill.length;e++)this.entities.erase(this._deferredKill[e]);this._deferredKill=
[];for(var t in this.backgroundAnims){var e=this.backgroundAnims[t],n;for(n in e)e[n].update()}},updateEntities
:function(){for(var e=0;e<this.entities.length;e++){var t=this.entities[e];t._killed||t.update()}},draw
:function(){this.clearColor&&ig.system.clear(this.clearColor),this._rscreen.x=ig.system.getDrawPos(this
.screen.x)/ig.system.scale,this._rscreen.y=ig.system.getDrawPos(this.screen.y)/ig.system.scale;var e;
for(e=0;e<this.backgroundMaps.length;e++){var t=this.backgroundMaps[e];if(t.foreground)break;t.setScreenPos
(this.screen.x,this.screen.y),t.draw()}this.drawEntities();for(e;e<this.backgroundMaps.length;e++)t=this
.backgroundMaps[e],t.setScreenPos(this.screen.x,this.screen.y),t.draw()},drawEntities:function(){for(
var e=0;e<this.entities.length;e++)this.entities[e].draw()},checkEntities:function(){for(var e={},t=0
;t<this.entities.length;t++){var n=this.entities[t];if(n.type!=ig.Entity.TYPE.NONE||n.checkAgainst!=ig
.Entity.TYPE.NONE||n.collides!=ig.Entity.COLLIDES.NEVER)for(var r={},i=Math.floor(n.pos.y/this.cellSize
),s=Math.floor((n.pos.x+n.size.x)/this.cellSize)+1,o=Math.floor((n.pos.y+n.size.y)/this.cellSize)+1,u=
Math.floor(n.pos.x/this.cellSize);u<s;u++)for(var a=i;a<o;a++)if(e[u])if(e[u][a]){for(var f=e[u][a],l=0
;l<f.length;l++)n.touches(f[l])&&!r[f[l].id]&&(r[f[l].id]=!0,ig.Entity.checkPair(n,f[l]));f.push(n)}else e
[u][a]=[n];else e[u]={},e[u][a]=[n]}}}),ig.Game.SORT={Z_INDEX:function(e,t){return e.zIndex-t.zIndex}
,POS_X:function(e,t){return e.pos.x+e.size.x-(t.pos.x+t.size.x)},POS_Y:function(e,t){return e.pos.y+e
.size.y-(t.pos.y+t.size.y)}}}),ig.baked=!0,ig.module("impact.gaPooling").requires("impact.impact","impact.entity"
).defines(function(){var e=function(){var e=null;return 0!=this.poolSize?(this.poolSize--,e=this.pool
[this.poolSize],this.pool[this.poolSize]=null):(e=new this,this.builtCount++),this.apply(e,arguments)
,e},t=function(){var e=this.constructor;e.pool[e.poolSize++]=this};ig.setupPool=function(n,r){if(2!=arguments
.length)throw"setupPool takes two arguments";n.pool=[],n.poolSize=0,n.builtCount=r,n.pnew=e,n.prototype
.pdispose=t;if(0!=r)for(var i=r;i--;)(new n).pdispose()};var n=function(){var e=null;return 0<this.poolSize?
(this.poolSize--,e=this.pool[this.poolSize],this.pool[this.poolSize]=null):(e=new this,this.builtCount++
),e.init&&e.init.apply(e,arguments),e},r=function(){var e=this.constructor;e.pool[e.poolSize++]=this}
;ig.setupInitPool=function(e,t){if(2>arguments.length)throw"setupPool takes two arguments";e.pool=[],
e.poolSize=0,e.pnew=n,e.builtCount=t,e.prototype.pdispose=r;for(var i=t;i--;)(new e).pdispose()},ig.autoPoolEntities=
function(){ig.Entity.prototype.kill=function(){this.pdispose&&this.pdispose(),ig.game.removeEntity(this
)},ig.Game.prototype.spawnEntity=function(e,t,n,r){if(!e)throw"cannot spawn entity of undefined type"
;e="string"==typeof e?ig.global[e]:e;var i=null;return e.pnew?(i=e.pnew(t,n,r),i._killed=!1,e=i.__proto__
,i.type=e.type,i.checkAgainst=e.checkAgainst,i.collides=e.collides):i=new e(t,n,r),this.entities.push
(i),i.name&&(this.namedEntities[i.name]=i),i}}}),ig.baked=!0,ig.baked=!0,ig.module("plugins.preloader"
).requires("impact.loader").defines(function(){ig.ImpactSplashLoader=ig.Loader.extend({draw:function(
){}})}),ig.baked=!0,ig.baked=!0,ig.module("plugins.notification-manager").requires("impact.font","impact.impact"
).defines(function(){ig.NotificationManager=ig.Class.extend({notes:[],init:function(){},add:function(
e){this.notes.push(e)},draw:function(){for(var e=0;e<this.notes.length;e++)this.notes[e].draw()},find
:function(e){for(var t=0;t<this.notes.length;t++)if(this.notes[t].key===e)return this.notes[t]},remove
:function(e){this.notes.erase(e)},spawn:function(e,t,n,r,i){this.add(new ig.Notification(e,t,n,r,i))}
,update:function(){for(var e=this.notes.length;e--;e)this.notes[e].update(),this.notes[e]._kill&&this
.notes.splice(e,1)}}),ig.Notification=ig.Class.extend({align:ig.Font.ALIGN.LEFT,alpha:1,entity:null,fadetime
:.4,font:null,lifetime:1,_kill:!1,pos:{x:null,y:null},text:"",vel:{x:0,y:-20},entityOffset:{x:0,y:10}
,key:"",init:function(e,t,n,r,i,s){this.font=e instanceof ig.Font?e:new ig.Font(e),this.text=t,this.key=
n,this.pos.x=r,this.pos.y=i,ig.merge(this,s),this.fadetime=0===this.lifetime?!1:this.fadetime-this.lifetime
,this.lifetime=new ig.Timer(this.lifetime)},draw:function(e,t){var n=this.font.alpha;this.font.alpha=
this.alpha,this.font.draw(t||this.text,this.pos.x,this.pos.y,e||this.align),this.font.alpha=n},follow
:function(e){this.entity=e},setVel:function(e,t){this.entity=null,this.vel.x=e||0,this.vel.y=t||0},update
:function(){null!==this.entity?(this.pos.x=this.entity.pos.x+this.entity.size.x/2-this.font.widthForString
(this.text)/2+this.entityOffset.x,this.pos.y=this.entity.pos.y+this.entity.size.y/2-this.font.heightForString
(this.text)-this.entityOffset.y):(this.pos.x+=this.vel.x*ig.system.tick,this.pos.y+=this.vel.y*ig.system
.tick);if(this.fadetime){var e=this.lifetime.delta();0<e?this._kill=!0:this.alpha=e.map(this.fadetime
,0,1,0)}}})}),ig.baked=!0,ig.baked=!0,ig.module("game.entities.particle").requires("impact.entity").defines
(function(){EntityParticle=ig.Entity.extend({size:{x:14,y:15},offset:{x:0,y:0},maxVel:{x:0,y:90},vel:
{x:0,y:10},minBounceVelocity:0,type:ig.Entity.TYPE.NONE,checkAgainst:ig.Entity.TYPE.NONE,collides:ig.
Entity.COLLIDES.NEVER,lifetime:5,fadetime:0,bounciness:0,friction:{x:0,y:0},animSheet:new ig.AnimationSheet
("media/matrixcode.png",14,15),init:function(e,t,n){this.addAnim("idle0",.05,[0]),this.addAnim("idle1"
,.05,[1]),this.addAnim("idle2",.05,[2]),this.addAnim("idle3",.05,[3]),this.addAnim("idle4",.05,[4]),this
.addAnim("idle5",.05,[5]),this.addAnim("idle6",.05,[6]),this.addAnim("idle7",.05,[7]),this.addAnim("idle8"
,.05,[8]),this.addAnim("idle9",.05,[9]),this.addAnim("idle10",.05,[10]),this.addAnim("idle11",.05,[11
]),this.addAnim("idle12",.05,[12]),this.addAnim("idle13",.05,[13]),this.addAnim("idle14",.05,[14]),this
.addAnim("idle15",.05,[15]),this.addAnim("idle16",.05,[16]),this.addAnim("idle17",.05,[17]),this.addAnim
("idle18",.05,[18]),this.addAnim("idle19",.05,[19]),this.addAnim("idle20",.05,[20]),this.addAnim("idle21"
,.05,[21]),this.addAnim("idle22",.05,[22]),this.addAnim("idle23",.05,[23]),this.addAnim("idle24",.05,
[24]),this.addAnim("idle25",.05,[25]),this.addAnim("idle26",.05,[26]),this.addAnim("idle27",.05,[27])
,r=Math.round(4*Math.random()+0);switch(r){case 0:this.currentAnim=this.anims.idle0;break;case 1:this
.currentAnim=this.anims.idle1;break;case 2:this.currentAnim=this.anims.idle2;break;case 3:this.currentAnim=
this.anims.idle3;break;case 4:this.currentAnim=this.anims.idle4;break;case 5:this.currentAnim=this.anims
.idle5;break;case 6:this.currentAnim=this.anims.idle6;break;case 7:this.currentAnim=this.anims.idle7;
break;case 8:this.currentAnim=this.anims.idle8;break;case 9:this.currentAnim=this.anims.idle9;break;case 10
:this.currentAnim=this.anims.idle10;break;case 11:this.currentAnim=this.anims.idle11;break;case 12:this
.currentAnim=this.anims.idle12;break;case 13:this.currentAnim=this.anims.idle13;break;case 14:this.currentAnim=
this.anims.idle14;break;case 15:this.currentAnim=this.anims.idle15;break;case 16:this.currentAnim=this
.anims.idle16;break;case 17:this.currentAnim=this.anims.idle17;break;case 18:this.currentAnim=this.anims
.idle18;break;case 19:this.currentAnim=this.anims.idle19;break;case 20:this.currentAnim=this.anims.idle20
;break;case 21:this.currentAnim=this.anims.idle21;break;case 22:this.currentAnim=this.anims.idle22;break;
case 23:this.currentAnim=this.anims.idle23;break;case 24:this.currentAnim=this.anims.idle24;break;case 25
:this.currentAnim=this.anims.idle25;break;case 26:this.currentAnim=this.anims.idle26;break;case 27:this
.currentAnim=this.anims.idle27}this.parent(e,t,n)},update:function(){this.parent(),this.pos.y+=this.speed
,this.pos.y>ig.system.canvas.height/ig.system.scale&&(this.kill(),ig.game.particles--)}})}),ig.baked=!0
,ig.module("game.levels.1_selector").requires("impact.image").defines(function(){Level1_selector={entities
:[],layer:[{name:"stone",width:16,height:8,linkWithCollision:!1,visible:!0,tilesetName:"media/stone_wall.png"
,repeat:!1,preRender:!1,distance:"1",tilesize:64,foreground:!1,data:[[1,2,1,2,1,2,1,2,0,0,0,0,0,0,0,0
],[5,6,5,6,5,6,5,6,0,0,0,0,0,0,0,0],[1,2,1,2,1,2,1,2,0,0,0,0,0,0,0,0],[5,6,5,6,5,6,5,6,0,0,0,0,0,0,0,0
],[1,2,1,2,1,2,1,2,0,0,0,0,0,0,0,0],[5,6,5,6,5,6,5,6,0,0,0,0,0,0,0,0],[1,2,1,2,1,2,1,2,0,0,0,0,0,0,0,0
],[5,6,5,6,5,6,5,6,0,0,0,0,0,0,0,0]]}]},LevelUntitledResources=[new ig.Image("media/stone_wall.png")]
}),ig.baked=!0,ig.module("game.main").requires("impact.game","impact.gaPooling","plugins.preloader","plugins.notification-manager"
,"game.entities.particle","game.levels.1_selector").defines(function(){var t=ig.Game.extend({levels:[
],level:0,points:0,totalParticles:750,totalPoints:0,gravity:0,player:null,paused:!1,noteManager:new ig
.NotificationManager,formattedTime:null,bestTime:null,particles:0,xpos:[],pos:{x:100,y:100},size:{x:16
,y:16},lastVel:{x:0,y:0},touchPos:{x:0,y:0},touchColors:{},touchStart:{x:0,y:0},touchPosition:{x:0,y:0
},touchPressed:!1,init:function(){ig.autoPoolEntities(),ig.setupInitPool(EntityParticle,this.totalParticles
),this.xpos=[0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176,184,192,200
,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320,328,336,344,352,360,368,376,384,392,400,408
,416,424,432,440,448,456,464,472,480,488,496,504,512,520,528,536,544,552,560,568,576,584,592,600,608,616
,624,632,640,648,656,664,672,680,688,696,704,712,720,728,736,744,752,760,768,776,784,792,800,808,816,824
,832,840,848,856,864,872,880,888,896,904,912,920,928,936,944,952,960,968,976,984,992,1e3,1008,1016,1024
,1032,1040,1048,1056,1064,1072,1080,1088,1096,1104,1112,1120,1128,1136,1144,1152,1160,1168,1176,1184,1192
,1200,1208,1216,1224,1232,1240,1248,1256,1264,1272,1280],n(this.xpos),this.totalParticles=3e3/ig.system
.scale,this.levels=[Level1_selector],this.level=0,this.loadLevel(this.level)},update:function(){this.
parent();if(this.particles<this.totalParticles){e(0,ig.system.canvas.width),setx=this.xpos.pop(),1>this
.xpos.length&&(this.xpos=[0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128,136,144,152,160,168,176
,184,192,200,208,216,224,232,240,248,256,264,272,280,288,296,304,312,320,328,336,344,352,360,368,376,384
,392,400,408,416,424,432,440,448,456,464,472,480,488,496,504,512,520,528,536,544,552,560,568,576,584,592
,600,608,616,624,632,640,648,656,664,672,680,688,696,704,712,720,728,736,744,752,760,768,776,784,792,800
,808,816,824,832,840,848,856,864,872,880,888,896,904,912,920,928,936,944,952,960,968,976,984,992,1e3,1008
,1016,1024,1032,1040,1048,1056,1064,1072,1080,1088,1096,1104,1112,1120,1128,1136,1144,1152,1160,1168,1176
,1184,1192,1200,1208,1216,1224,1232,1240,1248,1256,1264,1272,1280],n(this.xpos)),numinrow=Math.floor(15*
Math.random()+5);for(speed=Math.random(3)+.5;setx>ig.system.width*ig.system.scale;)setx=this.xpos.pop
();for(j=0;j<numinrow;j++)ig.game.spawnEntity(EntityParticle,setx,-(11*j+17),{vel:{x:0,y:this.lastVel
.y},speed:speed}),this.particles++}},loadLevel:function(e){this.parent(this.levels[e])}}),r=2;480<window
.innerWidth&&800>=window.innerWidth?r=4:800<window.innerWidth&&1024>=window.innerWidth?r=4:1024<window
.innerWidth&&1280>=window.innerWidth?r=4:1280<window.innerWidth&&1680>=window.innerWidth?r=4:1680<window
.innerWidth&&(r=4),ig.main("#canvas",t,60,window.innerWidth/r,window.innerHeight/r,r,ig.ImpactSplashLoader
)});