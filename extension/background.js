<<<<<<< HEAD
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=41)}({41:function(e,t){chrome.runtime.onMessage.addListener(function(e,t,o){const s=JSON.parse(e);return"request"===s.type?n(s.data).then(e=>{o(JSON.stringify({errno:0,data:e}))}).catch(e=>{o(JSON.stringify({errno:1,errMsg:e.toString()}))}):"history"===s.type&&r(s.data).then(e=>{o(JSON.stringify({errno:0,data:e}))}),!0});const r=({keyword:e="",ago:t=(new Date).getTime()-6048e5}={})=>new Promise(r=>{chrome.history.search({text:e,startTime:t},e=>{r(e)})}),n=({url:e,method:t="GET",body:r=""})=>new Promise((n,o)=>{let s=new XMLHttpRequest;s.onreadystatechange=(()=>{s.readyState===XMLHttpRequest.DONE&&(200===s.status?n(s.responseText):o(new Error(`status code is ${s.status}`)))}),s.open(t,e),s.send(r)})}});
=======
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=44)}({44:function(e,t){chrome.runtime.onMessage.addListener(function(e,t,o){const s=JSON.parse(e);return"request"===s.type?n(s.data).then(e=>{o(JSON.stringify({errno:0,data:e}))}).catch(e=>{o(JSON.stringify({errno:1,errMsg:e.toString()}))}):"history"===s.type&&r(s.data).then(e=>{o(JSON.stringify({errno:0,data:e}))}),!0});const r=({keyword:e="",ago:t=(new Date).getTime()-6048e5}={})=>new Promise(r=>{chrome.history.search({text:e,startTime:t},e=>{r(e)})}),n=({url:e,method:t="GET",body:r=""})=>new Promise((n,o)=>{let s=new XMLHttpRequest;s.onreadystatechange=(()=>{s.readyState===XMLHttpRequest.DONE&&(200===s.status?n(s.responseText):o(new Error(`status code is ${s.status}`)))}),s.open(t,e),s.send(r)})}});
>>>>>>> 93a3a84591e159199ef4e6dce566bfb4c25314dd
