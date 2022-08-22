import{S as Y,i as X,s as G,K as W,U as b,k as dt,l as ht,m as mt,h as M,V as w,b as Z,D as U,W as F,L as q,M as K,N as J,X as Q,Y as _t,f as R,t as H,Z as gt,_ as I,$ as x,o as Rt,a0 as $,G as Ht,H as tt,a3 as nt,v as rt,e as lt,w as Pt,x as it,a1 as zt,g as vt,y as ct,d as Nt,A as jt,a4 as kt}from"./index-0280c2c9.js";import{r as wt}from"./index-e6d49891.js";import{_ as V,a as pt,M as Ft,c as D,u as St,f as et,d as Vt}from"./useActions-d72238ee.js";import{c as At,D as Ut,d as Yt,M as Xt}from"./Ripple-3b49acfc.js";/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var E={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},k={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Gt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var st=function(s){V(t,s);function t(e){return s.call(this,pt(pt({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Gt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return k},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Ft);/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var j=0,bt=function(s){V(t,s);function t(e){var o=s.call(this,e)||this;return o.wasDocked=!0,o.isDockedShowing=!0,o.currentAppBarOffsetTop=0,o.isCurrentlyBeingResized=!1,o.resizeThrottleId=j,o.resizeDebounceId=j,o.lastScrollPosition=o.adapter.getViewportScrollY(),o.topAppBarHeight=o.adapter.getTopAppBarHeight(),o}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),o=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=o,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=j,e.throttledResizeHandler()},k.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=j},k.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,o=this.currentAppBarOffsetTop<0,r=this.currentAppBarOffsetTop>e,p=o&&r;if(p)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==r)return this.isDockedShowing=r,!0}else return this.wasDocked=!0,!0;return p},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-k.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(st);/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var Wt=function(s){V(t,s);function t(){var e=s!==null&&s.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(E.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(bt);/**
 * @license
 * Copyright 2018 Google Inc.
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
 */var Zt=function(s){V(t,s);function t(e){var o=s.call(this,e)||this;return o.collapsed=!1,o.isAlwaysCollapsed=!1,o}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(E.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(E.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(E.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(E.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(st);const{window:ut}=Ht;function qt(s){let t,e,o,r,p,g,l;const i=s[22].default,u=W(i,s,s[21],null);let _=[{class:e=D({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7],...s[11]})},{style:o=Object.entries(s[12]).map(ft).concat([s[3]]).join(" ")},s[15]],c={};for(let a=0;a<_.length;a+=1)c=b(c,_[a]);return{c(){t=dt("header"),u&&u.c(),this.h()},l(a){t=ht(a,"HEADER",{class:!0,style:!0});var f=mt(t);u&&u.l(f),f.forEach(M),this.h()},h(){w(t,c)},m(a,f){Z(a,t,f),u&&u.m(t,null),s[25](t),p=!0,g||(l=[U(ut,"resize",s[23]),U(ut,"scroll",s[24]),F(r=St.call(null,t,s[1])),F(s[13].call(null,t)),U(t,"SMUITopAppBarIconButton:nav",s[26])],g=!0)},p(a,f){u&&u.p&&(!p||f[0]&2097152)&&q(u,i,a,a[21],p?J(i,a[21],f,null):K(a[21]),null),w(t,c=Q(_,[(!p||f[0]&2293&&e!==(e=D({[a[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":a[4]==="short","mdc-top-app-bar--short-collapsed":a[0],"mdc-top-app-bar--fixed":a[4]==="fixed","smui-top-app-bar--static":a[4]==="static","smui-top-app-bar--color-secondary":a[5]==="secondary","mdc-top-app-bar--prominent":a[6],"mdc-top-app-bar--dense":a[7],...a[11]})))&&{class:e},(!p||f[0]&4104&&o!==(o=Object.entries(a[12]).map(ft).concat([a[3]]).join(" ")))&&{style:o},f[0]&32768&&a[15]])),r&&_t(r.update)&&f[0]&2&&r.update.call(null,a[1])},i(a){p||(R(u,a),p=!0)},o(a){H(u,a),p=!1},d(a){a&&M(t),u&&u.d(a),s[25](null),g=!1,gt(l)}}}const ft=([s,t])=>`${s}: ${t};`;function Kt(s,t,e){const o=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let r=I(t,o),{$$slots:p={},$$scope:g}=t;const l=et(x());let i=()=>{};function u(n){return n===i}let{use:_=[]}=t,{class:c=""}=t,{style:a=""}=t,{variant:f="standard"}=t,{color:T="primary"}=t,{collapsed:d=i}=t;const B=!u(d)&&!!d;u(d)&&(d=!1);let{prominent:C=!1}=t,{dense:O=!1}=t,{scrollTarget:S=void 0}=t,h,m,A={},y={},P,Tt=wt({variant:f,prominent:C,dense:O},n=>{e(18,P=n)}),L,z=f;Rt(()=>(e(9,m=ot()),m.init(),()=>{m.destroy()}));function ot(){const n={static:st,short:Zt,fixed:Wt}[f]||bt;return new n({hasClass:Ct,addClass:yt,removeClass:Et,setStyle:Bt,getTopAppBarHeight:()=>h.clientHeight,notifyNavigationIconClicked:()=>Vt(h,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>h.querySelectorAll(".mdc-top-app-bar__action-item").length})}function Ct(n){return n in A?A[n]:at().classList.contains(n)}function yt(n){A[n]||e(11,A[n]=!0,A)}function Et(n){(!(n in A)||A[n])&&e(11,A[n]=!1,A)}function Bt(n,N){y[n]!=N&&(N===""||N==null?(delete y[n],e(12,y),e(20,z),e(4,f),e(9,m)):e(12,y[n]=N,y))}function v(){m&&(m.handleTargetScroll(),f==="short"&&e(0,d="isCollapsed"in m&&m.isCollapsed))}function Ot(){return Tt}function at(){return h}const It=()=>f!=="short"&&f!=="fixed"&&m&&m.handleWindowResize(),Dt=()=>S==null&&v();function Lt(n){tt[n?"unshift":"push"](()=>{h=n,e(10,h)})}const Mt=()=>m&&m.handleNavigationClick();return s.$$set=n=>{t=b(b({},t),$(n)),e(15,r=I(t,o)),"use"in n&&e(1,_=n.use),"class"in n&&e(2,c=n.class),"style"in n&&e(3,a=n.style),"variant"in n&&e(4,f=n.variant),"color"in n&&e(5,T=n.color),"collapsed"in n&&e(0,d=n.collapsed),"prominent"in n&&e(6,C=n.prominent),"dense"in n&&e(7,O=n.dense),"scrollTarget"in n&&e(8,S=n.scrollTarget),"$$scope"in n&&e(21,g=n.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&P&&P({variant:f,prominent:C,dense:O}),s.$$.dirty[0]&1049104&&z!==f&&m&&(e(20,z=f),m.destroy(),e(11,A={}),e(12,y={}),e(9,m=ot()),m.init()),s.$$.dirty[0]&528&&m&&f==="short"&&"setAlwaysCollapsed"in m&&m.setAlwaysCollapsed(B),s.$$.dirty[0]&524544&&L!==S&&(L&&L.removeEventListener("scroll",v),S&&S.addEventListener("scroll",v),e(19,L=S))},[d,_,c,a,f,T,C,O,S,m,h,A,y,l,v,r,Ot,at,P,L,z,g,p,It,Dt,Lt,Mt]}class le extends Y{constructor(t){super(),X(this,t,Kt,qt,G,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const ie=At({class:"mdc-top-app-bar__row",component:Ut});function Jt(s){let t,e,o,r,p,g;const l=s[9].default,i=W(l,s,s[8],null);let u=[{class:e=D({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],_={};for(let c=0;c<u.length;c+=1)_=b(_,u[c]);return{c(){t=dt("section"),i&&i.c(),this.h()},l(c){t=ht(c,"SECTION",{class:!0});var a=mt(t);i&&i.l(a),a.forEach(M),this.h()},h(){w(t,_)},m(c,a){Z(c,t,a),i&&i.m(t,null),s[10](t),r=!0,p||(g=[F(o=St.call(null,t,s[0])),F(s[5].call(null,t))],p=!0)},p(c,[a]){i&&i.p&&(!r||a&256)&&q(i,l,c,c[8],r?J(l,c[8],a,null):K(c[8]),null),w(t,_=Q(u,[(!r||a&6&&e!==(e=D({[c[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":c[2]==="start","mdc-top-app-bar__section--align-end":c[2]==="end"})))&&{class:e},a&8&&(c[3]?{role:"toolbar"}:{}),a&64&&c[6]])),o&&_t(o.update)&&a&1&&o.update.call(null,c[0])},i(c){r||(R(i,c),r=!0)},o(c){H(i,c),r=!1},d(c){c&&M(t),i&&i.d(c),s[10](null),p=!1,gt(g)}}}function Qt(s,t,e){const o=["use","class","align","toolbar","getElement"];let r=I(t,o),{$$slots:p={},$$scope:g}=t;const l=et(x());let{use:i=[]}=t,{class:u=""}=t,{align:_="start"}=t,{toolbar:c=!1}=t,a;nt("SMUI:icon-button:context",c?"top-app-bar:action":"top-app-bar:navigation"),nt("SMUI:button:context",c?"top-app-bar:action":"top-app-bar:navigation");function f(){return a}function T(d){tt[d?"unshift":"push"](()=>{a=d,e(4,a)})}return s.$$set=d=>{t=b(b({},t),$(d)),e(6,r=I(t,o)),"use"in d&&e(0,i=d.use),"class"in d&&e(1,u=d.class),"align"in d&&e(2,_=d.align),"toolbar"in d&&e(3,c=d.toolbar),"$$scope"in d&&e(8,g=d.$$scope)},[i,u,_,c,a,l,r,f,g,p,T]}class xt extends Y{constructor(t){super(),X(this,t,Qt,Jt,G,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const ce=At({class:"mdc-top-app-bar__title",component:Yt});function $t(s){let t;const e=s[11].default,o=W(e,s,s[13],null);return{c(){o&&o.c()},l(r){o&&o.l(r)},m(r,p){o&&o.m(r,p),t=!0},p(r,p){o&&o.p&&(!t||p&8192)&&q(o,e,r,r[13],t?J(e,r[13],p,null):K(r[13]),null)},i(r){t||(R(o,r),t=!0)},o(r){H(o,r),t=!1},d(r){o&&o.d(r)}}}function te(s){let t,e,o;const r=[{use:[s[6],...s[0]]},{class:D({[s[1]]:!0,[s[5]]:!0})},s[7]];var p=s[2];function g(l){let i={$$slots:{default:[$t]},$$scope:{ctx:l}};for(let u=0;u<r.length;u+=1)i=b(i,r[u]);return{props:i}}return p&&(t=new p(g(s)),s[12](t)),{c(){t&&rt(t.$$.fragment),e=lt()},l(l){t&&Pt(t.$$.fragment,l),e=lt()},m(l,i){t&&it(t,l,i),Z(l,e,i),o=!0},p(l,[i]){const u=i&227?Q(r,[i&65&&{use:[l[6],...l[0]]},i&34&&{class:D({[l[1]]:!0,[l[5]]:!0})},i&128&&zt(l[7])]):{};if(i&8192&&(u.$$scope={dirty:i,ctx:l}),p!==(p=l[2])){if(t){vt();const _=t;H(_.$$.fragment,1,0,()=>{ct(_,1)}),Nt()}p?(t=new p(g(l)),l[12](t),rt(t.$$.fragment),R(t.$$.fragment,1),it(t,e.parentNode,e)):t=null}else p&&t.$set(u)},i(l){o||(t&&R(t.$$.fragment,l),o=!0)},o(l){t&&H(t.$$.fragment,l),o=!1},d(l){s[12](null),l&&M(e),t&&ct(t,l)}}}function ee(s,t,e){let o,r;const p=["use","class","topAppBar","component","getElement"];let g=I(t,p),l,i=jt,u=()=>(i(),i=kt(o,h=>e(10,l=h)),o);s.$$.on_destroy.push(()=>i());let{$$slots:_={},$$scope:c}=t;const a=et(x());let{use:f=[]}=t,{class:T=""}=t,{topAppBar:d}=t,B,{component:C=Xt}=t;function O(){return B.getElement()}function S(h){tt[h?"unshift":"push"](()=>{B=h,e(4,B)})}return s.$$set=h=>{t=b(b({},t),$(h)),e(7,g=I(t,p)),"use"in h&&e(0,f=h.use),"class"in h&&e(1,T=h.class),"topAppBar"in h&&e(8,d=h.topAppBar),"component"in h&&e(2,C=h.component),"$$scope"in h&&e(13,c=h.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&u(e(3,o=d&&d.getPropStore())),s.$$.dirty&1032&&e(5,r=(()=>!o||l.variant==="static"?"":l.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":l.prominent&&l.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":l.prominent?"mdc-top-app-bar--prominent-fixed-adjust":l.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")())},[f,T,C,o,B,r,a,g,d,O,l,_,S,c]}class se extends Y{constructor(t){super(),X(this,t,ee,te,G,{use:0,class:1,topAppBar:8,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}}const pe=xt,ue=se;export{ue as A,ie as R,pe as S,le as T,ce as a};
