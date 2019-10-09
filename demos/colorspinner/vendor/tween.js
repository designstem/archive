/**
 * Minified by jsDelivr using UglifyJS v3.0.24.
 * Original file: /npm/tween.js@16.6.0/src/Tween.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var TWEEN=TWEEN||function(){var n=[];return{getAll:function(){return n},removeAll:function(){n=[]},add:function(t){n.push(t)},remove:function(t){var r=n.indexOf(t);-1!==r&&n.splice(r,1)},update:function(t,r){if(0===n.length)return!1;var i=0;for(t=void 0!==t?t:TWEEN.now();i<n.length;)n[i].update(t)||r?i++:n.splice(i,1);return!0}}}();"undefined"==typeof window&&"undefined"!=typeof process?TWEEN.now=function(){var n=process.hrtime();return 1e3*n[0]+n[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?TWEEN.now=window.performance.now.bind(window.performance):void 0!==Date.now?TWEEN.now=Date.now:TWEEN.now=function(){return(new Date).getTime()},TWEEN.Tween=function(n){var t,r=n,i={},u={},e={},o=1e3,a=0,f=!1,c=!1,s=!1,h=0,l=null,E=TWEEN.Easing.Linear.None,p=TWEEN.Interpolation.Linear,d=[],v=null,w=!1,I=null,M=null,T=null;this.to=function(n,t){return u=n,void 0!==t&&(o=t),this},this.start=function(n){TWEEN.add(this),c=!0,w=!1,l=void 0!==n?n:TWEEN.now(),l+=h;for(var t in u){if(u[t]instanceof Array){if(0===u[t].length)continue;u[t]=[r[t]].concat(u[t])}void 0!==r[t]&&(i[t]=r[t],i[t]instanceof Array==!1&&(i[t]*=1),e[t]=i[t]||0)}return this},this.stop=function(){return c?(TWEEN.remove(this),c=!1,null!==T&&T.call(r,r),this.stopChainedTweens(),this):this},this.end=function(){return this.update(l+o),this},this.stopChainedTweens=function(){for(var n=0,t=d.length;n<t;n++)d[n].stop()},this.delay=function(n){return h=n,this},this.repeat=function(n){return a=n,this},this.repeatDelay=function(n){return t=n,this},this.yoyo=function(n){return f=n,this},this.easing=function(n){return E=n,this},this.interpolation=function(n){return p=n,this},this.chain=function(){return d=arguments,this},this.onStart=function(n){return v=n,this},this.onUpdate=function(n){return I=n,this},this.onComplete=function(n){return M=n,this},this.onStop=function(n){return T=n,this},this.update=function(n){var c,T,N;if(n<l)return!0;!1===w&&(null!==v&&v.call(r,r),w=!0),N=E(T=(T=(n-l)/o)>1?1:T);for(c in u)if(void 0!==i[c]){var W=i[c]||0,O=u[c];O instanceof Array?r[c]=p(O,N):("string"==typeof O&&(O="+"===O.charAt(0)||"-"===O.charAt(0)?W+parseFloat(O):parseFloat(O)),"number"==typeof O&&(r[c]=W+(O-W)*N))}if(null!==I&&I.call(r,N),1===T){if(a>0){isFinite(a)&&a--;for(c in e){if("string"==typeof u[c]&&(e[c]=e[c]+parseFloat(u[c])),f){var m=e[c];e[c]=u[c],u[c]=m}i[c]=e[c]}return f&&(s=!s),l=void 0!==t?n+t:n+h,!0}null!==M&&M.call(r,r);for(var g=0,y=d.length;g<y;g++)d[g].start(l+o);return!1}return!0}},TWEEN.Easing={Linear:{None:function(n){return n}},Quadratic:{In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}},Cubic:{In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}},Quartic:{In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}},Quintic:{In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}},Sinusoidal:{In:function(n){return 1-Math.cos(n*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return.5*(1-Math.cos(Math.PI*n))}},Exponential:{In:function(n){return 0===n?0:Math.pow(1024,n-1)},Out:function(n){return 1===n?1:1-Math.pow(2,-10*n)},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(2-Math.pow(2,-10*(n-1)))}},Circular:{In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}},Elastic:{In:function(n){return 0===n?0:1===n?1:-Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)},Out:function(n){return 0===n?0:1===n?1:Math.pow(2,-10*n)*Math.sin(5*(n-.1)*Math.PI)+1},InOut:function(n){return 0===n?0:1===n?1:(n*=2)<1?-.5*Math.pow(2,10*(n-1))*Math.sin(5*(n-1.1)*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin(5*(n-1.1)*Math.PI)+1}},Back:{In:function(n){var t=1.70158;return n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?n*n*((t+1)*n-t)*.5:.5*((n-=2)*n*((t+1)*n+t)+2)}},Bounce:{In:function(n){return 1-TWEEN.Easing.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?.5*TWEEN.Easing.Bounce.In(2*n):.5*TWEEN.Easing.Bounce.Out(2*n-1)+.5}}},TWEEN.Interpolation={Linear:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),e=TWEEN.Interpolation.Utils.Linear;return t<0?e(n[0],n[1],i):t>1?e(n[r],n[r-1],r-i):e(n[u],n[u+1>r?r:u+1],i-u)},Bezier:function(n,t){for(var r=0,i=n.length-1,u=Math.pow,e=TWEEN.Interpolation.Utils.Bernstein,o=0;o<=i;o++)r+=u(1-t,i-o)*u(t,o)*n[o]*e(i,o);return r},CatmullRom:function(n,t){var r=n.length-1,i=r*t,u=Math.floor(i),e=TWEEN.Interpolation.Utils.CatmullRom;return n[0]===n[r]?(t<0&&(u=Math.floor(i=r*(1+t))),e(n[(u-1+r)%r],n[u],n[(u+1)%r],n[(u+2)%r],i-u)):t<0?n[0]-(e(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[r]-(e(n[r],n[r],n[r-1],n[r-1],i-r)-n[r]):e(n[u?u-1:0],n[u],n[r<u+1?r:u+1],n[r<u+2?r:u+2],i-u)},Utils:{Linear:function(n,t,r){return(t-n)*r+n},Bernstein:function(n,t){var r=TWEEN.Interpolation.Utils.Factorial;return r(n)/r(t)/r(n-t)},Factorial:function(){var n=[1];return function(t){var r=1;if(n[t])return n[t];for(var i=t;i>1;i--)r*=i;return n[t]=r,r}}(),CatmullRom:function(n,t,r,i,u){var e=.5*(r-n),o=.5*(i-t),a=u*u;return(2*t-2*r+e+o)*(u*a)+(-3*t+3*r-2*e-o)*a+e*u+t}}},function(n){"function"==typeof define&&define.amd?define([],function(){return TWEEN}):"undefined"!=typeof module&&"object"==typeof exports?module.exports=TWEEN:void 0!==n&&(n.TWEEN=TWEEN)}(this);
//# sourceMappingURL=/sm/740876cd2d02ff62ccf6601a49b6a167005d599ffa777446c78d3aee2dd99ea2.map