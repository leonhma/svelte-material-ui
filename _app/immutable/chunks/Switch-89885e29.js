import{S as me,i as _e,s as Ce,U as Y,k as M,a as H,l as R,m as w,h as D,c as W,n as I,V as Z,b as de,C as y,W as q,D as Ee,X as ue,Y as x,A as re,Z as ye,_ as ie,$ as De,a2 as Se,o as Oe,a0 as we,R as B,T as j,H as ae}from"./index-0280c2c9.js";import{a as Ie,b as N,_ as $,e as ke,g as Pe,M as Me,c as J,u as he,f as Re,d as z}from"./useActions-d72238ee.js";import{e as ne,p as le}from"./prefixFilter-4c6b67e2.js";import{R as Le}from"./Ripple-3b49acfc.js";/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var F;(function(s){s.PROCESSING="mdc-switch--processing",s.SELECTED="mdc-switch--selected",s.UNSELECTED="mdc-switch--unselected"})(F||(F={}));var oe;(function(s){s.RIPPLE=".mdc-switch__ripple"})(oe||(oe={}));/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Fe(s,t,e){var i=Te(s,t),c=i.getObservers(t);return c.push(e),function(){c.splice(c.indexOf(e),1)}}var X=new WeakMap;function Te(s,t){var e=new Map;X.has(s)||X.set(s,{isEnabled:!0,getObservers:function(d){var m=e.get(d)||[];return e.has(d)||e.set(d,m),m},installedProperties:new Set});var i=X.get(s);if(i.installedProperties.has(t))return i;var c=Ue(s,t)||{configurable:!0,enumerable:!0,value:s[t],writable:!0},l=Ie({},c),u=c.get,f=c.set;if("value"in c){delete l.value,delete l.writable;var v=c.value;u=function(){return v},c.writable&&(f=function(d){v=d})}return u&&(l.get=function(){return u.call(this)}),f&&(l.set=function(d){var m,p,_=u?u.call(this):d;if(f.call(this,d),i.isEnabled&&(!u||d!==_))try{for(var a=N(i.getObservers(t)),o=a.next();!o.done;o=a.next()){var h=o.value;h(d,_)}}catch(C){m={error:C}}finally{try{o&&!o.done&&(p=a.return)&&p.call(a)}finally{if(m)throw m.error}}}),i.installedProperties.add(t),Object.defineProperty(s,t,l),i}function Ue(s,t){for(var e=s,i;e&&(i=Object.getOwnPropertyDescriptor(e,t),!i);)e=Object.getPrototypeOf(e);return i}function Ae(s,t){var e=X.get(s);e&&(e.isEnabled=t)}/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ge=function(s){$(t,s);function t(e){var i=s.call(this,e)||this;return i.unobserves=new Set,i}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.unobserve()},t.prototype.observe=function(e,i){var c,l,u=this,f=[];try{for(var v=N(Object.keys(i)),d=v.next();!d.done;d=v.next()){var m=d.value,p=i[m].bind(this);f.push(this.observeProperty(e,m,p))}}catch(a){c={error:a}}finally{try{d&&!d.done&&(l=v.return)&&l.call(v)}finally{if(c)throw c.error}}var _=function(){var a,o;try{for(var h=N(f),C=h.next();!C.done;C=h.next()){var b=C.value;b()}}catch(P){a={error:P}}finally{try{C&&!C.done&&(o=h.return)&&o.call(h)}finally{if(a)throw a.error}}u.unobserves.delete(_)};return this.unobserves.add(_),_},t.prototype.observeProperty=function(e,i,c){return Fe(e,i,c)},t.prototype.setObserversEnabled=function(e,i){Ae(e,i)},t.prototype.unobserve=function(){var e,i;try{for(var c=N(ke([],Pe(this.unobserves))),l=c.next();!l.done;l=c.next()){var u=l.value;u()}}catch(f){e={error:f}}finally{try{l&&!l.done&&(i=c.return)&&i.call(c)}finally{if(e)throw e.error}}},t}(Me);/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ve=function(s){$(t,s);function t(e){var i=s.call(this,e)||this;return i.handleClick=i.handleClick.bind(i),i}return t.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},t.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},t.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},t}(Ge),Be=function(s){$(t,s);function t(){return s!==null&&s.apply(this,arguments)||this}return t.prototype.init=function(){s.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},t.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(F.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(F.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},t.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},t.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,F.PROCESSING)},t.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,F.SELECTED),this.toggleClass(!this.adapter.state.selected,F.UNSELECTED)},t.prototype.toggleClass=function(e,i){e?this.adapter.addClass(i):this.adapter.removeClass(i)},t}(Ve);function ce(s){let t,e,i,c,l,u,f,v,d,m,p=[{class:f=J({[s[7]]:!0,"mdc-switch__icons":!0})},le(s[18],"icons$")],_={};for(let a=0;a<p.length;a+=1)_=Y(_,p[a]);return{c(){t=M("div"),e=B("svg"),i=B("path"),c=H(),l=B("svg"),u=B("path"),this.h()},l(a){t=R(a,"DIV",{class:!0});var o=w(t);e=j(o,"svg",{class:!0,viewBox:!0});var h=w(e);i=j(h,"path",{d:!0}),w(i).forEach(D),h.forEach(D),c=W(o),l=j(o,"svg",{class:!0,viewBox:!0});var C=w(l);u=j(C,"path",{d:!0}),w(u).forEach(D),C.forEach(D),o.forEach(D),this.h()},h(){I(i,"d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"),I(e,"class","mdc-switch__icon mdc-switch__icon--on"),I(e,"viewBox","0 0 24 24"),I(u,"d","M20 13H4v-2h16v2z"),I(l,"class","mdc-switch__icon mdc-switch__icon--off"),I(l,"viewBox","0 0 24 24"),Z(t,_)},m(a,o){de(a,t,o),y(t,e),y(e,i),y(t,c),y(t,l),y(l,u),d||(m=q(v=he.call(null,t,s[6])),d=!0)},p(a,o){Z(t,_=ue(p,[o[0]&128&&f!==(f=J({[a[7]]:!0,"mdc-switch__icons":!0}))&&{class:f},o[0]&262144&&le(a[18],"icons$")])),v&&x(v.update)&&o[0]&64&&v.update.call(null,a[6])},d(a){a&&D(t),d=!1,m()}}}function je(s){let t,e,i,c,l,u,f,v,d,m,p,_,a,o,h,C,b=s[5]&&ce(s),P=[{class:p=J({[s[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!s[9],"mdc-switch--selected":s[9],"mdc-switch--processing":s[1],"smui-switch--color-secondary":s[4]==="secondary",...s[11]})},{type:"button"},{role:"switch"},{"aria-checked":_=s[9]?"true":"false"},{disabled:s[0]},s[15],ne(s[18],["icons$"])],L={};for(let n=0;n<P.length;n+=1)L=Y(L,P[n]);return{c(){t=M("button"),e=M("div"),i=H(),c=M("div"),l=M("div"),u=M("div"),f=M("div"),v=H(),d=M("div"),m=H(),b&&b.c(),this.h()},l(n){t=R(n,"BUTTON",{class:!0,type:!0,role:!0,"aria-checked":!0});var g=w(t);e=R(g,"DIV",{class:!0}),w(e).forEach(D),i=W(g),c=R(g,"DIV",{class:!0});var S=w(c);l=R(S,"DIV",{class:!0});var k=w(l);u=R(k,"DIV",{class:!0});var T=w(u);f=R(T,"DIV",{class:!0}),w(f).forEach(D),T.forEach(D),v=W(k),d=R(k,"DIV",{class:!0}),w(d).forEach(D),m=W(k),b&&b.l(k),k.forEach(D),S.forEach(D),g.forEach(D),this.h()},h(){I(e,"class","mdc-switch__track"),I(f,"class","mdc-elevation-overlay"),I(u,"class","mdc-switch__shadow"),I(d,"class","mdc-switch__ripple"),I(l,"class","mdc-switch__handle"),I(c,"class","mdc-switch__handle-track"),Z(t,L)},m(n,g){de(n,t,g),y(t,e),y(t,i),y(t,c),y(c,l),y(l,u),y(u,f),y(l,v),y(l,d),s[27](d),y(l,m),b&&b.m(l,null),t.autofocus&&t.focus(),s[28](t),h||(C=[q(a=he.call(null,t,s[2])),q(s[14].call(null,t)),q(o=Le.call(null,t,{unbounded:!0,color:s[4],active:s[13],rippleElement:s[12],disabled:s[0],addClass:s[16],removeClass:s[17]})),Ee(t,"click",s[29])],h=!0)},p(n,g){n[5]?b?b.p(n,g):(b=ce(n),b.c(),b.m(l,null)):b&&(b.d(1),b=null),Z(t,L=ue(P,[g[0]&2586&&p!==(p=J({[n[3]]:!0,"mdc-switch":!0,"mdc-switch--unselected":!n[9],"mdc-switch--selected":n[9],"mdc-switch--processing":n[1],"smui-switch--color-secondary":n[4]==="secondary",...n[11]}))&&{class:p},{type:"button"},{role:"switch"},g[0]&512&&_!==(_=n[9]?"true":"false")&&{"aria-checked":_},g[0]&1&&{disabled:n[0]},n[15],g[0]&262144&&ne(n[18],["icons$"])])),a&&x(a.update)&&g[0]&4&&a.update.call(null,n[2]),o&&x(o.update)&&g[0]&12305&&o.update.call(null,{unbounded:!0,color:n[4],active:n[13],rippleElement:n[12],disabled:n[0],addClass:n[16],removeClass:n[17]})},i:re,o:re,d(n){n&&D(t),s[27](null),b&&b.d(),s[28](null),h=!1,ye(C)}}}function ze(s,t,e){const i=["use","class","disabled","color","group","checked","value","processing","icons","icons$use","icons$class","getId","getElement"];let c=ie(t,i);var l;const u=Re(De());let f=()=>{};function v(r){return r===f}let{use:d=[]}=t,{class:m=""}=t,{disabled:p=!1}=t,{color:_="primary"}=t,{group:a=f}=t,{checked:o=f}=t,{value:h=null}=t,{processing:C=!1}=t,{icons:b=!0}=t,{icons$use:P=[]}=t,{icons$class:L=""}=t,n,g,S={},k,T=!1,K=(l=Se("SMUI:generic:input:props"))!==null&&l!==void 0?l:{},E=v(a)?v(o)?!1:o:a.indexOf(h)!==-1,A={get disabled(){return p},set disabled(r){e(0,p=r)},get processing(){return C},set processing(r){e(1,C=r)},get selected(){return E},set selected(r){e(9,E=r)}},G=o,V=v(a)?[]:[...a],U=E;Oe(()=>{e(10,g=new Be({addClass:ee,hasClass:fe,isDisabled:()=>p,removeClass:te,setAriaChecked:()=>{},setDisabled:O=>{e(0,p=O)},state:A}));const r={get element(){return Q()},get checked(){return E},set checked(O){E!==O&&(A.selected=O,n&&z(n,"SMUISwitch:change",{selected:O,value:h}))},activateRipple(){p||e(13,T=!0)},deactivateRipple(){e(13,T=!1)}};return z(n,"SMUIGenericInput:mount",r),g.init(),g.initFromDOM(),()=>{z(n,"SMUIGenericInput:unmount",r),g.destroy()}});function fe(r){return r in S?S[r]:Q().classList.contains(r)}function ee(r){S[r]||e(11,S[r]=!0,S)}function te(r){(!(r in S)||S[r])&&e(11,S[r]=!1,S)}function ve(){return K&&K.id}function Q(){return n}function ge(r){ae[r?"unshift":"push"](()=>{k=r,e(12,k)})}function pe(r){ae[r?"unshift":"push"](()=>{n=r,e(8,n)})}const be=()=>g&&g.handleClick();return s.$$set=r=>{t=Y(Y({},t),we(r)),e(18,c=ie(t,i)),"use"in r&&e(2,d=r.use),"class"in r&&e(3,m=r.class),"disabled"in r&&e(0,p=r.disabled),"color"in r&&e(4,_=r.color),"group"in r&&e(19,a=r.group),"checked"in r&&e(20,o=r.checked),"value"in r&&e(21,h=r.value),"processing"in r&&e(1,C=r.processing),"icons"in r&&e(5,b=r.icons),"icons$use"in r&&e(6,P=r.icons$use),"icons$class"in r&&e(7,L=r.icons$class)},s.$$.update=()=>{if(s.$$.dirty[0]&121111296){let r=!1;if(!v(a))if(U!==E){const O=a.indexOf(h);E&&O===-1?(a.push(h),e(19,a),e(26,U),e(9,E),e(21,h),e(25,V),e(20,o),e(24,G),e(8,n)):!E&&O!==-1&&(a.splice(O,1),e(19,a),e(26,U),e(9,E),e(21,h),e(25,V),e(20,o),e(24,G),e(8,n)),r=!0}else{const O=V.indexOf(h),se=a.indexOf(h);O>-1&&se===-1?A.selected=!1:se>-1&&O===-1&&(A.selected=!0)}v(o)?U!==E&&(r=!0):o!==E&&(o===G?(e(20,o=E),r=!0):A.selected=o),e(24,G=o),e(25,V=v(a)?[]:[...a]),e(26,U=E),r&&n&&z(n,"SMUISwitch:change",{selected:E,value:h})}},[p,C,d,m,_,b,P,L,n,E,g,S,k,T,u,K,ee,te,c,a,o,h,ve,Q,G,V,U,ge,pe,be]}class Xe extends me{constructor(t){super(),_e(this,t,ze,je,Ce,{use:2,class:3,disabled:0,color:4,group:19,checked:20,value:21,processing:1,icons:5,icons$use:6,icons$class:7,getId:22,getElement:23},null,[-1,-1])}get getId(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}export{Xe as S};
